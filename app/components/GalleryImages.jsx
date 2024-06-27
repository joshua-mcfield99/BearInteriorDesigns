"use client";

import React, { useState } from 'react';
import styles from '../styles/gallery.module.css';
import CldImage from '../components/CldImage';
import GModal from '../components/GModal';

const GalleryImages = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    return (
        <div className={styles.g_container}>
            <div className="title">
                {images.length === 0 ? <h1>No Images Available</h1> : <h1>Gallery</h1>}
            </div>
            <div className={`sub_text`}>
                    <p>Click/Tap on an image to enlarge!</p>
            </div>
            <div className={styles.gallery}>
                {images.map((image, idx) => (
                    <div key={idx} className={styles.image} onClick={() => openModal(image)}>
                        <CldImage
                            src={image.url}
                            fill
                            sizes="(max-width: 1440px) 100vw"
                        />
                    </div>
                ))}
            </div>
            {isModalOpen && <GModal image={selectedImage} onClose={closeModal} />}
        </div>
    );
};

export default GalleryImages;