import sqlite3 from 'sqlite3'; 
import path from 'path'; 
import InternalDBError from '../../error/InternalDBError.js'; 
import InvalidDataDBError from '../../error/InvalidDataDBError.js'; 

sqlite3.verbose(); 

export default class SQLiteDaoHelper { 
  static database

  static createDB() {
    return new sqlite3.Database(path.resolve('/Users/zacharyyoung/Desktop/CSSchool/cs452/projects/video-course-platform/backend/source/dao/sqliteDao', 'video-course.sqlite'));
  }

  // Thrown when the user gives invalid values. 
  static throwInvalidDataSQLError(message) {
    throw new InvalidDataDBError(message); 
  }

  // There was an error accessing the database. 
  static throwInternalSQLError(message) {
    throw new InternalDBError(message);
  }
}