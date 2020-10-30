import { User } from "../shared/shared";

export default class UserSingleton {
  public static getUser() {
    if (this._user === null) {
      this.constructor(); 
    }

    return this._user; 
  }

  public static setUser(user) {
    this._user = user; 
  }

  private static construtor() {
    this._user = new User(); 
  }
}