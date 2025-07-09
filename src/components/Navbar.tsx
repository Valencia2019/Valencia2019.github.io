'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

export const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {

    const handleFocus = (event: FocusEvent) => {
      if (event.type === 'focusout' && isOpen) {
        setIsOpen(false);
    } else if(event.type === 'focusin' && !isOpen) {
      setIsOpen(true);
    }
    };

    document.getElementById('freelance-menu')?.addEventListener('focus', handleFocus);

    return () => {
      document.getElementById('freelance-menu')?.removeEventListener('focus', handleFocus);
    };
  }, [isOpen]);

  const toggleMenu = (value?: boolean) => {
    if(value !== undefined) {
      setIsOpen(value);
    }
    setIsOpen(!isOpen);
  };

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
            <div className="flex space-x-4">
              <Link href="/" className="text-white px-3 py-2 rounded-md text-md font-medium hover:text-gray-300 hover:underline" data-testid="home-link">
                <h1>Home</h1>
              </Link>
              <div className="relative inline-block"
                    tabIndex={0}
                    onBlur={(e) => {
                      // Check if focus moved outside of the dropdown container
                      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                        setIsOpen(false);
                      }
                    }}
                  >
                    <button
                      className="text-white px-3 py-2 rounded-md text-md font-medium hover:text-gray-300 hover:underline"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      id="freelance-button"
                      data-testid="freelance-button"
                      onClick={() => toggleMenu(!isOpen)}
                    >
                      <h1>
                        {isOpen ? (
                          <MdArrowDropDown className="inline ml-2" />
                        ) : (
                          <MdArrowDropUp className="inline ml-2" />
                        )}{" "}
                        Freelance
                      </h1>
                    </button>

                    {isOpen && (
                      <div
                        className="absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg z-50"
                        role="menu"
                        id="freelance-menu"
                        data-testid="freelance-menu"
                      >
                        <Link
                          href="/freelance"
                          className="block text-white px-3 py-2 rounded-md text-md font-medium hover:text-gray-300 hover:underline"
                          data-testid="freelance-link"
                        >
                          <h1>Freelance</h1>
                        </Link>
                        <Link
                          href="/freelance/services"
                          className="block text-white px-3 py-2 rounded-md text-md font-medium hover:text-gray-300 hover:underline"
                          data-testid="services-link"
                        >
                          <h1>Services</h1>
                        </Link>
                      </div>
                    )}
                  </div>
              <Link href="/projects" className="text-white px-3 py-2 rounded-md text-md font-medium hover:text-gray-300 hover:underline" data-testid="projects-link">
                <h1>Projects</h1>
              </Link>
              <Link href="/contact" className="text-white px-3 py-2 rounded-md text-md font-medium hover:text-gray-300 hover:underline" data-testid="contact-link">
                <h1>Contact</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

