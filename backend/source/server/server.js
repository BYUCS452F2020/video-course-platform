import express from 'express'; 

// Request classes. 
import { LoginRequest, UserCoursesRequest } from '../../shared/shared.js';

// Response classes. 
import { LoginResponse, UserCoursesResponse } from '../../shared/shared.js';

// Model classes.
import { User, Enrollment } from '../../shared/shared.js';

// Service classes. 
import LoginService from '../service/LoginService.js';
import EnrollmentService from '../service/EnrollmentService.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
//import bodyParser from 'body-parser';
const port = 3000;

// The current response object. 
let response; 

function clearResponse() {
  response = null; 
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Pass a {type}Response to these types of functions. 
function handleLoginResponse(loginResponse) {
  // TODO: Add return status here and strip the return status from 
  // the loginResponse message. 

  response.send(loginResponse); 
  // Call at the end of every callback function. 
  clearResponse();  
}

function handleUserCourseResponse(userCoursesResponse) {
  // TODO: Add return status here and strip the return status from 
  // the userCoursesResponse message. 

  response.send(userCoursesResponse); 
  // Call at the end of every callback function. 
  clearResponse(); 
}

app.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password; 
  response = res; 
  new LoginService().loginUser(new LoginRequest(username, password), handleLoginResponse);
});

app.get('/userCoursesRequest', (req, res) => {
  let userId = req.body.userId;
  response = res; 
  new EnrollmentService().userCoursesRequest(new UserCoursesRequest(userId), handleUserCourseResponse);
});

app.listen(port, () => {
  console.log(`Video Course Platform listening at http://localhost:${port}`);
});