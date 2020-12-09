const DynamoUserDao = require('../dao/dynamoDao/DynamoUserDao.js'); 
const DynamoCourseDao = require('../dao/dynamoDao/DynamoCourseDao.js');
const EnrollmentResponse = require('../../shared/shared.js').EnrollmentResponse; 
const ErrorResponse = require('../../shared/shared.js').ErrorResponse;
const ServiceHelper = require('./ServiceHelper.js'); 

// TODO: Simply this process so it uses less try/catches and requests. 
module.exports = 
  class AWSEnrollmentService {
    static async enroll(enrollmentRequest) {
      let userDao = new DynamoUserDao(); 
      let courseDao = new DynamoCourseDao(); 

      // Verify the course exists. 
      try {
        await courseDao.getCourse(enrollmentRequest.courseId); 
      } catch(err) {
        return ServiceHelper.appendServerErrorNumber(err, err.message); 
      }

      // Add the course (will fail if user does not exist, or they have already signed up 
      // for the course). 
      try {
        await userDao.addEnrollment(enrollmentRequest.userId, enrollmentRequest.courseId);
        return new EnrollmentResponse("Success", true); 
      } catch(err) {
        return ServiceHelper.appendServerErrorNumber(err, err.message); 
      }
    }
  }