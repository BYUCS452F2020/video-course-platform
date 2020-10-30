import { Enrollment } from '../shared.js';
import Response from './Response.js'; 

export default class UserCoursesResponse extends Response {
  constructor(message, success, enrollments = Array(Enrollment)) {
    super(message, success); 
    this._enrollments = enrollments; 
  }

  get enrollments() {
    return this._enrollments; 
  }

  set enrollments(enrollments = Array(Enrollment)) {
    this._enrollments = enrollments; 
  }
}