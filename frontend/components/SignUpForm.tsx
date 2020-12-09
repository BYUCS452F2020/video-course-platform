import React from 'react'; 
import styles from './signUpForm.module.css'; 
//import ExpoProxy from '../proxy/ExpressProxy'; 
import AWSProxy from '../proxy/AWSProxy';
import {SignUpRequest, SignUpResponse, User} from '../../shared/shared'; 
import UserSingleton from '../UserSingleton'; 
import Link from 'next/link'; 


// TODO: Move the state in this class to the parent later on. 
export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      username: '', 
      password: '',
      firstName: '', 
      lastName: '', 
      email: '',
      signUpResponse: null
    }

    this._handleUpdate = this._handleUpdate.bind(this); 
    this._handleSubmit = this._handleSubmit.bind(this); 
    this._handleSignUpResult = this._handleSignUpResult.bind(this); 
  }

  _handleUpdate(event) {
    let target = event.target; 
    let name = target.name; 
    this.setState({[name]: target.value})
  }

  _handleSubmit(event) {
    event.preventDefault(); 
    let requestUser: User = new User("", this.state.username, this.state.firstName, this.state.lastName, this.state.email, "Student", new Date().toISOString());
    AWSProxy.signUpUser(new SignUpRequest(requestUser, this.state.password)).then(response => {
      let signUpResponse = new SignUpResponse(response._message, response._success, response._user); 
       this.setState({signUpResponse: signUpResponse}); 
    }).catch(error => console.warn("Failed when getting login response.")); 
  }

  _handleSignUpResult() {
    let signUpResponse = this.state.signUpResponse; 

    if (signUpResponse === null) {
      return null; 
    }

    let signUpSuccess: boolean = signUpResponse._success;

    if (signUpSuccess) {
      UserSingleton.getInstance().setUser(signUpResponse._user);
      this.props.goToEnrollments(); 
    } else {
      return (<div>{"Username is already taken."}</div>); 
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
            <hr />
            <label className={styles.formRow}>First Name
              <input type="text" name="firstName" onChange={this._handleUpdate} />
            </label>
            <label className={styles.formRow}>Last Name
              <input type="text" name="lastName" onChange={this._handleUpdate} />
            </label>
            <label className={styles.formRow}>Email
              <input type="text" name="email" onChange={this._handleUpdate} />
            </label>
            <div className={styles.badSignUpContainer}>{this._handleSignUpResult()}</div>
            <button className={styles.submitButton} type="submit" value="SUBMIT">SIGN UP</button>
          </form>
          <div className={styles.signUpLink}>
          <Link href={"/"}>
            <a>
              Already a user? Sign in here.
            </a>
          </Link>
          </div>
      </div>
    </>
    );
  }
}