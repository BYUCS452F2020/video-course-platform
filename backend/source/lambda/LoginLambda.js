const AWSLoginService = require('../service/AWSLoginService'); 
const LoginRequest = require('../../shared/shared.js').LoginRequest; 
const LoginResponse = require('../../shared/shared.js').LoginResponse; 
const ErrorResponse = require('../../shared/shared.js').ErrorResponse; 

exports.handler = function(event, context, callback) {
  if (!event._username || !event._password) {
    return callback(Error("[BadRequest]: Missing username or password."));
  } 
  else {
    const loginRequest = new LoginRequest(event._username, event._password); 
    AWSLoginService.loginUser(loginRequest).then(response => {
      if (response instanceof LoginResponse) {
        return callback(null, response); 
      }
      else if (response instanceof ErrorResponse) {
        return callback(Error(response.message));
      }
    });
  }
}