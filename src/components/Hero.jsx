import React from 'react'

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/images/mockups/mockup-test-image.svg" className="max-w-sm" />
                <div>
                    <h1 className="text-5xl font-bold">The next generation for Promotion Links!</h1>
                    <p className="py-6">Artistlnk is a fast, modern and simple Promotion Link Manager for: Artists, Content Creators, Bussiness...</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero