import Image from 'next/image'
import React from 'react'
import styles from '../styles/footer.module.css'
import Link from 'next/link'
import CldImage from './CldImage'

export default function Footer() {
  return (
    <footer className={`${styles.footer_container}`}>
        <div className={`${styles.footer_banner}`}>
            <div className={`${styles.banner_img}`}>
                <CldImage 
                    alt='Bear interior designs'
                    src='Other/LogoWBG'
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
                <span id="siteseal"><script async type="text/javascript" src="https://seal.starfieldtech.com/getSeal?sealID=EftWBs4kKiqtpuMRhRvCcm4UIoDnIfPuYrG5JgWlomNoPAklBmroq7Z3rVCm"></script></span>
            </div>
            <div className={`${styles.footer_other}`}>
                <div className={`${styles.copyright}`}>
                    <div className={`${styles.c_top}`}>
                        <p>Copyright Bear interior designs</p>
                        <CldImage 
                            alt='Copyright'
                            src='Other/Copyright'
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
