import styles from './enrollmentList.module.css'; 
import EnrollmentListHeaders from './EnrollmentListHeaders'; 
import EnrollmentItem from './EnrollmentItem'; 
import UserSingleton from '../UserSingleton';

export default function EnrollmentList(props) {
  return (
    <div className={styles.mainContainer}>
      {props.enrollments.map(enrollment => {
        return (<EnrollmentItem enrollment={enrollment}/>)
      })}
    </div>
  ); 
}