
// "use client";
// import React from "react";
// import { useTypewriter, Cursor } from "react-simple-typewriter";

// const Banner = () => {
//     const [text] = useTypewriter({
//         words: [
//             "Your trusted Logistic company.",
//             "Providing best user experience for customers.",
//             "Delivery on time in demand.",
//         ],
//         loop: true,
//         typeSpeed: 30,
//         deleteSpeed: 10,
//         delaySpeed: 3000,
//     });
//     return (
//         <div className=" flex justify-center items-center">
//             <div className=" h-96 max-w-screen-2xl mx-auto flex flex-col justify-center items-center text-center">
//                 <h1 className=" text-xl md:text-2xl mx-56">
//                     Welcome to <span className=" text-2xl md:text-4xl  font-bolduppercase">Baby Queen Transport</span>, where efficiency meets reliability in the world of truck logistics

//                 </h1>
//                 <h2 className=" font-bold">Future is our biggest enemy</h2>
//                 <p className="text-base md:text-lg font-extralight mt-2">
//                     {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
//                 </p>
//             </div>

//         </div>

//     );
// };

// export default Banner;

"use client"

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTypewriter, Cursor } from "react-simple-typewriter";


const navigation = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About Us",
    },
    {
        id: "services",
        title: "Our Services",
    },
    {
        id: "contact",
        title: "Contact Us",
    },
];

export default function Banner() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [active, setActive] = useState("Home");



    const [text] = useTypewriter({
        words: [
            "Your trusted Logistic company.",
            "Providing best user experience for customers.",
            "Delivery on time in demand.",
        ],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 10,
        delaySpeed: 3000,
    });

    return (
        <div id='#Home' className="bg-hero-bg bg-center bg-cover text-white min-h-screen overflow-hidden">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <ul className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item, index) => (
                            <li
                                key={item.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === item.title ? "text-white" : "text-dimWhite"
                                    } ${index === navigation.length - 1 ? "mb-0" : "mb-4"}`}
                                onClick={() => setActive(item.title)}
                            >
                                <a href={`#${item.id}`}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                    {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div> */}
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <ul className="space-y-2 py-6">
                                    {navigation.map((item, index) => (
                                        <li
                                            key={item.id}
                                            className={`font-poppins font-medium cursor-pointer text-[16px] ${active === item.title ? "text-white" : "text-dimWhite"
                                                } ${index === navigation.length - 1 ? "mb-0" : "mb-4"}`}
                                            onClick={() => setActive(item.title)}
                                        >
                                            <a href={`#${item.id}`}>{item.title}</a>
                                        </li>
                                    ))}
                                </ul>
                                {/* <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className=" mb-8 flex justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Future is our biggest enemy.{' '}
                            {/* <a href="#" className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a> */}
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-50 sm:text-6xl ">
                            Baby Queen Transport
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-200">
                            {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Contact Us
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-50">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
