const AWSGetCourseService = require('../service/AWSGetCourseService'); 
const CourseRequest = require('../../shared/shared.js').CourseRequest; 
const CourseResponse = require('../../shared/shared.js').CourseResponse;
const ErrorResponse = require('../../shared/shared.js').ErrorResponse; 

exports.handler = function(event, context, callback) {
  if (!event._courseId) {
    return callback(Error("[BadRequest]: The request must have a course ID."));
  } 
  else {
    AWSGetCourseService.getCourse(new CourseRequest(event._courseId)).then(response => {
      if (response instanceof CourseResponse) {
        return callback(null, response); 
      }
      else if (response instanceof ErrorResponse) {
        return callback(Error(response.message));
      }
    });
  }
}