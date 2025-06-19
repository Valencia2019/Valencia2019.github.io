'use client';
import Link from 'next/link';
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
    <nav className={`bg-black ${shadow ? 'shadow-lg' : ''} fixed w-full z-10 top-0`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white text-lg font-bold">Valencia McMurray</span>
          </div>
          <div className="flex-1 flex items-center justify-end">
            <div className="flex space-x-4">
              <Link href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:underline">
                Home
              </Link>
              <Link href="/contact" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:underline">
                Contact
              </Link>
              <Link href="/freelance" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:underline">
                Freelance
              </Link>
              <Link href="/projects" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:underline">
                Projects
              </Link>
              <Link href="/resume" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:underline">
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

