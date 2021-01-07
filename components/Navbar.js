import Link from 'next/link';
import Image from 'next/image'

import styles from '../styles/Layout.module.css';

export default function Navbar() {
  return (
    <>
      <header className={styles.nav_container}>
        <ul className={styles.nav_left}>
          <li className={styles.nav}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.nav}>
            <Link href="/static">
              <a>Post Static</a>
            </Link>
          </li>
        </ul>
      </header>

      <div className={styles.heading_info}>
        <div className={styles.heading_info_left}>
          <h1>Discover people thoughts around You</h1>
        </div>
        <div className={styles.heading_info_right}>
          <Image src='/../public/thought.png' alt='people thoughts'
            width={300}
            height={300}
          />
        </div>

      </div>
    </>
  )
}