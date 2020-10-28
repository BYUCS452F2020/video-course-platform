import Response from './Response.js'; 

export default class LoginResponse extends Response {
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