import Request from './Request.js'; 

export default class CourseRequest extends Request {
  constructor(courseId) {
    super(); 
      this._courseId = courseId;
  }

  set courseId(courseId) {
    this._courseId = courseId; 
  }

  get courseId() {
    return this._courseId; 
  }
}