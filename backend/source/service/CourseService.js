import SQLiteCourseDao from '../dao/sqliteDao/SQLiteCourseDao.js';
import SQLiteUnitDao from '../dao/sqliteDao/SQLiteUnitDao.js';
import SQLiteLessonDao from '../dao/sqliteDao/SQLiteLessonDao.js';
import {CourseResponse, Unit} from '../../shared/shared.js'; 
import ServiceHelper from './ServiceHelper.js'; 

export default class CourseService {

  loadCourse(courseRequest, onResponseCallback) {
    let courseDao = new SQLiteCourseDao();
    courseDao.getCourse(courseRequest.courseId, this.returnCourseResponse, onResponseCallback, this.loadUnitsForCourse, this.returnUnitsForCourseResponse, this.loadLessonsForUnits, this.returnLessonsForUnitsResponse);
  }

  returnCourseResponse(course, error, additionalCallbacks) {
    if (course !== null) {
      console.log(course);
      additionalCallbacks[1](course, additionalCallbacks[2], additionalCallbacks);
    }
    else if (error !== null) {
      additionalCallbacks[0](ServiceHelper.appendServerErrorNumber(error, 'Unable to retrieve the course.'));
    }
  }

  loadUnitsForCourse(course, onResponseCallback, additionalCallbacks) {
    let unitDao = new SQLiteUnitDao();
    unitDao.getCourseUnits(course, onResponseCallback, additionalCallbacks);
  }

  returnUnitsForCourseResponse(units = Array(Unit), course, error, additionalCallbacks) {
    if (units !== null) {
      console.log(units);
      if (units.length > 0) {
        additionalCallbacks[3](units, course, additionalCallbacks[4], additionalCallbacks);
      } else {
        additionalCallbacks[0](new CourseResponse("OK: 200; Success!", true, course));
      }
    }
    else if (error !== null) {
      //return course?
      additionalCallbacks[0](ServiceHelper.appendServerErrorNumber(error, 'Unable to retrieve any units.'));
    }
  }

  loadLessonsForUnits(units = Array(Unit), course, onResponseCallback, additionalCallbacks) {
    let lessonDao = new SQLiteLessonDao();
    lessonDao.getUnitLessons(units, course, onResponseCallback, additionalCallbacks);
  }

  returnLessonsForUnitsResponse(lessons = [], units = Array(Unit), course, error, additionalCallbacks) {
    if (lessons !== null) {
      console.log(lessons);
      if (lessons.length > 0) {     
        lessons.forEach((lesson) => {
          units.forEach((unit) => {
            if (unit.unitId === lesson[1]) {
              unit.lessons.push(lesson[0]);
            }
          });
        });
        course.units = units;
        additionalCallbacks[0](new CourseResponse("OK: 200; Success!", true, course));
      } else {
        course.units = units;
        additionalCallbacks[0](new CourseResponse("OK: 200; Success!", true, course));
      }
    }
    else if (error !== null) {
      //return course + units?
      additionalCallbacks[0](ServiceHelper.appendServerErrorNumber(error, 'Unable to retrieve any lessons.'));
    }
  }
}