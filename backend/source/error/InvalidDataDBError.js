// Used when user gives bad values (e.g., invalid username password combo). 
module.exports =
  class InvalidDataDBError extends Error {
    constructor(message) {
      super(message); 
    }
  }