// components/Header.tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className='mx-auto w-full'>
      <div className='text-center text-white bg-[#DC143C] p-2 text-xs'>
        <p>[Exclusive] Have You Registered for the Biggest WhatsApp Marketing Event? | Request Invite</p>
      </div>
      <div className='bg-white w-full'>
        <div className="max-w-screen-xl mx-auto px-4 py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="text-4xl font-bold">
            <Link href="/">LOGO</Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex flex-grow justify-center space-x-8 relative">
            <Link href="/" className="text-gray-700 hover:text-[#DC143C]">
              Home
            </Link>
            <Link href="/PrivacyPolicy" className="text-gray-700 hover:text-[#DC143C]">
              Privacy Policy
            </Link>
            <Link href="/TermsOfService" className="text-gray-700 hover:text-[#DC143C]">
              Terms Of Service
            </Link>
            <Link href="/ContactUs" className="text-gray-700 hover:text-[#DC143C]">
              Contact Us
            </Link>

            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-700 hover:text-[#DC143C] focus:outline-none"
              >
                Services
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 bg-white shadow-md rounded-md w-48 mt-2">
                  <Link href="/Services/Service1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#DC143C]">
                  Printer Troubleshooting
                  </Link>
                  <Link href="/Services/Service2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#DC143C]">
                  Windows Issues
                  </Link>
                  <Link href="/Services/Service3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#DC143C]">
                  Outlook PST File Support
                  </Link>
                  <Link href="/Services/Service4" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#DC143C]">
                  Television Setup
                  </Link>
                  <Link href="/Services/Service5" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#DC143C]">
                  Home appliances Support
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/cta" className="bg-[#FFD600] text-black px-5 py-3 rounded text-sm">
              Call to Action
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden">
              <nav className="flex flex-col items-center space-y-4 p-4">
                <Link href="/" className="text-gray-700 hover:text-blue-500">
                  Home
                </Link>
                <Link href="/PrivacyPolicy" className="text-gray-700 hover:text-blue-500">
                  Privacy Policy
                </Link>
                <Link href="/TermsOfService" className="text-gray-700 hover:text-blue-500">
                  Terms Of Service
                </Link>
                <Link href="/ContactUs" className="text-gray-700 hover:text-blue-500">
                  Contact Us
                </Link>

                {/* Dropdown for Mobile */}
                <div>
                  <button
                    onClick={toggleDropdown}
                    className="text-gray-700 hover:text-blue-500 focus:outline-none"
                  >
                    More
                  </button>
                  {isDropdownOpen && (
                    <div className="flex flex-col items-center">
                      <Link href="/link1" className="block text-gray-700 hover:text-blue-500">
                        Link 1
                      </Link>
                      <Link href="/link2" className="block text-gray-700 hover:text-blue-500">
                        Link 2
                      </Link>
                      <Link href="/link3" className="block text-gray-700 hover:text-blue-500">
                        Link 3
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/cta" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Call to Action
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
