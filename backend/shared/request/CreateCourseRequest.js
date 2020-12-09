const Request = require('./Request.js'); 

module.exports = 
  class CreateCourseRequest extends Request {
    constructor(course, teacherName) {
      super(); 
        this._course = course;
        this._teacherName = teacherName; 
    }

    set course(course) {
      this._courseId = course; 
    }

    get course() {
      return this._course; 
    }

    set teacherName(teacherName) {
      this._teacherName = teacherName; 
    }

    get teacherName() {
      return this._teacherName; 
    }
  }