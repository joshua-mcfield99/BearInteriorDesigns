import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

//Style
import styles from '../styles/nav.module.css'

export default function NavBar() {
  return (
    <nav className={styles.nav_container}>
        <div className={styles.nav_logo}>
            <Image 
                alt='Bear interior designs logo'
                src='/BearLogoNav.png'
                width={187}
                height={100}
            />
        </div>
        <div className={styles.nav_links}>
            <Link href='/'>Home</Link>
            <Link href='/materials'>Materials</Link>
            <Link href='/gallery'>Gallery</Link>
            <Link href='/contact'>Contact</Link>
        </div>
        <div className={styles.nav_whatsapp}>

        </div>
    </nav>
  )
}
