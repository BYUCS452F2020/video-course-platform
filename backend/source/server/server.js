import express from 'express'; 

// Request classes. 
import { LoginRequest } from '../../shared/shared.js'; 

// Response classes. 
import { LoginResponse } from '../../shared/shared.js';

// Model classes.
import { User } from '../../shared/shared.js';

// Service classes. 
import LoginService from '../service/LoginService.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
//import bodyParser from 'body-parser';
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password; 
  let loginResponse = LoginService.loginUser(new LoginRequest(username, password)); 
  res.send(loginResponse);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});