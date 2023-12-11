import React from 'react'
import styles from '../styles/slider.module.css'
import Image from 'next/image'

export default function Slider(props) {
    return (
        <div className={`${styles.slider}`}>
            {props.cards.map((card) => (
                <div key={card.title}>
                    <div>
                        <h3>{card.title}</h3>
                    </div>
                    <div>
                        <div>
                            <p>{card.text}</p>
                        </div>
                        <div>
                            <Image 
                                alt={card.image.alt} 
                                src={card.image.src} 
                                width={400}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
  )
}
