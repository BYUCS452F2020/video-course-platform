import styles from './navbar.module.css'; 
import Link from 'next/link'; 


export default function Navbar() {
  return (
      <div className={styles.navOuterContainer}>
        <div className={styles.navContainer}>
            <div className={styles.navLogo}>
                <Link href={"/EnrollmentsPage"}>
                    <a>
                        <img src={"https://i.imgur.com/zJdKxo8.jpeg"} />    
                    </a>
                </Link>
            </div>
            <div className={styles.searchContainer}>
                <form>
                    <input type="text" placeholder="What do you want to learn?" name="search" />
                    <button type="submit">SEARCH</button>
                </form>
            </div>
            <ul>
                <li><a>Browse</a></li>
                <li>
                    <Link href={"/EnrollmentsPage"}>
                        <a>My Classes</a>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  ); 
}