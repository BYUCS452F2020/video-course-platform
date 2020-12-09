// Used when access to DB fails. 
module.exports =
  class InternalDBError extends Error {
    constructor(message) {
      super(message); 
    }
  }