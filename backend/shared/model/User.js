export default class User {
  constructor(username, firstName, lastName, email, signUpDate, role) {
    this._username = username; 
    this._firstName = firstName; 
    this._lastName = lastName; 
    this._email = email; 
    this._signUpDate = signUpDate; 
    this._role = role; 
  }

  set username(username) {
    this._username = username; 
  }

  get username() {
    return this._username; 
  }

  set firstName(firstName) {
    this._firstName = firstName; 
  }

  get firstName() {
    return this._firstName; 
  }

  set lastName(lastName) {
    this._lastName = lastName; 
  }

  get lastName() {
    return this._lastName; 
  }

  set email(email) {
    this._email = email; 
  }

  get email() {
    return this._email; 
  }

  set signUpDate(signUpDate) {
    this._signUpDate = signUpDate; 
  }

  get signUpDate() {
    return this._signUpDate; 
  }

  set role(role) {
    this._role = role; 
  }

  get role() { 
    return this._role; 
  }
}