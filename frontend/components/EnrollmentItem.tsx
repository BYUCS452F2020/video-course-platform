import styles from './enrollmentItem.module.css'; 
import Link from 'next/link'; 

import {Enrollment} from '../../shared/shared';
import UserSingleton from '../UserSingleton';

interface Props {
  enrollment: Enrollment
}

export default function EnrollmentItem(props: Props) {
  let courseId = props.enrollment._courseId; 
  let dynamicLink = "/CoursePage/" + courseId;
  let imageLink = "https://loremflickr.com/600/800/" + props.enrollment._courseId + "/all"
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
          <div>Enrolled on: {props.enrollment._enrollmentDate}</div>
        </div>
        <span className={styles.enrollmentItemTag}>Course Tag</span>
      </div>
    </div>
  );
}