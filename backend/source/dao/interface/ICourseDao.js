// Note: Inteface for CourseDao. This class 
// can be extended. Then if a function 
// in the extended class does not get implemented, 
// an exception will be called.  
export default class ICourseDao {
  constructor() {}

  createCourse(course) {
    throw 'Implement createCourse(course) in child class.'; 
  }

  getCourse(courseId) {
    throw 'Implement getCourse(courseId) in child class.';  
  }

  deleteCourse(courseId) {
    throw 'Implement deleteCourse(course) in child class.';  
  }
}