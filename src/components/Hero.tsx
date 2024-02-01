import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'

function Hero() {
    return (
        <div className="w-full h-screen bg-banner-bg md:bg-banner-bg bg-center bg-cover">
            <div className="w-full h-screen text-white">
                {/* <Navbar /> */}
                <Banner />
            </div>
        </div>
    )
}

export default Hero