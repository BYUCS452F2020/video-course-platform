import Response from './Response.js'; 

export default class UserCoursesResponse extends Response {
  constructor(message, success, enrollments = []) {
    super(message, success); 
    this._enrollments = enrollments; 
  }

  get enrollments() {
    return this._enrollments; 
  }

  set enrollments(enrollments) {
    this._enrollments = enrollments; 
  }
}