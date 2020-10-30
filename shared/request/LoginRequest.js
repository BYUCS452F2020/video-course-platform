import Request from './Request.js'; 

export default class LoginRequest extends Request {
  constructor(username, password) {
    super(); 
      this._username = username;
      this._password = password;  
  }

  set username(username) {
    this._username = username; 
  }

  get username() {
    return this._username; 
  }

  set password(password) {
    this._password = password; 
  }

  get password() {
    return this._password; 
  }
}