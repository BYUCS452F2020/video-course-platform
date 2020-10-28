import sqlite3 from 'sqlite3'; 
sqlite3.verbose(); 
import path from 'path'; 

import { Course } from '../../../shared/shared.js';
import ICourseDao from '../interface/ICourseDao.js'; 
import SQLiteDaoHelper from './SQLiteDaoHelper.js'; 

export default class SQLiteCourseDao extends ICourseDao {
  constructor() {
    super(); 
  }

  createCourse(course) {
    //console.log('Creating user: ' + user.firstName + user.lastName); 
  }

  getCourse(courseId, callback, ...additionalCallbacks) {
    let db = SQLiteDaoHelper.createDB(); 

    db.serialize(() => {
      // Get only one row (if matches). 
      db.get('SELECT * ' + 
             'FROM Course WHERE Course_Id = ?', 
              [courseId], 
              (error, row) => {
                if (error) {
                  console.log('Internal error.'); 
                  callback(null, SQLiteDaoHelper.returnInternalSQLError(error.message), additionalCallbacks);  
                } 
                else {
                  if (row === undefined) {
                    console.log('Course with Course_ID = ' + courseId + ' does not exist.');
                    callback(null, SQLiteDaoHelper.returnInvalidDataSQLError('Course with Course_ID = ' + courseId + ' does not exist.'), additionalCallbacks); 
                  }
                  else {
                    let course = new Course(row.Course_Id, row.Course_Name, row.Creation_Date, null); 
                    callback(course, null, additionalCallbacks); 
                  }
                }
              }
      ); 
    });
    
    // Close the database. 
    db.close((error) => {
      // handle error.
    }); 
  }

  deleteCourse(courseId) {
    //console.log('Deleting user: ' + user.firstName + user.lastName);
  }
}

/*
      db.all('SELECT * ' + 
      'FROM User', 
      (error, rows) => {
        if (error) {
          console.log(error); 
        } 
        else {
          console.log(rows); 
        }
      });
      */ 