import UserResponse from './UserResponse.js'; 

export default class SignUpResponse extends UserResponse {
    constructor(message, success, user) {
      super(message, success); 
        this._user = user; 
    }
  }