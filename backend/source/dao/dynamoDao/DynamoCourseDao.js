const ICourseDao = require('../interface/ICourseDao.js');
const Course = require('../../../shared/shared.js').Course;
const Unit = require('../../../shared/shared.js').Unit; 
const Lesson = require('../../../shared/shared.js').Lesson; 
const AWS = require('aws-sdk');
const InternalDBError = require('./../../error/InternalDBError.js');
const InvalidDataDBError = require('./../../error/InvalidDataDBError.js');
const AllCoursesResponse = require('../../shared/shared.js').AllCoursesResponse;

AWS.config.update({
  region: 'us-west-2'
});

const docClient = new AWS.DynamoDB.DocumentClient();

module.exports = 
  class DynamoCourseDao extends ICourseDao {
    tableName = "VideoCourse_Course"; 

    async getCourse(courseName) {
      const table = this.tableName; 
      const params = {
        TableName: table, 
        Key: {
          "Course_Name": courseName
        }
      };

      try {
        let data = await docClient.get(params).promise(); 
        console.log(data);
        if (!data.Item) {
          throw new InvalidDataDBError("No such course exists.");
        }

        const course = this.buildCourseObjFromDatabaseCourse(data.Item);
        console.log(course); 
        return course; 
      } catch(err) {
        if (err instanceof InvalidDataDBError) {
          throw err; 
        }

        console.log("Unable get course. Error JSON:", JSON.stringify(err, null, 2));
        throw new InternalDBError("Failed to get course.");
      }
    }

    // Filtering will be added if we have extra time...
    async getAllCourses(lastCourseName, filter, getOnlyClassData) {
      const tableName = this.tableName; 
      let params = {
        TableName: tableName, 
        ProjectionExpression: "Course_Name, Created"
      };

      if (lastCourseName) {
        params.ExclusiveStartKey = lastCourseName; 
      }

      if (!getOnlyClassData) {
        params.ProjectionExpression = params.ProjectionExpression + ", Units";
      }

      try {
        let data = await docClient.scan(params).promise();
        let courses = []; 
        for (let i = 0; i < data.Items.length; ++i) {
          courses.push(this.buildCourseObjFromDatabaseCourse(data.Items[i]));
        }
        
        return courses;
      } catch(err) {
        console.log("Unable to get courses. Error JSON:", JSON.stringify(err, null, 2));
        throw new InternalDBError("Unable to get courses.");
      }
    }

    // Helper - Allows for preview of course to be obtained. 
    buildCourseObjFromDatabaseCourse(item, unitsLimit, lessonLimit) {
      const MAX_EXPECTED_UNITS = 25; 
      const MAX_EXPECTED_LESSONS_PER_UNIT = 10; 

      // Add all of the units. 
      let units = []; 
      if (item.Units) {
        const dbUnits = item.Units; 
        for (let i = 0; i < Math.min(dbUnits.length, lessonLimit ? lessonLimit : MAX_EXPECTED_UNITS); ++i) {
          let lessons = []; 
          let dbUnit = dbUnits[i]; 
          // Add all of the lessons. 
          if (dbUnit.Lessons) {
            for (let j = 0; j < Math.min(dbUnit.Lessons.length, unitsLimit ? unitsLimit : MAX_EXPECTED_LESSONS_PER_UNIT); ++j) {
              let lesson = dbUnit.Lessons[j]; 
              lessons.push(new Lesson("", lesson.Lesson_Name, lesson.Video_Url, lesson.Lesson_Number, lesson.Created));
            }
          }
          
          units.push(new Unit("", dbUnit.Unit_Name, dbUnit.Unit_Number, dbUnit.Created, lessons)); 
        }
      }
      
      return new Course("", item.Course_Name, item.Created, units);
    }

    async createCourse(course, teacherName) {
      const tableName = this.tableName; 
      console.log(course);
      let jsCourse = this.buildDatabaseCourseFromCourseObject(course); 
      jsCourse["Teacher_Username"] = teacherName; 

      console.log("COURSE!");
      console.log(course);

      let params = {
        TableName: tableName, 
        Item: jsCourse
      }
      console.log(params); 

      try {
        await docClient.put(params).promise(); 
        return true; 
      } catch(err) {
        throw new InternalDBError("Failed to create course.");
      }
    }

    // Todo: Make a more general purpose function for this later on (simplify as well). 
    buildDatabaseCourseFromCourseObject(course) {
      let jsCourse = {
        Course_Name: course.courseName, 
        Created: course.creationDate,
        Units: []
      }

      const units = course.units; 
      let jsUnits = [];

      for (let i = 0; i < units.length; ++i) {
        let unit = units[i]; 
        let jsLessons = [];
        for (let j = 0; j < unit.lessons.length; ++j) {
          let lesson = unit.lessons[j]; 
          console.log("Late lesson!"); 
          console.log(lesson); 
          let jsLesson = {
            Lesson_Name: lesson.lessonName, 
            Lesson_Number: lesson.lessonNumber, 
            Video_Url: lesson.lessonVideo,
            Created: lesson.creationDate
          }

          jsLessons.push(jsLesson); 
        }

        let jsUnit = {
          Unit_Name: unit.unitName, 
          Unit_Number: unit.unitNumber, 
          Created: unit.creationDate, 
          Lessons: jsLessons
        }; 

        jsUnits.push(jsUnit); 
      }

      jsCourse["Units"] = jsUnits; 
      return jsCourse; 
    }
  }