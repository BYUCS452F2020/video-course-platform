import Course from '../model/Course.js';
import Response from './Response.js'; 

export default class UserCoursesResponse extends Response {
  constructor(message, success, course = Course) {
    super(message, success); 
    this._course = course; 
  }

  get course() {
    return this._course; 
  }

  set course(course = Course) {
    this._course = course; 
  }
}