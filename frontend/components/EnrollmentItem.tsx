import styles from './enrollmentItem.module.css'; 
import Link from 'next/link'; 

import {Enrollment} from '../../shared/shared';

interface Props {
  enrollment: Enrollment
}

export default function EnrollmentItem(props: Props) {
  let courseId = props.enrollment._courseId; 
  let dynamicLink = "/CoursePage/" + courseId; 
  return (
    <div className={styles.enrollmentItemRow}>
      <div className={styles.courseName}>
        <Link href={dynamicLink}>
          <a>{props.enrollment._courseName}</a>
        </Link>
      </div>
      <div className={styles.enrollDate}>
        <p>{props.enrollment._enrollmentDate}</p>
      </div>
    </div>
  );
}