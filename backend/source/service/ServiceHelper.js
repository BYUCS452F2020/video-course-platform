const InternalDBError = require('../error/InternalDBError.js'); 
const InvalidDataDBError = require('../error/InvalidDataDBError.js');
const ErrorResponse = require('../../shared/shared.js').ErrorResponse;

module.exports = 
  class ServiceHelper {
    constructor() {}

    static appendServerErrorNumber(error, message) {
      if (error instanceof InternalDBError) {
        return new ErrorResponse("[InternalServerError] " + message, false, 500); 
      }
      
      if (error instanceof InvalidDataDBError) {
        return new ErrorResponse("[BadRequest] " + message, false, 400); 
      }

      return new ErrorResponse("[BadRequest] " + message, false, 400); 
    }
  }