import Response from './../response/Response.js'; 

export default class UserResponse extends Response {
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