import React from 'react';

export default function About() {
    const trucksImgs = [
        '/caleb-ruiter-EmEQ6kK_5P0-unsplash.jpg',
        '/maxim-tolchinskiy-crHhZlES310-unsplash.jpg',
        '/banner.jpg',
        '/pexels-craig-adderley-2449454.jpg',
        '/pexels-elevate-1267325.jpg',
        '/pexels-lê-minh-977213.jpg',
        '/pexels-marcin-jozwiak-2800121.jpg',
        '/pexels-markus-spiske-226460.jpg',
        '/pexels-mike-bird-192364.jpg',
        '/sven-brandsma-YnSWpIPX3pE-unsplash.jpg',
        '/wolfgang-hasselmann-nbRgZltoOck-unsplash.jpg',
    ];

    return (
        <section id='about' className='container mx-auto px-4 md:px-0 my-10'>
            <div className='text-center mb-10 hidden md:block'>
                <h2 className='text-[2.5rem] text-center leading-none  font-extrabold font-sans md:mx-auto md:text-5xl md:leading-tight mb-5 sm:text-center italic'>About Us.</h2>
                <p className=' font-extralight text-center sm:text-center md:mx-auto max-w-[470px]'>Striving for excellence is not just a goal; it's ingrained in our culture.</p>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='md:w-1/2 md:mr-5'>
                    <h2 className='text-[2.5rem] text-center leading-none  font-extrabold font-sans md:mx-auto md:text-5xl md:leading-tight mb-5 sm:text-center xl:text-left'>
                        We’re changing the way people connect.
                    </h2>
                    <p className='text-gray-600 text-center md:text-left'>
                        Founded in 2023 by Bakhele Qiniso Khumalo, Baby Queen Transport is more
                        than just a logistics company; it's a vision brought to life. With a deep
                        commitment to excellence and a foundation built on values, Bakhele set out
                        to create a company that combines the efficiency of a super logistics enterprise
                        with the warmth of a family-oriented business.
                    </p>
                    <p className='text-gray-600 text-center md:text-left'>
                        At Baby Queen Transport, we envision more than just moving cargo from point A to B.
                        We aim to redefine the logistics landscape by seamlessly blending superlative efficiency
                        with a personal touch. Our goal is to offer world-class logistics solutions while preserving
                        the values that make us a tight-knit family.
                    </p>
                    <p className='text-gray-600 text-center md:text-left'>
                        At Baby Queen Transport, we don't just transport goods; we facilitate journeys,
                        build relationships, and ensure the safe and efficient delivery of your cargo.
                        Join us in experiencing logistics with a personal touch - where every client is
                        valued, and every shipment is handled with the utmost care.


                    </p>
                </div>
                <div className='md:w-1/2 mt-6 md:mt-0  md:ml-5'>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center'>
                        <div className=' grid grid-cols-1'>
                            <img className='h-full w-full rounded-lg' src={'/wolfgang-hasselmann-nbRgZltoOck-unsplash.jpg'} alt='' />
                        </div>
                        <div className=' grid grid-row-2 gap-2'>
                            <img className='h-full w-full rounded-lg' src={'/pexels-markus-spiske-226460.jpg'} alt='' />
                            <img className='h-full w-full rounded-lg' src={'/pexels-lê-minh-977213.jpg'} alt='' />
                        </div>
                        <div className=' grid grid-row-2 gap-2'>
                            <img className='h-full w-full rounded-lg' src={'/banner.jpg'} alt='' />
                            <img className='h-full w-full rounded-lg' src={'/maxim-tolchinskiy-crHhZlES310-unsplash.jpg'} alt='' />
                        </div>
                        <div className=' grid grid-cols-1 md:hidden'>
                            <img className='h-full w-full rounded-lg' src={'/sven-brandsma-YnSWpIPX3pE-unsplash.jpg'} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
