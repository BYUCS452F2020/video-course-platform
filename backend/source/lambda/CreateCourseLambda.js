const AWSCreateCourseService = require('../service/AWSCreateCourseService'); 
const CreateCourseRequest = require('../../shared/shared.js').CreateCourseRequest; 
const Course = require('../../shared/shared.js').Course; 
const Unit = require('../../shared/shared.js').Unit;
const Lesson =  require('../../shared/shared.js').Lesson;
const CreateCourseResponse = require('../../shared/shared.js').CreateCourseResponse;
const ErrorResponse = require('../../shared/shared.js').ErrorResponse; 
const Deserializer = require('../../serialize/Deserializer.js'); 

exports.handler = function(event, context, callback) {
  if (!event._course || !event._teacherName) {
    return callback(Error("[BadRequest]: The request must have a course and teacher name."));
  } 
  else {
    let units = []; 
    if (event._course._units) {
      const jsUnits = event._course._units; 
      for (let i = 0; i < jsUnits.length; ++i) {
        let lessons = []; 
        let jsUnit = jsUnits[i]; 
        // Add all of the lessons. 
        if (jsUnit._lessons) {
          console.log(jsUnit._lessons);
          for (let j = 0; j < jsUnit._lessons.length; ++j) {
            let lesson = jsUnit._lessons[j]; 
            lessons.push(new Lesson("", lesson._lessonName, lesson._lessonVideo, lesson._lessonNumber, lesson._creationDate));
          }
          console.log(lessons); 
        }
        
        units.push(new Unit("", jsUnit._unitName, jsUnit._unitNumber, jsUnit._creationDate, lessons)); 
      }
    }

    let course = new Course("", event._course._courseName, event._course._creationDate, units);

    AWSCreateCourseService.createCourse(new CreateCourseRequest(course, event._teacherName)).then(response => {
      if (response instanceof CreateCourseResponse) {
        return callback(null, response); 
      }
      else if (response instanceof ErrorResponse) {
        return callback(Error(response.message));
      }
    });
  }
}