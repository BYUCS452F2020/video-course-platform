export default class Course {
  constructor(courseName, creationDate) {
    this._creationDate = null;
    this._courseName = courseName; 
    this._creationDate = creationDate;  
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

  set creationDate(creationDate) {
    this._creationDate = creationDate; 
  }

  get creationDate() {
    return this._creationDate; 
  }
}