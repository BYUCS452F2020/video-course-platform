// Used when access to DB fails. 
export default class InternalDBError extends Error {
  constructor(message) {
    super(message); 
  }
}