// Note: Inteface for LessonDao. This class 
// can be extended. Then if a function 
// in the extended class does not get implemented, 
// an exception will be called.  
export default class ILessonDao {
  constructor() {}

  createLesson(lesson) {
    throw 'Implement createLesson(lesson) in child class.'; 
  }

  getUnitLessons(unitId) {
    throw 'Implement getUnitLessons(unitId) in child class.';  
  }

  getLesson(lessonId) {
    throw 'Implement getLesson(lessonId) in child class';
  }

  deleteLesson(lessonId) {
    throw 'Implement deleteLesson(unitId) in child class.';  
  }
}