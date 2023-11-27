import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav>
        <div>
            <Image 
                alt='Bear interior designs logo'
                src='/BearLogoNav.png'
                width={187}
                height={100}
            />
        </div>
        <div>
            <Link href='/'>Home</Link>
            <Link href='/materials'>Materials</Link>
            <Link href='/gallery'>Gallery</Link>
            <Link href='/contact'>Contact</Link>
        </div>
    </nav>
  )
}
