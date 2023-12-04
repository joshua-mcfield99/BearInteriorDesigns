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
            <div className={styles.about}>
                
            </div>
        </main>
    )
}
