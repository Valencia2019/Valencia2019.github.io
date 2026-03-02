'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-black ${shadow ? 'shadow-lg' : ''} fixed w-full z-10 top-0`} data-testid="navbar">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <video
                className="h-16 w-16 object-contain"
                data-testid="logo"
                playsInline
                autoPlay
                muted
                loop
              >
                <source src="/animated-logo.mp4" type="video/mp4" sizes='(max-width:64px) 64px, (max-width:128px) 128px' />
                <Image
                  src="/static-logo.jpg"
                  alt="static logo"
                  className="h-16 w-16"
                  width={64}
                  height={64}
                />
              </video>

          </div>
          <div className="flex-1 flex items-center justify-end">
            <div className="flex sm:space-x-2 lg:space-x-4">
              <Link href="/" className="text-white px-3 py-2 rounded-md sm:text-sm text-md lg:text-lg font-medium hover:text-gray-300 hover:underline" data-testid="home-link">
                Home
              </Link>
              <Link href="/projects" className="text-white px-3 py-2 rounded-md sm:text-sm text-md lg:text-lg font-medium hover:text-gray-300 hover:underline" data-testid="projects-link">
                Projects
              </Link>
              <Link href="/contact" className="text-white px-3 py-2 rounded-md sm:text-sm text-md lg:text-lg font-medium hover:text-gray-300 hover:underline" data-testid="contact-link">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

