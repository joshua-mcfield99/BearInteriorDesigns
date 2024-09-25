'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

//Style
import styles from '../styles/nav.module.css'
import CldImage from './CldImage'

export default function NavBar() {
    // State to track the menu's open/closed state
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle function to change the state
    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.nav_container}>
            <div className={styles.nav_logo}>
                <CldImage
                    alt='Bear interior designs logo'
                    src='Other/LogoNav'
                    width={150}//134 original
                    height={100}
                />
            </div>
            <div className={`
                    ${styles.nav_controls} 
                    ${ isMenuOpen ? `${styles.menu_open}` : ''}
                `} 
                onClick={toggleMenu}
            >
                <span className={`${styles.hamburger}`}></span>
            </div>
            <div className={`${styles.nav_links_container} ${ isMenuOpen ? `${styles.show_menu}` : ''}`}>
                <div className={styles.nav_links}>
                    <Link href='/' onClick={toggleMenu}>Home</Link>
                    <Link href='/materials' onClick={toggleMenu}>Materials</Link>
                    <Link href='/gallery' onClick={toggleMenu}>Gallery</Link>
                    <Link href='/contact' onClick={toggleMenu}>Contact</Link>
                </div>
                <div className={styles.nav_whatsapp}>
                    <a href='https://wa.me/447955577947' target="_blank" rel="noopener noreferrer" className={`${styles.whatsapp_link}`} onClick={toggleMenu}>WhatsApp</a>
                </div>
            </div>
        </nav>
    )
}
