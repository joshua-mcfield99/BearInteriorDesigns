'use client'
import React, { useState } from 'react'
import styles from './slider.module.css'
import Image from 'next/image'
import CldImage from './CldImage'

export default function Slider({data}) {

    const [slide, setSlide] = useState(0)
    
    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }
    
    return (
        <div className={`${styles.slider}`}>
            <div className={`${styles.arrow} ${styles.prev}`} onClick={prevSlide}>
                <CldImage 
                    alt='Previous'
                    src='Other/Arrow'
                    width={15}
                    height={25}
                />
            </div>
            {data.map((item, idx) => {
                return (
                    <div key={idx} className={`${slide === idx ? `${styles.slide}` : `${styles.slide} ${styles.slide_hidden}`}`}>
                        <div className={`${styles.slide_title}`}>
                            <h3>{item.title}</h3>
                        </div>
                        <div className={`${styles.slide_content}`}>
                            <p>{item.text}</p>
                            <div className={`${styles.slide_img}`}>
                                <CldImage
                                    alt={item.image.alt}
                                    src={item.image.src}
                                    fill
                                />
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className={`${styles.arrow} ${styles.next}`} onClick={nextSlide}>
                <CldImage 
                    alt='Next'
                    src='Other/Arrow'
                    width={15}
                    height={25}
                />
            </div>
            <span className={`${styles.indicators}`}>
                {data.map((_, idx) => {
                    return (
                        <button key={idx} className={`${slide === idx ? `${styles.indicator}` : `${styles.indicator} ${styles.indicator_inactive}`}`} onClick={() => setSlide(idx)}></button>
                    )
                })}
            </span>
        </div>
    )
}
