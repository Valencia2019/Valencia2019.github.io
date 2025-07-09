'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CalendlyModal } from "@/components/CalendlyModal";
import { HalfOval } from "@/components/HalfOval";

const MYEMAIL = "valencia.mcmurray@gmail.com";
const LINKEDINLINK = "https://linkedin.com/in/valenciamcm";

export default function ContactPage() {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [openCalendly, setOpenCalendly] = useState(false);

  // Instead of useSearchParams (not static-compatible)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#schedule') {
      setShowContactInfo(true);
      setOpenCalendly(true);
    }
  }, []);

  const toggleContactInfo = () => setShowContactInfo(!showContactInfo);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="min-h-screen flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row items-start justify-center gap-16 max-w-6xl">

          {/* Left Column */}
          <div className="flex-1 space-y-6 max-w-xl">
            <h1 className="text-4xl font-bold text-white">Contact Me</h1>
            <p className="text-gray-400">
              I&apos;m currently available for freelance QA consulting or dev work. Reach out via email, LinkedIn, or schedule a call.
            </p>

            <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-lg text-sm text-white space-y-4">
              <h2 className="text-lg font-semibold text-lime-400">📋 Before You Reach Out</h2>
              <p>To help us make the most of our time, please include the following in your message or be ready to discuss them during our call:</p>
              <ul className="list-disc list-inside space-y-1 text-white/90">
                <li>Your name, company, and role</li>
                <li>A short description of your project or QA needs</li>
                <li>What stage your product is in (MVP, scaling, maintenance, etc.)</li>
                <li>Any current blockers or pain points in your QA process</li>
                <li>Your timeline and budget expectations</li>
              </ul>
              <p className="text-white/80 italic">
                For QA consultations, please come prepared with any existing documentation or testing frameworks you&apos;re using. Screenshots or demos are helpful!
              </p>
              <label htmlFor="checkbox" className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={showContactInfo}
                  onChange={toggleContactInfo}
                  data-testid="checkbox"
                />
                <span className="text-white/80">I&apos;ve read and understand the above.</span>
              </label>
            </div>

            {showContactInfo && (
              <div id="contact-info" className="mt-8 block">
                <div className="pt-6">
                  <CalendlyModal
                    buttonColor="white"
                    buttonTextColor="black"
                    data-testid="calendly-modal-left"
                    autoOpen={openCalendly}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="flex-1 flex justify-center items-start">
            <HalfOval
              accentColor="oklch(89.7% 0.196 126.665)"
              content={{
                text: showContactInfo ? (
                  <div className="text-sm space-y-2 text-black text-center">
                    <p>
                      <Link
                        href={`mailto:${MYEMAIL}`}
                        className="text-teal-500 hover:underline block"
                        data-testid="email-link"
                      >
                        {MYEMAIL}
                      </Link>
                    </p>
                    <p>
                      <Link
                        href={LINKEDINLINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-500 hover:underline block"
                        data-testid="linkedin-link"
                      >
                        LinkedIn Profile
                      </Link>
                    </p>
                    <div className="pt-6">
                      <CalendlyModal
                        buttonColor="black"
                        buttonTextColor="white"
                        data-testid="calendly-modal-oval"
                      />
                    </div>
                  </div>
                ) : (
                  "Don't hesitate to reach out!"
                ),
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
