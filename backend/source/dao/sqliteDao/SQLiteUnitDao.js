import sqlite3 from 'sqlite3'; 
sqlite3.verbose(); 
import path from 'path'; 

import { Unit } from '../../../shared/shared.js';
import IUnitDao from '../interface/IUnitDao.js'; 
import SQLiteDaoHelper from './SQLiteDaoHelper.js'; 

export default class SQLiteUnitDao extends IUnitDao {
  constructor() {
    super(); 
  }

  createUnit(unit) {
    //console.log('Creating user: ' + user.firstName + user.lastName); 
  }

  getCourseUnits(course, callback, additionalCallbacks) {
    let db = SQLiteDaoHelper.createDB(); 

    db.serialize(() => {
      // Get only one row (if matches). 
      db.all('SELECT * ' + 
             'FROM Unit ' +
             'WHERE Course_Id = ?', 
              [course.courseId], 
              (error, rows) => {
                if (error) {
                  console.log('Internal error.'); 
                  callback(null, null, SQLiteDaoHelper.returnInternalSQLError(error.message), additionalCallbacks);  
                } 
                else {
                  if (rows === undefined) {
                    console.log('There are no Units with that Course Id.');
                    callback([], course, null, additionalCallbacks); 
                  }
                  else {
                    let units = [];
                    rows.forEach((row) => {
                      let unit = new Unit(row.Unit_Id, row.Unit_Name, row.Unit_Number, row.Creation_Date, []);
                      units.push(unit);
                    })
                    callback(units, course, null, additionalCallbacks); 
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

  getUnit(unitId) {

  }

  deleteUnit(unitId) {
    //console.log('Deleting user: ' + user.firstName + user.lastName);
  }
}