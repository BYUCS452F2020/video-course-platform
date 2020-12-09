import styles from './enrollmentItem.module.css'; 
import Link from 'next/link'; 

import {Enrollment} from '../../shared/shared';
import UserSingleton from '../UserSingleton';

interface Props {
  enrollment: Enrollment
}

export default function EnrollmentItem(props: Props) {
  let courseId = props.enrollment._courseName; 
  let dynamicLink = "/CoursePage/" + courseId;
  let randNum = Math.floor(Math.random() * 5);
  let imageLink = "https://loremflickr.com/600/800/" + randNum + "/all"
  let tags = ["awesome course", "computers", "math", "databases", "programming"];
  let dates = ["17 Dec 2020", "21 Jul 2020", "14 Aug 2019", "1 Jan 2021", "20 Apr 2020"];
  return (
    <div className={styles.enrollmentItem}>
      <div className={styles.enrollmentImage}>
        <Link href={dynamicLink}>
          <a>
            <img src={imageLink} />
          </a>
        </Link>
      </div>
      <div className={styles.enrollmentInfo}>
        <div className={styles.courseName}>
          <Link href={dynamicLink}>
            <a>{props.enrollment._courseName}</a>
          </Link>
        </div>
        <div className={styles.enrollDate}>
        <div>Enrolled on: {dates[randNum]}</div>
        {/* <div>Enrolled on: {props.enrollment._enrollmentDate}</div> */}
        </div>
        <span className={styles.enrollmentItemTag}>{tags[randNum]}</span>
      </div>
    </div>
  );
}