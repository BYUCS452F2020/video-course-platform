const DynamoUserDao =  require('../dao/dynamoDao/DynamoUserDao.js');
const LoginResponse = require('../../shared/shared.js').LoginResponse; 
const ServiceHelper = require('./ServiceHelper.js'); 

module.exports = 
  class AWSLoginService {
    static async loginUser(loginRequest) {
      let dao = new DynamoUserDao(); 

      try {
        let user = await dao.getUser(loginRequest.username, loginRequest.password);
        return new LoginResponse("Success", true, user);
      } catch(err) {
        // RENAME THE BELOW FUNCTION. 
        return ServiceHelper.appendServerErrorNumber(err, err.message);
      } 
    }
  }