import Unit from "./Unit.js";

export default class Course {
  constructor(courseId, courseName, creationDate, units = Array(Unit)) {
    this._courseId = courseId,
    this._courseName = courseName; 
    this._creationDate = creationDate;
    this._units = units;
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

  set units(units = Array(Unit)) {
    this._units = units;
  }

  get units() {
    return this._units;
  }
}