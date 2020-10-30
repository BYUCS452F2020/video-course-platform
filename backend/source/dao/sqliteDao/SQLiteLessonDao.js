import sqlite3 from 'sqlite3'; 
sqlite3.verbose(); 
import path from 'path'; 

import { Lesson } from '../../../shared/shared.js';
import ILessonDao from '../interface/ILessonDao.js'; 
import SQLiteDaoHelper from './SQLiteDaoHelper.js'; 

export default class SQLiteLessonDao extends ILessonDao {
  constructor() {
    super(); 
  }

  createLesson(lesson) {
    //console.log('Creating user: ' + user.firstName + user.lastName); 
  }

  getUnitLessons(units, course, callback, additionalCallbacks) {
    let db = SQLiteDaoHelper.createDB(); 

    db.serialize(() => {
      // Get only one row (if matches). 
      db.all('SELECT * ' + 
             'FROM Lesson ' +
             'WHERE Unit_Id IN ' +
             '(SELECT Unit_Id FROM Unit WHERE Course_Id = ?)', 
              [course.courseId], 
              (error, rows) => {
                if (error) {
                  console.log('Internal error.'); 
                  callback(null, units, course, SQLiteDaoHelper.returnInternalSQLError(error.message), additionalCallbacks);  
                } 
                else {
                  if (rows === undefined) {
                    console.log('There are no Lesson with that Unit Id.');
                    callback([], units, course, null, additionalCallbacks);
                  }
                  else {
                    let lessons = [];
                    rows.forEach((row) => {
                      let lesson = [new Lesson(row.Lesson_Id, row.Lesson_Name, row.Lesson_Video, row.Lesson_Number, row.Creation_Date), row.Unit_Id];
                      lessons.push(lesson);
                    });
                    callback(lessons, units, course, null, additionalCallbacks);
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

  getLesson(lessonId) {

  }

  deleteLesson(lessonId) {
    //console.log('Deleting user: ' + user.firstName + user.lastName);
  }
}