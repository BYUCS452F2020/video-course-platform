import InternalDBError from '../error/InternalDBError.js'; 
import InvalidDataDBError from '../error/InvalidDataDBError.js'; 

export default class Service {
  constructor() {}

  static appendServerErrorNumber(errorMessage) {
    if (error instanceof InternalDBError) {
      return 'Internal Server Error: 500; ' + errorMessage; 
    }
    
    if (error instanceof InvalidDataDBError) {
      return 'Bad Request: 400; ' + errorMessage; 
    }

    return errorMessage; 
  }
}