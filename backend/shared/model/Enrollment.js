export default class Enrollment {
  constructor(courseId, courseName, enrollmentDate) {
    this._courseId = courseId; 
    this._courseName = courseName; 
    this._enrollmentDate = enrollmentDate;  
  }

  set courseId(courseId) {
    this._courseId = courseId; 
  }

  get courseId() {
    return this._courseId; 
  }

  set courseName(courseName) {
    this._courseName = courseName; 
  }

  get courseName() {
    return this._courseName; 
  }

  set enrollmentDate(enrollmentDate) {
    this._enrollmentDate = enrollmentDate; 
  }

  get enrollmentDate() {
    return this._enrollmentDate; 
  }
}