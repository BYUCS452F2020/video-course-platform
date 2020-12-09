const DynamoUserDao =  require('../dao/dynamoDao/DynamoUserDao.js');
const SignUpResponse = require('../../shared/shared.js').SignUpResponse;
const ErrorResponse = require('../../shared/shared.js').ErrorResponse; 
const User = require('../../shared/shared.js').User; 
const ServiceHelper = require('./ServiceHelper.js');

module.exports = 
  class AWSSignUpService {
    static async signUpUser(signUpRequest) {
      let dao = new DynamoUserDao(); 
      let user; 

      // Don't let them create a new user if the username already exists.
      try {
        user = await dao.getUser(signUpRequest.user.username);
        return new ErrorResponse("Error: Failed to add user. The username is already taken.", false, 200); 
      } catch(err) {
        console.log("User has not been created yet.");
        // Don't do anything. 
      }

      // Sign them up. 
      try {
        user = await dao.createUser(signUpRequest.user, signUpRequest.password);
        return new SignUpResponse("Success", true, signUpRequest.user); 
      } catch(err) {
        return ServiceHelper.appendServerErrorNumber(err, err.message);
      }
    }
  }