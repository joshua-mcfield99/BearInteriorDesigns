import React from 'react'
import styles from '../styles/slider.module.css'
import Image from 'next/image'

export default function Slider(props) {
    return (
        <div className={`${styles.slider}`}>
            <div className={`${styles.slide_track}`}>
                {props.cards.map((card) => (
                    <div key={card.title} className={`${styles.card}`}>
                        <div className={`${styles.card_title}`}>
                            <h3>{card.title}</h3>
                        </div>
                        <div className={`${styles.card_content}`}>
                            <div className={`${styles.card_left}`}>
                                <p>{card.text}</p>
                            </div>
                            <div className={`${styles.card_right}`}>
                                <Image 
                                    alt={card.image.alt} 
                                    src={card.image.src} 
                                    fill={true}
                                    objectFit='cover'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}
