'use client';

import vikysphoto from '../../public/viktor2.png'
import Image from 'next/image'

import Link from "next/link";
import { useState } from 'react';

export default function AboutPage() {

    const [isShown, setIsShown] = useState(false)

    return (
        <div>
            <h1 className="flex justify-center">This is the about page</h1>
            <Link href='/' className="absolute m-12 text-xl hover:font-semibold top-0">Home</Link>
            {isShown && <Image
            className='border-4 border-red-700 absolute ml-32 w-32 h-32 rounded-full'
            src={vikysphoto}/>}
            <button 
            className='mt-48 ml-24'
            onClick={()=>setIsShown(!isShown)}>Show/Hide Viktor</button>
        </div>
    )
}