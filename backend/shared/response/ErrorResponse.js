module.exports =  class Response {
  constructor(message, success, statusCode) {
    this._message = message; 
    this._success = success;
    this._statusCode = statusCode;
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

  set statusCode(statusCode) {
    this._statusCode = statusCode;
  }

  get statusCode() {
    return this._statusCode;
  }
}