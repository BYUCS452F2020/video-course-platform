// Note: Inteface for UserDao. This class 
// can be extended. Then if a function 
// in the extended class does not get implemented, 
// an exception will be called.  
module.exports = 
  class IUserDao {
    constructor() {}

    createUser(user) {
      throw 'Implement createUser(user) in child class.'; 
    }

    getUser(user) {
      throw 'Implement getUser(user) in child class.';  
    }

    deleteUser(user) {
      throw 'Implement deleteUser(user) in child class.';  
    }
  }