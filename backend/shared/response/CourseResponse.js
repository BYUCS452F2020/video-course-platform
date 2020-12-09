const Course = require('../model/Course.js');
const Response = require('./Response.js'); 

module.exports = 
  class UserCoursesResponse extends Response {
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