// Add the proxy code for making AWS requests here. Later on, 
// we can make a base class that is extended by both proxy 
// classes kind of like our I{Type}Dao classes.
import {LoginRequest, UserCoursesRequest, CourseRequest, SignUpRequest, LoginResponse, UserCoursesResponse, CourseResponse} from '../../shared/shared';

export default class AWSProxy {
  consructor() {}

  static baseUrl = 'https://pbgozbhubg.execute-api.us-west-2.amazonaws.com/Development/'; 

  static async loginUser(loginRequest: LoginRequest): Promise<string> {
    const url: string = this.baseUrl + 'login';
    let request = {_username: loginRequest.username, _password: loginRequest.password}; 
    let body = JSON.stringify(request); 

    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',  
        'Content-Type': 'application/json'
      },
      body: body
      // username _username
    }); 

    return response.json(); 
  }

  static async signUpUser(signUpRequest: SignUpRequest): Promise<string> {
    const url: string = this.baseUrl + 'signup';
    let request = {_user: signUpRequest.user, _password: signUpRequest.password}; 
    let body = JSON.stringify(request); 
    console.log(body);
    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',  
        'Content-Type': 'application/json'
      },
      body: body
      // username _username
    }); 

    return response.json(); 
  }


  static async getEnrollments(userCoursesRequest: UserCoursesRequest): Promise<string> {
    const url: string = this.baseUrl + 'usercourses'; 

    let request = {_userId: userCoursesRequest.userId}; 
    let body = JSON.stringify(request);

    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',  
        'Content-Type': 'application/json'
      },
      body: body
    }); 

    return response.json(); 
  }

  static async loadCourse(courseRequest: CourseRequest): Promise<string> {
    const url: string = this.baseUrl + 'getcourse'; 

    let request = {_courseId: courseRequest.courseId}; 
    let body = JSON.stringify(request); 

    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',  
        'Content-Type': 'application/json'
      },
      body: body
    }); 

    return response.json(); 
  }
}