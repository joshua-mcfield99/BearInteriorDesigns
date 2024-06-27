import React from 'react';
import GalleryImages from '../components/GalleryImages';

export const metadata = {
    title: 'Gallery',
    description: 'This is our gallery you will find some images of our completed work.',
}

export default async function GalleryPage() {
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
            <GalleryImages images={images} />
        </main>
    );
}

export async function getData() {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image/upload?prefix=Gallery`, {
        headers: {
            Authorization: `Basic ${Buffer.from(process.env.API_KEY + ':' + process.env.API_SECRET).toString('base64')}`
        }
    }).then(r => r.json());

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

    return {
        images
    }
}
