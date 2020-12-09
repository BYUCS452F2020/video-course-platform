const Response = require('./Response.js'); 
const Course = require('../model/Course.js');

module.exports = 
  class ApplyTeacherResponse extends Response {
    constructor(message, success, courses = Array(Course)) {
      super(message, success);
      this.courses = courses; 
    }

    get courses() {
      return this._courses; 
    }

    set courses(courses = Array(Course)) {
      this._courses = courses; 
    }
  }