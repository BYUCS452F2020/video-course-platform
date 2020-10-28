// Used when user gives bad values (e.g., invalid username password combo). 
export default class InvalidDataDBError extends Error {
  constructor(message) {
    super(message); 
  }
}