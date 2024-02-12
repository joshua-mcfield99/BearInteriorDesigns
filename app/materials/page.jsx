import React from 'react'
import styles from '../styles/materials.module.css'
import Slider from '../components/Slider'
import slides from '../data/materials.json'

export const metadata = {
    title: 'Materials',
    description: 'Explore premium materials at Bear Interior Designs, featuring our main supplier Crown Imperial. Discover the finest selections for your bespoke storage solutions in Godalming, Surrey. Elevate your home with quality craftsmanship and superior materials.',
}

export default function Materials() {

    return (
        <main className={`main ${styles.materials}`}>
            <div className={`${styles.content}`}>
                <div className={`title`}>
                    <h2>Materials</h2>
                </div>
                <div className={`sub_text`}>
                    <p>We use a Huge range of materials, Take a look at the slide below for a summary of what we offer!</p>
                </div>
                <div className={`${styles.slide_container}`}>
                    <Slider data={slides.slides} />
                </div>
            </div>
        </main>
    )
}
