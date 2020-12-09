const Response = require('./Response.js'); 

module.exports = 
  class EnrollmentResponse extends Response {
    constructor(message, success) {
      super(message, success);
    }
  }