'use client'
import React from 'react'
import { CldImage }  from 'next-cloudinary';
 

const CldImages = (props) => {
  return (
    <CldImage {...props}/>
  )
}

export default CldImages
