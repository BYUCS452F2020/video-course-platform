// Note: Inteface for UnitDao. This class 
// can be extended. Then if a function 
// in the extended class does not get implemented, 
// an exception will be called.  
export default class IUnitDao {
  constructor() {}

  createUnit(unit) {
    throw 'Implement createUnit(unit) in child class.'; 
  }

  getCourseUnits(courseId) {
    throw 'Implement getCourseUnits(courseId) in child class.';  
  }

  getUnit(unitId) {
    throw 'Implement getUnit(unitId) in child class';
  }

  deleteUnit(unitId) {
    throw 'Implement deleteUnit(unitId) in child class.';  
  }
}