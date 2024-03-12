import React from 'react'
import styles from '../styles/gallery.module.css'
import CldImage from '../components/CldImage';

export const metadata = {
    title: 'Gallery',
    description: 'This is our gallery you will find some images of our completed work.',
}

export default async function Gallery() {
    const data = await getData();
    const images = data.images;
    console.log('Images', data.images);
  return (
    <div className={`${styles.g_container}`}>
        {images === undefined || images.length === 0 ? <h1>No Images Available</h1> : <h1>Gallery</h1>}
            {images.map((image, idx) => {
                return (
                    <div key={idx} className={styles.image}>
                        <CldImage 
                            src={image.url}
                            width='200'
                            height='300'
                            crop='fill' // this breaks the fetch 
                        />
                    </div>
                )
            })}
    </div>
  )
}

export async function getData() {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image`, {
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

    console.log(images)

    return {
        images
    }
}

