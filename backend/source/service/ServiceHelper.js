import InternalDBError from '../error/InternalDBError.js'; 
import InvalidDataDBError from '../error/InvalidDataDBError.js';
import { ErrorResponse } from '../../shared/shared.js';

export default class ServiceHelper {
  constructor() {}

  static appendServerErrorNumber(error, message) {
    if (error instanceof InternalDBError) {
      return new ErrorResponse(message, false, 500); 
    }
    
    if (error instanceof InvalidDataDBError) {
      return new ErrorResponse(message, false, 400); 
    }

    return new ErrorResponse(message, false, 400); 
  }
}