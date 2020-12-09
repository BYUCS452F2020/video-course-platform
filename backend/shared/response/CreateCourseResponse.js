const Response = require('./Response.js'); 

module.exports = 
  class CreateCourseResponse extends Response {
    constructor(message, success) {
      super(message, success);
    }
  }