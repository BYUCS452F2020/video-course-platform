import React from 'react'; 
import Navbar from '../components/Navbar';
import Layout from '../components/Layout'; 
import styles from '../styles/Enrollments.module.css'; 
// import ExpressProxy from '../proxy/ExpressProxy'; 
import AWSProxy from '../proxy/AWSProxy';
import {UserCoursesRequest, UserCoursesResponse} from '../../shared/shared'; 

import UserSingleton from '../UserSingleton'; 
import EnrollmentList from '../components/EnrollmentList'; 

export default class EnrollmentPage extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      enrollments: [] 
    }; 
  }

  componentDidMount() {
    console.log("User in Enrollments Page: " + UserSingleton.getInstance().getUser());
    // TODO: Delete in a minute...
    AWSProxy.getEnrollments(new UserCoursesRequest(UserSingleton.getInstance().getUser()._username)).then(response => {
      let userCoursesResponse: UserCoursesResponse = new UserCoursesResponse(response._message, response._success, response._enrollments); 
      if (userCoursesResponse._enrollments !== null) {
        console.log("Enrollments!!!")
        console.log(userCoursesResponse._enrollments); 
        this.setState({enrollments: userCoursesResponse._enrollments}); 
      }
    }).catch(error => console.warn("Unable to get user enrollments.")); 
  }

  render() {
    return (
      <>
        <Navbar />
        <div className={styles.mainContainer}> 
          <h1 className={styles.title}>Let's start learning, {UserSingleton.getInstance().getUser()._firstName}</h1>
          <EnrollmentList enrollments={this.state.enrollments} />
        </div>
      </>
    ); 
  }
}