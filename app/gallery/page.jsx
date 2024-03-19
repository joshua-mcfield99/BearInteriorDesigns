import React from 'react'
import styles from '../styles/gallery.module.css'
import CldImage from '../components/CldImage';

export const metadata = {
    title: 'Gallery',
    description: 'This is our gallery you will find some images of our completed work.',
}

export default async function Gallery() {
    //const data = await getData();
    //const images = data.images;
    //console.log('Images', data.images);
    let images = [];
    try {
        const data = await getData();
        if (data && data.images) {
            images = data.images;
            console.log('Images from getData:', images);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    console.log('Images before rendering:', images);
  return (
    <main>
        <div className={`${styles.g_container}`}>
            <div className={`title`}>
                {images === undefined || images.length === 0 ? <h1>No Images Available</h1> : <h1>Gallery</h1>}
            </div>
            <div className={`${styles.gallery}`}>
                {images.map((image, idx) => {
                    return (
                        <div key={idx} className={styles.image}>
                            <CldImage
                                src={image.url}
                                fill
                                sizes="(max-width: 1440px) 100vw"
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    </main>
  )
}

export async function getData() {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image/upload?prefix=Gallery`, {
        headers: {
            Authorization:`Basic ${Buffer.from(process.env.API_KEY + ':' + process.env.API_SECRET).toString('base64')}`
        }
    }).then(r => r.json());
    //console.log('Results:', res);

    const { resources } = res;

    const images = resources.map(resource => {
        const { width, height } = resource;
        return {
            id: resource.asset_id,
            title: resource.public_id,
            url: resource.secure_url,
            width,
            height
        }
    });

    //console.log(images)

    return {
        images
    }
}

