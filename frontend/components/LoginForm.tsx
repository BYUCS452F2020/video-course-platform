import React from 'react'; 
import styles from './loginForm.module.css'; 
//import ExpoProxy from '../proxy/ExpressProxy'; 
import AWSProxy from '../proxy/AWSProxy';
import {LoginRequest, LoginResponse} from '../../shared/shared'; 
import UserSingleton from '../UserSingleton'; 
import Link from 'next/link'; 


// TODO: Move the state in this class to the parent later on. 
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      username: '', 
      password: '',
      loginResponse: null
    }

    this._handleUpdate = this._handleUpdate.bind(this); 
    this._handleSubmit = this._handleSubmit.bind(this); 
    this._handleLoginResult = this._handleLoginResult.bind(this); 
  }

  _handleUpdate(event) {
    let target = event.target; 
    let name = target.name; 
    this.setState({[name]: target.value})
  }

  _handleSubmit(event) {
    event.preventDefault(); 
    let username = this.state.username; 
    let password = this.state.password; 
    AWSProxy.loginUser(new LoginRequest(username, password)).then(response => {
      let loginResponse = new LoginResponse(response._message, response._success, response._user); 
       this.setState({loginResponse: loginResponse}); 
    }).catch(error => console.warn("Failed when getting login response.")); 
  }

  _handleLoginResult() {
    let loginResponse = this.state.loginResponse; 

    if (loginResponse === null) {
      return null; 
    }

    let loginSuccess: boolean = loginResponse._success;

    if (loginSuccess) {
      UserSingleton.getInstance().setUser(loginResponse._user);
      this.props.goToEnrollments(); 
    } else {
      return (<div>{"Invalid username or password."}</div>); 
    }
  }

  render() {
    return (
      <>
        <div className={styles.container} > 
          <div className={styles.logoContainer}>
           <img src={"https://i.imgur.com/zJdKxo8.jpeg"} />  
          </div>  
          <form className={styles.form} onSubmit={this._handleSubmit}>
            <label className={styles.formRow}>Username
              <input type="text" name="username" onChange={this._handleUpdate} />
            </label> 
            <label className={styles.formRow}>Password
              <input type="password" name="password" onChange={this._handleUpdate} />
            </label>
            <div className={styles.badLoginContainer}>{this._handleLoginResult()}</div>
            <button className={styles.submitButton} type="submit" value="SUBMIT">LOGIN</button>
          </form>
          <div className={styles.signUpLink}>
          <Link href={"/SignUpPage"}>
            <a>
              Don't have an account yet? Sign up here.
            </a>
          </Link>
          </div>
      </div>
    </>
    );
  }
}