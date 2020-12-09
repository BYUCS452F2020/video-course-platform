// Model imports. 
const User = require('./model/User.js'); 
const Enrollment = require('./model/Enrollment.js');
const Course = require('./model/Course.js');
const Unit = require('./model/Unit.js');
const Lesson = require('./model/Lesson.js');

// Request imports. 
const Request = require('./request/Request.js'); 
const SignUpRequest = require('./request/SignupRequest.js'); 
const CreateCourseRequest = require('./request/CreateCourseRequest.js'); 
const LoginRequest = require('./request/LoginRequest.js');
const UserCoursesRequest = require('./request/UserCoursesRequest.js');
const EnrollmentRequest = require('./request/EnrollmentRequest.js');
const CourseRequest = require('./request/CourseRequest.js');

// Response imports. 
const Response = require('./response/Response.js'); 
const ErrorResponse = require('./response/ErrorResponse.js');
const SignUpResponse = require('./response/SignUpResponse.js');
const CreateCourseResponse = require('./response/CreateCourseResponse.js');  
const LoginResponse = require('./response/LoginResponse.js');
const EnrollmentResponse = require('./response/EnrollmentResponse.js');
const UserCoursesResponse = require('./response/UserCoursesResponse.js');
const CourseResponse = require('./response/CourseResponse.js');

exports.User = User; 
exports.Enrollment = Enrollment; 
exports.Course = Course; 
exports.Unit = Unit; 
exports.Lesson = Lesson; 
exports.Request = Request; 
exports.SignUpRequest = SignUpRequest; 
exports.CreateCourseRequest = CreateCourseRequest; 
exports.LoginRequest = LoginRequest; 
exports.UserCoursesRequest = UserCoursesRequest;
exports.EnrollmentRequest = EnrollmentRequest; 
exports.CourseRequest = CourseRequest; 

exports.Response = Response; 
exports.ErrorResponse = ErrorResponse; 
exports.SignUpResponse = SignUpResponse; 
exports.CreateCourseResponse = CreateCourseResponse; 
exports.LoginResponse = LoginResponse; 
exports.EnrollmentResponse = EnrollmentResponse;
exports.UserCoursesResponse = UserCoursesResponse; 
exports.CourseResponse = CourseResponse; 
