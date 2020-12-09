import Head from 'next/head'; 
import Link from 'next/link'; 

import Layout from '../components/Layout'; 
import Navbar from '../components/Navbar';
import SignUpForm from '../components/SignUpForm';
import { withRouter } from 'next/router'; 

import styles from '../styles/SignUp.module.css'

function SignUpPage({router}) {
  const goToEnrollments = () => {
    router.push('/EnrollmentsPage'); 
  }

  return (
    <Layout>
      <Head>
        <title>Sign up Page</title>
      </Head>
      <div className={styles.mainContainer}>
        <SignUpForm goToEnrollments={goToEnrollments}/>
      </div>
    </Layout>
  );
}

export default withRouter(SignUpPage); 