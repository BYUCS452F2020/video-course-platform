const DynamoCourseDao = require('../dao/dynamoDao/DynamoCourseDao.js');
const CreateCourseResponse = require('../../shared/shared.js').CreateCourseResponse;
const ErrorResponse = require('../../shared/shared.js').ErrorResponse; 
const ServiceHelper = require('./ServiceHelper.js'); 
const InternalDBError = require("../error/InternalDBError"); 

module.exports = 
  class AWSCreateCourseService {
    static async createCourse(createCourseRequest) {
      let dao = new DynamoCourseDao(); 
      let courseExists = false; 
      try {
        console.log(createCourseRequest.course.courseName)
        await dao.getCourse(createCourseRequest.course.courseName);
        courseExists = true; 
      } catch(err) {
        if (err instanceof InternalDBError) {
          return ServiceHelper.appendServerErrorNumber(err, err.message);
        }
        
        console.log("Course does not exist."); 
      }
      
      if (courseExists) {
        return new ErrorResponse("A course with that name already exists.", false, 200); 
      }

      try {
        await dao.createCourse(createCourseRequest.course, createCourseRequest.teacherName);
        return new CreateCourseResponse("Success", true); 
      } catch(err) {
        return ServiceHelper.appendServerErrorNumber(err, err.message);
      }
    }
  }