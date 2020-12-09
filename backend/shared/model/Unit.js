const Lesson = require("./Lesson.js");

module.exports = 
  class Unit {
    constructor(unitId, unitName, unitNumber, creationDate, lessons = Array(Lesson)) {
      this._unitId = unitId,
      this._unitName = unitName;
      this._unitNumber = unitNumber;
      this._creationDate = creationDate;
      this._lessons = lessons;
    }

    set unitId(unitId) {
      this._unitId = unitId; 
    }

    get unitId() {
      return this._unitId; 
    }

    set unitName(unitName) {
      this._unitName = unitName; 
    }

    get unitName() {
      return this._unitName; 
    }
    
    set unitNumber(unitNumber) {
      this._unitNumber = unitNumber;
    }

    get unitNumber() {
      return this._unitNumber;
    }

    set creationDate(creationDate) {
      this._creationDate = creationDate; 
    }

    get creationDate() {
      return this._creationDate; 
    }

    set lessons(lessons = Array(Lesson)) {
      this._lessons = lessons;
    }

    get lessons() {
      return this._lessons;
    }
  }