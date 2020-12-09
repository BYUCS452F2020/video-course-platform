const SignUpRequest = require('./SignUpRequest.js'); 

module.exports =
  class ApplyTeacherRequest extends SignUpRequest {
    constructor(user, password, background, yearsOfExperience, sampleWebsite) {
      super(user, password);
      this._background = background; 
      this._yearsOfExperience = yearsOfExperience; 
      this._sampleWebsite = sampleWebsite; 
    }

    set background(background) {
      this._background = background; 
    }

    get background() {
      return this._background; 
    }

    set yearsOfExperience(yearsOfExperience) {
      this._yearsOfExperience = yearsOfExperience; 
    }

    get yearsOfExperience() {
      return this._yearsOfExperience; 
    }

    set sampleWebsite(sampleWebsite) {
      this._sampleWebsite = sampleWebsite; 
    }

    get sampleWebsite() {
      return this._sampleWebsite; 
    }
  }