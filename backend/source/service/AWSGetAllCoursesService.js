const DynamoCourseDao = require('../dao/dynamoDao/DynamoCourseDao.js');
const AllCoursesResponse = require('../../shared/shared.js').AllCoursesResponse; 
const ErrorResponse = require('../../shared/shared.js').ErrorResponse;
const ServiceHelper = require('./ServiceHelper.js'); 

// TODO: Simply this process so it uses less try/catches and requests. 
module.exports = 
  class AWSEnrollmentService {
    static async getAllCourses(allCoursesRequest) { 
      let courseDao = new DynamoCourseDao(); 

      // Verify the course exists. 
      try {
        return await courseDao.getAllCourses(allCoursesRequest.lastCourseName); 
      } catch(err) {
        return ServiceHelper.appendServerErrorNumber(err, err.message); 
      }
    }
  }