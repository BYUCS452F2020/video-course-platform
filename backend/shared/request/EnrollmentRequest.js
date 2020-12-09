const Request = require('./Request.js'); 

module.exports = 
  class EnrollmentRequest extends Request {
    constructor(userId, courseId) {
      super(); 
        this._userId = userId;
        this._courseId = courseId;
    }

    set userId(userId) {
      this._userId = userId; 
    }

    get userId() {
      return this._userId; 
    }

    set courseId(courseId) {
      this._courseId = courseId;
    }

    get courseId() {
      return this._courseId;
    }
  }