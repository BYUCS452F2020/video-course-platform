module.exports = 
  class Lesson {
    constructor(lessonId, lessonName, lessonVideo, lessonNumber, creationDate) {
      this._lessonId = lessonId,
      this._lessonName = lessonName;
      this._lessonVideo = lessonVideo;
      this._lessonNumber = lessonNumber;
      this._creationDate = creationDate;
    }

    set lessonId(lessonId) {
      this._lessonId = lessonId; 
    }

    get lessonId() {
      return this._lessonId; 
    }

    set lessonName(lessonName) {
      this._lessonName = lessonName; 
    }

    get lessonName() {
      return this._lessonName; 
    }

    set lessonVideo(lessonVideo) {
      this._lessonVideo = lessonVideo;
    }

    get lessonVideo() {
      return this._lessonVideo;
    }
    
    set lessonNumber(lessonNumber) {
      this._lessonNumber = lessonNumber;
    }

    get lessonNumber() {
      return this._lessonNumber;
    }

    set creationDate(creationDate) {
      this._creationDate = creationDate; 
    }

    get creationDate() {
      return this._creationDate; 
    }
  }