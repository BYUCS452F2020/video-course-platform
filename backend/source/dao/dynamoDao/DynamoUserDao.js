const IUserDao = require('../interface/IUserDao.js');
const User = require('../../../shared/shared.js').User;
const Enrollment = require('../../../shared/shared.js').Enrollment; 
const AWS = require('aws-sdk');
const InternalDBError = require('./../../error/InternalDBError.js');
const InvalidDataDBError = require('./../../error/InvalidDataDBError.js');

AWS.config.update({
  region: 'us-west-2'
});

const docClient = new AWS.DynamoDB.DocumentClient();

// TODO: Update the form to try/catch form instead of 
// using promises (for consistency). 

module.exports = 
  class DynamoUserDao extends IUserDao {
    constructor() { 
      super(); 
    }
    
    tableName = "VideoCourse_User"; 

    async createUser(user, password) {
      const table = this.tableName; 
      const params = {
        TableName: table, 
        Item: {
          "Username": user.username, 
          "Password": password, 
          "First_Name": user.firstName, 
          "Last_Name": user.lastName, 
          "Email": user.email, 
          "Role": user.role, 
          "Sign_Up_Date": user.signUpDate, 
          "Enrollments": []
        }
      };
      console.log(params); 

      return docClient.put(params).promise().then(data => {
        return user;
      }).catch(err => {
        throw new InternalDBError("Failed to create user.");
      });
    }

    async getUser(username, password) {
      const params = this.getUserParams(username); 
      return docClient.get(params).promise().then(data => {
        // Only return the user if the password matches. 
        if (!data.Item || (password && data.Item.Password !== password)) {
          throw new InvalidDataDBError("Invalid credentials."); 
        }

        return new User("", data.Item.Username, data.Item.First_Name, data.Item.Last_Name, 
                        data.Item.Email, data.Item.Role, data.Item.Sign_Up_Date);

      }).catch(err => {
        if (err instanceof InvalidDataDBError) {
          throw err;
        }

        console.log("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        throw new InternalDBError("Failed to find user.");
      });
    }

    async getUserIfPasswordMatch(username, password) {
      const params = this.getUserParams(username); 
      return docClient.get(params).promise().then(data => {
        // Only return the user if the password matches. 
        if (!data.Item || (data.Item.Password !== password)) {
          throw new InvalidDataDBError("Invalid credentials."); 
        }

        return new User("", data.Item.Username, data.Item.First_Name, data.Item.Last_Name, 
                        data.Item.Email, data.Item.Role, data.Item.Sign_Up_Date);

      }).catch(err => {
        console.log("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        throw new InternalDBError("Failed to find user.");
      });
    }

    async getUserCourses(username) {
      const params = this.getUserParams(username); 

      return docClient.get(params).promise().then(data => {
        // Only return the user if the password matches. 
        let dbEnrollments = data.Item.Enrollments; 
        let returnEnrollments = []; 
        for (let i = 0; i < dbEnrollments.length; ++i) {
          returnEnrollments.push(new Enrollment(dbEnrollments[i].Course_Name, dbEnrollments[i].Course_Name, null));
        }

        return returnEnrollments; 

      }).catch(err => {
        console.log("Unable to obtain enrollments. Error JSON:", JSON.stringify(err, null, 2));
        throw new InternalDBError("Failed to obtain enrollments.");
      });
    }

    // TODO: Simplify this code later on (duplicate code)...
    async addEnrollment(username, courseName) {
      console.log("USERNAME AND COURSE NAME!");
      console.log(username); 
      console.log(courseName); 
      let params = this.getUserParams(username); 
      const table = this.tableName; 
      let dbEnrollments = null; 

      // Check user exists, and that they have not already signed up for course. 
      try {
        let data = await docClient.get(params).promise();

        if (!data.Item) {
          throw new InvalidDataDBError("User does not exist.");
        }

        dbEnrollments = data.Item.Enrollments; 
        for (let i = 0; i < dbEnrollments.length; ++i) {
          if (dbEnrollments[i].Course_Name === courseName) {
            throw new InvalidDataDBError("User already signed up for course."); 
          }
        }

      } catch(err) {
        if (err instanceof InvalidDataDBError) {
          throw err; 
        }

        console.log("Unable to find user. Error JSON:", JSON.stringify(err, null, 2));
        throw new InternalDBError("Failed to enroll in course.");
      }

      // Enroll the user. 
      if (dbEnrollments) {
        let updatedExpressionString = "set Enrollments[" + dbEnrollments.length + "] = :e"; 
        params = {
          TableName: table, 
          Key: {
            "Username": username
          },
          UpdateExpression: updatedExpressionString,
          ExpressionAttributeValues: {
            ":e": courseName
          },
          ReturnValues: "UPDATED_NEW"
        };

        // Second Request. 
        try {
          // TODO: MAY NEED TO ADJUST BELOW TO CHECK DATA. 
          await docClient.update(params).promise();
          return true; 
        } catch(err) {
          console.log("Unable to update user enrollments. Error JSON:", JSON.stringify(err, null, 2));
          throw new InternalDBError("Failed to enroll in course.");
        }
      }
    }

    // Helper function. 
    getUserParams(username) {
      const table = this.tableName; 
      return {
        TableName: table, 
        Key: {
          "Username": username
        }
      };
    }

    deleteUser(user) {
      throw 'Implement deleteUser(user) in child class.';  
    }
  }

  // LOGIC (So i don't forget...)
  /* 
    - Pages: 
    - 
    - TeacherSignUpPage: -> Similar to the normal signup page, except they will 
    - also submit information like their background, years of experience, email, phone number, 
    - sample website. Will be stored in a sparse index on the main user table. This 
    - information will also be stored in the course table. 
    -
    - EditCoursePage: -> Looks exactly like the CoursePage, except there are 
    - places to edit many different fields. Changes to the course will all be 
    - made add once, so we limit the number of requests that have to be made. 
    - 
    - TeacherCoursesPage: -> Same as Student EnrollmentsPage, except we will 
    - show when the course was first created, and last modified on that page as well. 
    - 
    - AdminPage: -> For now only grabs and displays all of the people that have 
    - attempted to become teachers. There is a button to approve someone to become a 
    - teacher for the course. 
    - 
    - AdminAcceptPage: -> Allows an admin to accept a new teacher. This is beneficial 
    - so the admin can review the teacher's information. 
    
    Course Data Structure: 

    Course: {
      Course_Name: string, 
      Teacher_Username: string,
      Created: string,
      Units: [
        {
          Unit_Name: string, 
          Unit_Number: number, 
          Created: string, 
          lessons: [
            {
              Lesson_Name: string, 
              Lesson_Number: number, 
              Video_Url: string, 
              Created: string
            }
          ]
        }
      ]
    }

    Teacher_Info: {
        First_Name: string, 
        Last_Name: string, 
        Phone: string, 
        Email: string, 
        Background: string, 
        Years_Of_Experience: number,
        Sample_Website: string
      }
  */ 