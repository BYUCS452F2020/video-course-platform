module.exports = class Deserializer {
  static deserialize(instance, obj) {
    obj && Object.assign(instance, obj); 
  }
}

// // Should be moved into a general function for serializing/deserializing. 
// buildCourse(course) {
//   let units = []; 
//     if (course._units) {
//       const jsUnits = course._units; 
//       for (let i = 0; i < jsUnits.length; ++i) {
//         let lessons = []; 
//         let jsUnit = jsUnits[i]; 
//         // Add all of the lessons. 
//         if (jsUnit._lessons) {
//           for (let j = 0; j < jsUnit._lessons.length; ++j) {
//             let lesson = dbUnit._lessons[j]; 
//             lessons.push(new Lesson("", lesson._lessonName, lesson._lessonVideo, lesson._lessonNumber, lesson._creationDate));
//           }
//         }
        
//         units.push(new Unit("", jsUnit._unitName, jsUnit._unitNumber, jsUnit._creationDate, lessons)); 
//       }
//     }

//     return new Course("", course._courseName, course._creationDate, units);
//   }