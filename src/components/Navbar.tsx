"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" shadow-2xl h-[80px] bg-light-pink" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center mt-[15px]  ">
            <Link href="/">
              Logo
            </Link>
          </div>
          <div className="lg:mr-[10px] mt-[15px] md:mr-[100px] font-sans font-bold hidden md:flex md:items-center md:space-x-4 gap-x-[140px] md:gap-[50px] text-[24px] ">
            <Link href="/">
              About
            </Link>
            
            <Link href="/services ">
              Services
            </Link>
            <Link href="/Patient Stories">
              Patient Stories
            </Link>
            
          </div>
          <button className='text-white mt-[15px] hidden lg:block w-[120px] h-[40px] rounded-[10px] font-bold text-[20px] justify-between' style={{backgroundColor:"#A93DA5"}}>
                Contact
            </button>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden overflow-auto">
          <div className="flex flex-col px-2 pt-4 pb-3 space-y-4 sm:px-3">
            <Link href="/">
             About
            </Link>
            
            <Link href="/services">
                Services
            </Link>
            <Link href="/Patient Stories">
             Patient Stories
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
