const UserCoursesResponse = require('../../shared/shared.js').UserCoursesResponse; 
const DynamoUserDao =  require('../dao/dynamoDao/DynamoUserDao.js');
const ServiceHelper = require('./ServiceHelper.js');

module.exports = 
  class AWSCoursesService {
    static async getCourses(userCoursesRequest) {
      let dao = new DynamoUserDao(); 
      
      try {
        console.log(userCoursesRequest);
        let enrollments = await dao.getUserCourses(userCoursesRequest.userId);
        return new UserCoursesResponse("Success", true, enrollments);
      } catch(err) {
        return ServiceHelper.appendServerErrorNumber(err, err.message);
      }
    }
  } 