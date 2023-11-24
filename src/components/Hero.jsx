import { useRouter } from 'next/navigation'
import React from 'react'
import HeroBtn from './extras/HeroBtn'

const Hero = () => {
    return (
        <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row-reverse">
                <img src="/images/mockups/mockup-test-image.svg" className="max-w-sm" />
                <div>
                    <h1 className="text-5xl font-bold">The next generation for Promotion Links!</h1>
                    <p className="py-6">Artistlnk is a fast, modern and simple Promotion Link Manager for: Artists, Content Creators, Bussiness...</p>
                    <HeroBtn />
                </div>
            </div>
        </div>
    )
}

export default Hero