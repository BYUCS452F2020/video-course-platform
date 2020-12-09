const DynamoCourseDao =  require('../dao/dynamoDao/DynamoCourseDao.js');
const CourseResponse = require('../../shared/shared.js').CourseResponse; 
const ServiceHelper = require('./ServiceHelper.js'); 

module.exports = 
  class AWSGetCourseService {
    static async getCourse(courseRequest) {
      let dao = new DynamoCourseDao(); 

      try {
        let course = await dao.getCourse(courseRequest.courseId);
        return new CourseResponse("Success", true, course);
      } catch(err) {
        // RENAME THE BELOW FUNCTION. 
        return ServiceHelper.appendServerErrorNumber(err, err.message);
      } 
    }
  }