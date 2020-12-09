const UserResponse = require('./UserResponse.js'); 

module.exports = 
  class LoginResponse extends UserResponse {
    constructor(message, success, user) {
      super(message, success); 
        this._user = user; 
    }
  }