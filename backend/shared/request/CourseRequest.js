const Request = require('./Request.js'); 

module.exports = 
  class CourseRequest extends Request {
    constructor(courseId) {
      super(); 
        this._courseId = courseId;
    }

    set courseId(courseId) {
      this._courseId = courseId; 
    }

    get courseId() {
      return this._courseId; 
    }
  }