// Note: Inteface for EnrollmentDao. This class 
// can be extended. Then if a function 
// in the extended class does not get implemented, 
// an exception will be called.  
export default class IEnrollmentDao {
  constructor() {}

  createEnrollment(userId, courseId) {
    throw 'Implement createEnrollment(userId, courseId) in child class.'; 
  }

  getEnrollments(userId) {
    throw 'Implement getEnrollments(userId) in child class.';  
  }
  
  verifyEnrollment(userId, courseId) {
    throw 'Implement verifyEnrollment(userId, courseId) in child class.';  
  }

  deleteEnrollment(userId, courseId) {
    throw 'Implement deleteEnrollment(userId, courseId) in child class.';
  }
}