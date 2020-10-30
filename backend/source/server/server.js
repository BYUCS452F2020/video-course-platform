import express from 'express'; 
import bodyParser from 'body-parser';
import cors from 'cors';

// Request classes. 
import { LoginRequest, UserCoursesRequest, EnrollmentRequest, CourseRequest } from '../../shared/shared.js';

// Response classes. 
import { LoginResponse, UserCoursesResponse } from '../../shared/shared.js';

// Model classes.
import { User, Enrollment } from '../../shared/shared.js';

// Service classes. 
import LoginService from '../service/LoginService.js';
import EnrollmentService from '../service/EnrollmentService.js';
import CourseService from '../service/CourseService.js';

const app = express();
app.use(cors());
app.use(bodyParser.json()); 
//import bodyParser from 'body-parser';
const port = 3001;

// The current response object. 
let response; 

function clearResponse() {
  response = null; 
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Pass a {type}Response to these types of functions. 
function handleResponse(responseObj) {
  // TODO: Add return status here and strip the return status from 
  // the loginResponse message.

  if (responseObj.statusCode !== undefined) {
    response.status(responseObj.statusCode).send(responseObj);
  } else {
    response.send(responseObj); 
  }
  
  // Call at the end of every callback function. 
  clearResponse();  
}

app.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password; 
  response = res; 
  new LoginService().loginUser(new LoginRequest(username, password), handleResponse);
});

app.get('/userCoursesRequest', (req, res) => {
  let userId = req.body.userId;
  response = res; 
  new EnrollmentService().userCoursesRequest(new UserCoursesRequest(userId), handleResponse);
});

app.get('/verifyEnrollment', (req, res) => {
  let userId = req.body.userId;
  let courseId = req.body.courseId;
  response = res; 
  new EnrollmentService().verifyEnrollment(new EnrollmentRequest(userId, courseId), handleResponse);
});

app.get('/loadCourse', (req, res) => {
  let courseId = req.body.courseId;
  response = res; 
  new CourseService().loadCourse(new CourseRequest(courseId), handleResponse);
});

app.listen(port, () => {
  console.log(`Video Course Platform listening at http://localhost:${port}`);
});