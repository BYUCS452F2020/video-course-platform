export default class Enrollment {
  constructor(courseId, courseName, startDate) {
    this._courseId = courseId; 
    this._courseName = courseName; 
    this._startDate = startDate;  
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

  set startDate(startDate) {
    this._startDate = startDate; 
  }

  get startDate() {
    return this._startDate; 
  }
}