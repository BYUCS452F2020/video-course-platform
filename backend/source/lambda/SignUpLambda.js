const AWSSignUpService = require('../service/AWSSignUpService'); 
const User = require('../../shared/shared.js').User;
const SignUpRequest = require('../../shared/shared.js').SignUpRequest;
const SignUpResponse = require('../../shared/shared.js').SignUpResponse; 
const ErrorResponse = require('../../shared/shared.js').ErrorResponse; 

exports.handler = function(event, context, callback) {
  // TODO: Add error handling. 
  const reqUser = event._user; 
  const user = new User("", reqUser._username, reqUser._firstName, reqUser._lastName, 
                        reqUser._email, reqUser._role, reqUser._signUpDate); 

  const signUpRequest = new SignUpRequest(user, event._password); 
  AWSSignUpService.signUpUser(signUpRequest).then(response => {
    if (response instanceof SignUpResponse) {
      return callback(null, response); 
    }
    else if (response instanceof ErrorResponse) {
      return callback(Error(response.message));
    }
  });
}