const Request = require('./Request.js'); 

module.exports =
  class AllCoursesRequest extends Request {
    constructor(lastCourseName) {
      super();
      this._lastCourseName = lastCourseName; 
    }

    set lastCourseName(lastCourseName) {
      this._lastCourseName = lastCourseName; 
    }

    get lastCourseName() {
      return this._lastCourseName; 
    }
  }