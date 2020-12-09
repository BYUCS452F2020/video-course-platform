const Response = require('./../response/Response.js'); 
const User = require('./../model/User.js');

module.exports = 
  class UserResponse extends Response {
    constructor(message, success, user) {
      super(message, success); 
        this._user = user; 
    }

    get user() {
      return this._user; 
    }

    set user(user) {
      this._user = user; 
    }
  }