const Response = require('./Response.js'); 

module.exports = 
  class ApplyTeacherResponse extends Response {
    constructor(message, success) {
      super(message, success);
    }
  }