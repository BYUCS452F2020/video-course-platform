// Note: Inteface for EnrollmentDao. This class 
// can be extended. Then if a function 
// in the extended class does not get implemented, 
// an exception will be called.  
export default class IEnrollmentDao {
  constructor() {}

  createEnrollment(user, courseId) {
    throw 'Implement createEnrollment(user, courseId) in child class.'; 
  }

  getEnrollments(user) {
    throw 'Implement getEnrollments(user) in child class.';  
  }
  
  /*
  verifyEnrollment(user, courseId) {
    throw 'Implement verifyEnrollment(user, courseId) in child class.';  
  }
  */

  deleteEnrollment(user, courseId) {
    throw 'Implement deleteEnrollment(user, courseId) in child class.';
  }
}