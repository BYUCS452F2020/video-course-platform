import SQLiteEnrollmentDao from '../dao/sqliteDao/SQLiteEnrollmentDao.js'; 
import {UserCoursesResponse} from '../../shared/shared.js'; 
import ServiceHelper from './ServiceHelper.js'; 

export default class EnrollmentService {
  userCoursesRequest(userCoursesRequest, onResponseCallback) {
    let dao = new SQLiteEnrollmentDao(); 
    dao.getEnrollments(userCoursesRequest.userId, this.returnUserCoursesResponse, onResponseCallback);
  }

  // Note: Additional callbacks should only hold our onResponseCallback. 
  returnUserCoursesResponse(enrollments, error, additionalCallbacks) {
    if (enrollments !== null) { 
      console.log(enrollments); 
      additionalCallbacks[0](new UserCoursesResponse("OK: 200; Success!", true, enrollments)); 
    }
    else if (error !== null) {
      additionalCallbacks[0](new UserCoursesResponse(ServiceHelper.appendServerErrorNumber(error, 'Unable to retrieve user\'s course enrollments.'), false, null));
    }
  }
}