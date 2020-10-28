import sqlite3 from 'sqlite3'; 
sqlite3.verbose(); 
import path from 'path'; 

import { User } from '../../../shared/shared.js';
import IEnrollmentDao from '../interface/IEnrollmentDao.js'; 
import SQLiteDaoHelper from './SQLiteDaoHelper.js';
import Enrollment from '../../../shared/model/Enrollment.js';

export default class SQLiteUserDao extends IEnrollmentDao {
  constructor() {
    super(); 
  }

  createEnrollment(userId, courseId) {
    //console.log('Creating user: ' + user.firstName + user.lastName); 
  }

  getEnrollments(userId, callback, ...additionalCallbacks) {
    let db = SQLiteDaoHelper.createDB(); 

    db.serialize(() => {
      // Get only one row (if matches). 
      db.all('SELECT * ' + 
             'FROM Enrollment e ' + 
             'JOIN Course c on c.Course_Id = e.Course_Id ' +
             'WHERE e.User_Id = ?', 
              [userId], 
              (error, rows) => {
                if (error) {
                  console.log('Internal error.'); 
                  callback(null, SQLiteDaoHelper.returnInternalSQLError(error.message), additionalCallbacks);  
                } 
                else {
                  if (rows === undefined) {
                    console.log('User has no enrollments or user is undefined.');
                  }
                  else {
                    let enrollments = [];
                    rows.forEach((row) => {
                      let enrollment = new Enrollment(row.Course_Id, row.Course_Name, row.Start_Date);
                      enrollments.push(enrollment);
                    })
                    callback(enrollments, null, additionalCallbacks); 
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

  verifyEnrollment(userId, courseId, callback, ...additionalCallbacks) {
    let db = SQLiteDaoHelper.createDB();

    db.serialize(() => {
      db.get('SELECT * ' + 
      'FROM Enrollment ' +
      'WHERE User_Id = ? AND Course_Id=?', 
       [userId, courseId], 
       (error, row) => {
         if (error) {
           console.log('Internal error.'); 
           callback(null, SQLiteDaoHelper.returnInternalSQLError(error.message), additionalCallbacks);  
         } 
         else {
           if (row === undefined) {
             console.log('Unable to verify course enrollment.');
             callback(null, SQLiteDaoHelper.returnInvalidDataSQLError('Unable to verify course enrollment.'), additionalCallbacks); 
           }
           else {
             let response = "Able to verify enrollment for user: " + userId + " in course: " + courseId;
             callback(response, null, additionalCallbacks); 
           }
         }
       }
); 
    });
  }

  deleteEnrollment(userId, courseId) {
    //console.log('Deleting user: ' + user.firstName + user.lastName);
  }
}