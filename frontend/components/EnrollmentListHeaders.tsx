import styles from './enrollmentItem.module.css'; 

export default function EnrollmentListHeaders() {
  return (
    <div className={styles.enrollmentItemRow}>
      <div className={styles.courseName}>
        Course Name
      </div>
      <div className={styles.enrollDate}>
        <p>Start date</p>
      </div>
    </div>
  );
}