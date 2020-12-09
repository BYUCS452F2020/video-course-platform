module.exports = 
  class Response {
    constructor(message, success) {
      this._message = message; 
      this._success = success; 
    }

    set message(message) {
      this._message = message; 
    }

    get message() {
      return this._message; 
    }

    set success(success) {
      this._success = this.success; 
    }

    get success() {
      return this._success; 
    }
  }