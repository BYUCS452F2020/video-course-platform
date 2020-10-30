import React from 'react'; 
import Layout from '../../components/Layout'; 
import styles from '../../styles/Course.module.css'; 
import ExpressProxy from '../../proxy/ExpressProxy'; 
import {Course, CourseRequest, CourseResponse, Unit} from '../../../shared/shared'; 
import {Router, withRouter} from 'next/router'; 

import UserSingleton from '../../UserSingleton';

class CoursePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: null,
      selectedLesson: 1,
      selectedUnit: 1
    };
  }
  
  static getInitialProps({ pathname }) {
    return { pathname }
  }

  componentDidMount() {
    // Get initial prop for course
    const {CourseId} = this.props.router.query; 
    console.log(CourseId);

    ExpressProxy.loadCourse(new CourseRequest(CourseId)).then(response => {
      let courseResponse: CourseResponse = new CourseResponse(response._message, response._success, response._course); 
      if (courseResponse._course !== null) {
        console.log("Course!!!")
        console.log(courseResponse._course);
        this.setState({course: courseResponse._course}); 
      }
    }).catch(error => console.warn(error)); 
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <h1>
          {this.state.course ? this.state.course._courseName : null}
        </h1>
        <div className={styles.videoPageContainer}>
          <div className={styles.videoPlayer}>
            <iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0" frameborder="0"></iframe>
          </div>
          <div className={styles.videoSidebar}>
          {this.state.course !== null ? this.state.course._units.map(unit => {
              return (
                <div className={styles.unitSection}>
                  <div className={styles.unitTitle}>
                    {unit._unitName}
                  </div>
                  <ul>
                    <li className={styles.selectedLesson}>Lesson 1</li>
                    <li>Lesson 2</li>
                  </ul>
                </div> 
              )
          }) : null}
            <div className={styles.unitSection}>
              <div className={styles.unitTitle}>
                Unit Title 1
              </div>
              <ul>
                <li className={styles.selectedLesson}>Lesson 1</li>
                <li>Lesson 2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}

export default withRouter(CoursePage); 

/*

{this.state.course._units.map(unit => {
                
            })}

            */
/* 
<div className={styles.videoSidebar}>
            <div className={styles.unitSection}>
              <div className={styles.unitTitle}>
                Unit Title 1
              </div>
              <ul>
                <li className={styles.selectedLesson}>Lesson 1</li>
                <li>Lesson 2</li>
              </ul>
            </div>
          </div>
          */ 