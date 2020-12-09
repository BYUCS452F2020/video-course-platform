const AWSEnrollmentService = require('../service/AWSEnrollmentService'); 
const EnrollmentRequest = require('../../shared/shared.js').EnrollmentRequest; 
const EnrollmentResponse = require('../../shared/shared.js').EnrollmentResponse;
const ErrorResponse = require('../../shared/shared.js').ErrorResponse; 

exports.handler = function(event, context, callback) {
  if (!event._userId || !event._courseId) {
    return callback(Error("[BadRequest]: The request must have a user ID and course ID."));
  } 
  else {
    AWSEnrollmentService.enroll(new EnrollmentRequest(event._userId, event._courseId)).then(response => {
      if (response instanceof EnrollmentResponse) {
        return callback(null, response); 
      }
      else if (response instanceof ErrorResponse) {
        return callback(Error(response.message));
      }
    });
  }
}