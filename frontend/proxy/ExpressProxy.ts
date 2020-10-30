// Add the proxy code for making expo requests here. Later on, 
// we can make a base class that is extended by both proxy 
// classes kind of like our I{Type}Dao classes. 

import LoginRequest from '../../shared/request/LoginRequest'; 

import LoginResponse from '../../shared/response/LoginResponse'; 

import UserSingleton from '../UserSingleton'; 

export default class ExpoProxy {
  // TODO: Change if hosted on a server. 
  static baseUrl: string = 'http://localhost:3001/'; 

  consructor() {}
 
  static async loginUser(loginRequest: LoginRequest): Promise<string> {
    const url: string = this.baseUrl + 'login';
    console.log("Making request to " + url); 
    let request = {username: loginRequest.username, password: loginRequest.password}; 
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

  static async getEnrollments(enrollmentRequest): Promise<string> {
    const url: string = this.baseUrl + 'userCoursesRequest/' + UserSingleton.getUser()._username; 

    //userCoursesRequest/:userid
    // req.params req.body

    const response = await fetch(url, {
      method: 'GET', 
      headers: {
        'Accept': 'application/json'
      }
    });

    return response.json(); 
  }
}