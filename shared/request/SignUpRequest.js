import Request from './Request';  

export default class SignUpRequest extends Request {
    constructor(user, password) {
      super(); 
        this._user = user;
        this._password = password;  
    }

    set user(user) {
      this._user = user; 
    }

    get user() {
      return this._user; 
    }

    set password(password) {
      this._password = password; 
    }

    get password() {
      return this._password; 
    }
  }