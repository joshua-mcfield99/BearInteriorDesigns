import React from 'react';
import styles from '../styles/gmodal.module.css';
import CldImage from '../components/CldImage';

const GModal = ({ image, onClose }) => {
    if (!image) return null;
    
    return (
        <div className={styles.modal} onClick={onClose}>
            <span className={styles.closeButton} onClick={onClose}>&times;</span>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <CldImage
                    src={image.url}
                    fill
                    sizes="(max-width: 1440px) 100vw"
                    className={styles.modalImage}
                />
            </div>
        </div>
    );
};

export default GModal;