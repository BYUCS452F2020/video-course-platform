import React from 'react'; 
import Head from 'next/head'; 
import Link from 'next/link'; 

import styles from '../styles/Login.module.css'

import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm'; 

import { withRouter } from 'next/router'; 

function LoginPage({router}) {

  const goToEnrollments = () => {
    router.push('/EnrollmentsPage'); 
  }

  return (
    <Layout>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className={styles.mainContainer}>
        <LoginForm goToEnrollments={goToEnrollments} />
        {/* <Link href='/SignupPage'><a>Click here to go to the sign up page!</a></Link> */}
      </div>
    </Layout>
  );
}

export default withRouter(LoginPage); 
