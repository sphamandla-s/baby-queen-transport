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
        <section id='about' className='container mx-auto min-h-screen px-4 md:px-0 my-7'>
            {/* <div className='text-center mb-10'>
        <h2 className='text-3xl font-bold mb-4'>About Us</h2>
      </div> */}
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='md:w-1/2'>
                    <h2 className='text-[2.5rem] text-center leading-none  font-extrabold font-sans md:mx-auto md:text-5xl md:leading-tight mb-5 sm:text-center xl:text-left'>
                        We’re changing the way people connect.
                    </h2>
                    <p className='text-gray-600 text-center md:text-left'>
                        Cupidatat minim id magna ipsum sint dolor qui. Sunt sit
                        in quis cupidatat mollit aute velit. Et labore commodo
                        nulla aliqua proident mollit ullamco exercitation tempor.
                        Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum.
                        Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua.!
                    </p>
                    <p className='text-gray-600 text-center md:text-left'>
                        Cupidatat minim id magna ipsum sint dolor qui. Sunt sit
                        in quis cupidatat mollit aute velit. Et labore commodo
                        nulla aliqua proident mollit ullamco exercitation tempor.
                        Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum.
                        Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua.!
                    </p>
                </div>
                <div className='md:w-1/2 mt-6 md:mt-0'>
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
