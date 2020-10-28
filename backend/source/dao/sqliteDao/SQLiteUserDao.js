import sqlite3 from 'sqlite3'; 
sqlite3.verbose(); 
import path from 'path'; 

import { User } from '../../../shared/shared.js';
import IUserDao from '../interface/IUserDao.js'; 
import SQLiteDaoHelper from './SQLiteDaoHelper.js'; 

export default class SQLiteUserDao extends IUserDao {
  constructor() {
    super(); 
  }

  createUser(user) {
    //console.log('Creating user: ' + user.firstName + user.lastName); 
  }

  getUser(username, password, callback, ...additionalCallbacks) {
    let db = SQLiteDaoHelper.createDB(); 

    db.serialize(() => {
      // Get only one row (if matches). 
      db.get('SELECT Username, First_Name, Last_Name, Email, Sign_Up_Date' + 
             ' FROM User WHERE Username = ? AND Password = ?', 
              [username, password], 
              (error, row) => {
                if (error) {
                  console.log('Internal error.'); 
                  callback(null, SQLiteDaoHelper.returnInternalSQLError(error.message), additionalCallbacks);  
                } 
                else {
                  if (row === undefined) {
                    console.log('User is undefined.');
                    callback(null, SQLiteDaoHelper.returnInvalidDataSQLError('User undefined'), additionalCallbacks); 
                  }
                  else {
                    let user = new User(row.Username, row.First_Name, row.Last_Name, row.Email, row.Sign_Up_Date); 
                    callback(user, null, additionalCallbacks); 
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

  deleteUser(user) {
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