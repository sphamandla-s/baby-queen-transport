import { TruckIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { GiTruck } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 rounded-lg shadow m-4 text-white">
    {/* <Faq /> */}
    
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0 text-center">
            <span className="self-center cursor-pointer text-2xl font-semibold whitespace-nowrap flex items-end">Baby Queen Transport <GiTruck /></span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="#home" className="mr-4 hover:underline md:mr-6">Home</a>
            </li>
            <li>
              <a href="#about" className="mr-4 hover:underline md:mr-6">About</a>
            </li>
            <li>
              <a href="#values" className="mr-4 hover:underline md:mr-6">Values</a>
            </li>
            <li>
              <a href="#team" className="hover:underline">Team</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">© 2024 <a href="https://sminfinitetech.vercel.app/" className="hover:underline">SMInfiniteTech™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;