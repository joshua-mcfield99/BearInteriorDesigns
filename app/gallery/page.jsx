import React from 'react'
import styles from '../styles/gallery.module.css'

export const metadata = {
    title: 'Gallery',
    description: 'This is our gallery you will find some images of our completed work.',
}

export default function Gallery() {
  return (
    <div className={`${styles.g_container}`}>
        <h1>Gallery Work In Progress!!</h1>
        <p>Check back another time.</p>
    </div>
  )
}
