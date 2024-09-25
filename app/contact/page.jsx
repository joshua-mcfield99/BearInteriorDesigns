
import React from 'react'
import Link from 'next/link'
import styles from '../styles/contact.module.css'

export const metadata = {
    title: 'Contact',
    description: 'Here you will find our contact details',
}

export default function Contact() {
  return (
    <main>
        <div className={`title`}>
            <h2>Contact</h2>
        </div>
        <div className={`${styles.container}`}>
            <p>You can contact us a few ways just use one of the following options to book your free no-obligation quote!</p>
            <div className={`${styles.details_container}`}>
                <div className={`${styles.details_card}`}>
                    <h3>Email: bearinteriordesigns@gmail.com</h3>
                    <h3>Phone: +44 7498 862 196</h3>
                </div>
                <div className={styles.contact_link}>
                    <div className={styles.nav_whatsapp}>
                        <a href='https://wa.me/447498862196' target="_blank" rel="noopener noreferrer" className={`${styles.whatsapp_link}`}>WhatsApp</a>
                    </div>
                    <div className={styles.nav_whatsapp}>
                        <a href='https://www.instagram.com/bearinteriordesigns?igsh=MW1zdmhsanBwc3E5OQ' target="_blank" rel="noopener noreferrer" className={`${styles.whatsapp_link}`}>Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
