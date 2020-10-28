import SQLiteCourseDao from '../dao/sqliteDao/SQLiteCourseDao.js'; 
import {CourseResponse} from '../../shared/shared.js'; 
import ServiceHelper from './ServiceHelper.js'; 

export default class CourseService {
  getCourse(courseRequest, onResponseCallback) {
    let courseDao = new SQLiteCourseDao();
    courseDao.getCourse(courseRequest.courseId, this.returnCourseResponse, onResponseCallback);
  }

  returnCourseResponse(course, error, additionalCallbacks) {
    if (course !== null) { 
      console.log(course); 
      additionalCallbacks[0](new CourseResponse("OK: 200; Success!", true, course)); 
    }
    else if (error !== null) {
      additionalCallbacks[0](ServiceHelper.appendServerErrorNumber(error, 'Unable to retrieve the course.'));
    }
  }

}