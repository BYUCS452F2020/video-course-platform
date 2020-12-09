const AWSUserCoursesService = require('../service/AWSUserCoursesService'); 
const UserCoursesRequest = require('../../shared/shared.js').UserCoursesRequest;
const UserCoursesResponse = require('../../shared/shared.js').UserCoursesResponse; 
const ErrorResponse = require('../../shared/shared.js').ErrorResponse; 

exports.handler = function(event, context, callback) {
  AWSUserCoursesService.getCourses(new UserCoursesRequest(event._userId)).then(response => {
    if (response instanceof UserCoursesResponse) {
      return callback(null, response); 
    }
    else if (response instanceof ErrorResponse) {
      return callback(Error(response.message));
    }
  });
}