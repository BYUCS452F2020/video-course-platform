import { User } from "../shared/shared";

export default class UserSingleton {
  static myInstance = null;
  _user = null;

  static getInstance() {
    if (UserSingleton.myInstance == null) {
      UserSingleton.myInstance = new UserSingleton();
    }
    return this.myInstance;
  }

  public getUser() {
    return this._user; 
  }

  public setUser(user) {
    this._user = user; 
  }
}