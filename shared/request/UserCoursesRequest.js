import Request from './Request.js'; 

export default class UserCoursesRequest extends Request {
  constructor(userId) {
    super(); 
      this._userId = userId;
  }

  set userId(userId) {
    this._userId = userId; 
  }

  get userId() {
    return this._userId; 
  }
}