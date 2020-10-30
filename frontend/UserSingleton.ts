import { User } from "../shared/shared";

export default class UserSingleton {
  public static getUser() {
    if (this._user === null) {
      this.constructor(); 
    }

    return this._user; 
  }

  public static setUser(user) {
    console.log("Setting user in UserSingleton!"); 
    console.log(user); 
    this._user = user; 
  }

  private static construtor() {
    this._user = new User(); 
  }
}