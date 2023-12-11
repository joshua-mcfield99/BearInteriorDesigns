'use client'

import React from 'react'
import styles from '../styles/materials.module.css'
import Slider from '../components/Slider'

export default function Materials() {

    const cards = [
        {
            title: 'Locano',
            text: `Locano is a range of MFC finished doors available in a mix of colours and woodgrain effects all finished with a co-ordinating radius edging.
            Locano may be paired with a multitude of colours get in-touch to find out more.`,
            image: {
                alt: 'Here is an a Exquisit locano styled bedroom',
                src: '/CROWN Locano Cashmere Bedroom 1.jpg'
            }
        },
        {
            title: 'Rimano',
            text: `Rimano epitomises a modern clasic feel, featuring a delicatley proportioned bevel design, with a solid frame and veneered centre panel. Get in-touch to discuss colour options.`,
            image: {
                alt: 'Here is a beautifull image depiciting Rimano styling.',
                src: '/CROWN Rimano Cashmere 1.jpg'
            }
        },
        {
            title: 'Shenaya',
            text: 'With a delicate slim frame, Shenaya illustrates a stylish smooth shaker design. Ideal to add warmth to a large bedroom. There is a vibrant and neutral toned palette ready to be perfectly paired just get in-touch to find out more.',
            image: {
                alt: 'Here is an image of a Shenaya styled bedroom.',
                src: '/CROWN Shenaya PaleGrey 4.jpg'
            }
        },
        {
            title: 'Midsomer',
            text: 'Midsomer is a timeless shaker design available in a variety of eye-catching paint shades. This popular woodgrain shaker style features a solid frame with a vaneered centre panel. Get in-touch to discuss colour options.',
            image: {
                alt: 'Here is a Image of a light midsomer bedroom.',
                src: '/CROWN Midsomer Light Grey Bedroom 1.jpg'
            }
        },
        {
            title: 'Zeluso',
            text: `Ultra-contemporary, Zeluso is characterised by it's tactile silk like finish and is also availble in matte shades. The range offers a palette of neutral and bold colours. Get in-touch to find out more.`,
            image: {
                alt: 'Here is an image of a Zeluso styled bedroom.',
                src: '/CROWN Zeluso Cashmere Bedroom2.jpg'
            }
        },
        {
            title: 'Furore',
            text: 'Furore offers a palette of vibrant colour choices with reflective tones, enhancing the feeling of space and light to create a standout bedroom design.',
            image: {
                alt: 'Here is a image a Furore styled bedroom',
                src: '/CROWN Furore Grey Silk Bedroom 1.jpg'
            }
        },
        {
            title: 'Textura',
            text: 'Indulge your senses with our diverse selection of wood textures and colors, transforming your space into a haven of natural beauty. Immerse yourself in the rich palette and tactile allure that Texture brings, creating an environment that not only looks but also feels authentically inviting. Get in-touch to find out more',
            image: {
                alt: 'Here is a bedroom with textura cabnets.',
                src: '/CROWN Textura Whitewood Bedroom 1.jpg'
            }
        },
        {
            title: 'UNO',
            text: 'Designed for modern lifestyles, Uno offers a contemporary choice of subtle shades. Sleek in style, the versatile tones are perfect for pairing together to create a neutral scheme. ',
            image: {
                alt: 'here is an UNO styled Bedroom.',
                src: '/CROWN Uno Taupe Bedroom 1.jpg'
            }
        }
    ];

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
                    <Slider cards={cards} />
                </div>
            </div>
        </main>
    )
}
