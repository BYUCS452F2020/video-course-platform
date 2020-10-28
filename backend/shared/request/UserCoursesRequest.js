import Request from './Request.js'; 

export default class UserCoursesRequest extends Request {
  constructor(username) {
    super(); 
      this._username = username;
  }

  set username(username) {
    this._username = username; 
  }

  get username() {
    return this._username; 
  }
}