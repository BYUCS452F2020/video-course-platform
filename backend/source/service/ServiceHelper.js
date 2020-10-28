import InternalDBError from '../error/InternalDBError.js'; 
import InvalidDataDBError from '../error/InvalidDataDBError.js'; 

export default class ServiceHelper {
  constructor() {}

  static appendServerErrorNumber(error, message) {
    if (error instanceof InternalDBError) {
      return 'Internal Server Error: 500; ' + message; 
    }
    
    if (error instanceof InvalidDataDBError) {
      return 'Bad Request: 400; ' + message; 
    }

    return message; 
  }
}