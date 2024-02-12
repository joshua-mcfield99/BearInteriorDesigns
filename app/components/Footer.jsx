import Image from 'next/image'
import React from 'react'
import styles from '../styles/footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={`${styles.footer_container}`}>
        <div className={`${styles.footer_banner}`}>
            <div className={`${styles.banner_img}`}>
                <Image 
                    alt='Bear interior designs'
                    src='/BearLogoChapman.png'
                    fill
                />
            </div>
        </div>
        <div className={`${styles.footer_content}`}>
            <div className={`${styles.footer_nav}`}>
                <h3>Links :</h3>
                <div className={styles.footer_links}>
                    <Link href='/'>Home</Link>
                    <Link href='/materials'>Materials</Link>
                    <Link href='/gallery'>Gallery</Link>
                    <Link href='/contact'>Contact</Link>
                </div>
            </div>
            <div className={`${styles.footer_contact}`}>
                <h3>Phone: +44 7955 577947</h3>
                <h3>Email: bearinteriordesigns@gmail.com</h3>
            </div>
            <div className={`${styles.footer_other}`}>
                <div className={`${styles.copyright}`}>
                    <div className={`${styles.c_top}`}>
                        <p>Copyright Bear interior designs</p>
                        <Image 
                            alt='Copyright'
                            src='/copyright.svg'
                            width={20}
                            height={20}
                        />
                    </div>
                    <p>Some images were provided by Crown Imperial</p>
                </div>
                {//<Link href='/login'>Admin</Link>
                }
            </div>
        </div>
    </footer>
  )
}
