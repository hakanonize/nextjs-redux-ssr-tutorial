import styles from './nav.module.scss';
import Image from 'next/image';

const nav = () => {
    return (
        <nav className={styles.nav_container}>
        <div className={styles.nav_logo}>
         <a href='/'>

         <Image 
           src='/public/MovieUP-Logo.png' 
           alt="me" 
           layout="fixed"
           width="216"
           height="40"></Image>

         </a>
          
        </div>
          <div className={styles.nav_right}>
        <div className={styles.nav_elements}>
        <ul>
          <li>  <a href="/">Home</a> </li>
          <li> <a href="/favorites" className={styles.yellow}>Favorites</a></li>
        </ul>
        </div>
        <div className={styles.nav_searchbar}>
          <input type="text" className={styles.searchbar} placeholder="Enter movie name here"/>
          <a href="/"><Image src='/public/search.png' alt="me" width="20" height="20"></Image></a>
          
        </div>
        </div>
      </nav>
    )
}

export default nav
