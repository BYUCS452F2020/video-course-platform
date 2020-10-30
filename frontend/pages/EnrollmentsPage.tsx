import React from 'react'; 
import Layout from '../components/Layout'; 
import styles from '../styles/Enrollments.module.css'; 
import ExpressProxy from '../proxy/ExpressProxy'; 
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
    // TODO: Delete in a minute...
    ExpressProxy.getEnrollments(new UserCoursesRequest(UserSingleton.getUser()._userId)).then(response => {
      let userCoursesResponse: UserCoursesResponse = new UserCoursesResponse(response._message, response._success, response._enrollments); 
      if (userCoursesResponse._enrollments !== null) {
        console.log("Enrollments!!!")
        console.log(userCoursesResponse._enrollments); 
        this.setState({enrollments: userCoursesResponse._enrollments}); 
      }
    }).catch(error => console.warn(error)); 
  }

  render() {
    return (
      <div className={styles.mainContainer}> 
        <h1 className={styles.title}>Enrollments</h1>
        <EnrollmentList enrollments={this.state.enrollments} />
      </div>
    ); 
  }
}