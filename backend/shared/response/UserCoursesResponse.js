const Enrollment = require('../shared.js').Enrollment;
const Response = require('./Response.js'); 

module.exports = 
  class UserCoursesResponse extends Response {
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