import sqlite3 from 'sqlite3'; 
import path from 'path'; 
import InternalDBError from '../../error/InternalDBError.js'; 
import InvalidDataDBError from '../../error/InvalidDataDBError.js'; 

sqlite3.verbose(); 

export default class SQLiteDaoHelper { 
  static database

  static createDB(callback) {
    console.log(path.join(path.resolve(), 'source', 'database', 'video-course.sqlite' ));
    return new sqlite3.Database(path.join(path.resolve(), 'source', 'database', 'video-course.sqlite'), callback);
  }

  // Returns when the user gives invalid values. 
  static returnInvalidDataSQLError(message) {
    return new InvalidDataDBError(message); 
  }

  // There was an error accessing the database. 
  static returnInternalSQLError(message) {
    return new InternalDBError(message);
  }
}