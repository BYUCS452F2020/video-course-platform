import Head from 'next/head'; 
import Link from 'next/link'; 

import Layout from '../components/Layout'; 
import Navbar from '../components/Navbar';

export default function SignUp() {
  return (
    <Layout>
      <Head>
        <title>Sign up Page</title>
      </Head>
      <Navbar />
      <h1>Sign Up Page!</h1>
      <Link href='/'><a>Click here to go to the login page!</a></Link>
    </Layout>
  );
}