'use client'

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={`${styles.main} main`}>
            <div className={styles.hero}>
                <div className={styles.inner}>
                    <div className={styles.left}>
                        <h1>Crafting Your Dream Living Spaces, One Detail At A Time</h1>
                    </div>
                    <div className={styles.right}>
                        <p>
                            Bespoke Bedroom Storage Soloutions in surrey and surrounding areas.
                        </p>
                    </div>
                </div>
            </div>
            <div className={`${styles.about} main`}>
                <div className={`title`}>
                    <h2>About</h2>
                </div>
                <div className={`${styles.content}`}>
                    <div className={`${styles.about_text}`}>
                        <p>Experience a Tailored Approach to Your Ideal Living Spaces.</p>
                        <p>
                            Discover our exclusive service, where we specialize in crafting personalized, top-tier fitted furniture for your bedroom, home office, and lounge.
                        </p>
                        <p>
                            {'Here\'s'} how it works: I start with a complimentary, no-obligation home design survey {'\-'} I will come to you. Then, we transform your ideas into a vivid reality with detailed CAD drawings of your envisioned furniture. Once {'you\'re'} thrilled with the design, I will handle material sourcing and expert installation, delivering your dream furniture.
                        </p>
                        <p>
                            My expertise in bespoke fitted furniture shines through every project we undertake. I exclusively collaborate with a trusted British materials supplier, providing an extensive selection of finishes and door styles.
                        </p>
                        <p>
                            Elevate your living spaces with our custom-tailored solutions today.
                        </p>
                    </div>
                    <div className={`${styles.about_img}`}>
                        <Image 
                            alt='A bed side table'
                            src='/CROWNShenayaPaleGrey4.jpg'
                            width={500}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
