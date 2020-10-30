import styles from './enrollmentList.module.css'; 
import EnrollmentListHeaders from './EnrollmentListHeaders'; 
import EnrollmentItem from './EnrollmentItem'; 

export default function EnrollmentList(props) {
  return (
    <div className={styles.mainContainer}> 
      <EnrollmentListHeaders />
      {props.enrollments.map(enrollment => {
        return (<EnrollmentItem enrollment={enrollment}/>)
      })}
    </div>
  ); 
}