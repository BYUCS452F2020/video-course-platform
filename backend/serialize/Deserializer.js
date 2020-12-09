module.exports = class Deserializer {
  static deserialize(instance, obj) {
    obj && Object.assign(instance, obj); 
  }
}