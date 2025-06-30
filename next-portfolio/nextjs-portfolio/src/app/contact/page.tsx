'use client';
import React, { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CalendlyModal } from "@/components/CalendlyModal";
import { HalfOval } from "@/components/HalfOval";
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';


const MYEMAIL = "valencia.mcmurray@gmail.com";
const LINKEDINLINK = "https://linkedin.com/in/valenciamcm";

export default function ContactPage() {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const searchParams = useSearchParams();
  const shouldSchedule = searchParams?.get('schedule') === 'true';
  const [openCalendly, setOpenCalendly] = useState(false);

  useEffect(() => {
    if (shouldSchedule) {
      setOpenCalendly(true);
      setShowContactInfo(true);
    }
  }, [shouldSchedule]);

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };


  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-16 space-y-12 mt-20">
      <div className="w-full flex flex-col md:flex-row items-start justify-center gap-16 max-w-6xl">

        {/* Left Column - Text and Links */}
        <div className="flex-1 space-y-6 max-w-xl">
          <h1 className="text-4xl font-bold text-white">Contact Me</h1>
          <p className="text-gray-400">
            {"I'm currently available for freelance QA consulting or dev work. Feel free to reach out via email, connect on LinkedIn, or schedule a call."}
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
                  {"For QA consultations, please come prepared with any existing documentation or testing frameworks you're using. Screenshots or demos are helpful!"}
                </p>
                <label htmlFor="checkbox" className="flex items-center space-x-2">
                  <input type="checkbox" id="checkbox" checked={showContactInfo} onChange={toggleContactInfo} data-testid="checkbox"/>
                  <span className="text-white/80">
                    {"I've read and aunderstand the above."}
                  </span>
                </label>
              </div>

          <div id="contact-info" className={`mt-8 ${showContactInfo ? 'block' : 'hidden'}`}>

          <div className="pt-6">
            <CalendlyModal buttonColor="white" buttonTextColor="black" data-testid="calendly-modal-left" autoOpen={openCalendly} />
          </div>
          </div>
        </div>

        {/* Right Column - Half Oval */}
        <div className="flex-1 flex justify-center items-start">
          <HalfOval accentColor="oklch(89.7% 0.196 126.665)"
              content={{
                text: showContactInfo ? (
                  <div className="text-sm space-y-2 text-black text-center">
                    <p>
                      <a
                        href={`mailto:${MYEMAIL}`}
                        className="text-teal-500 hover:underline block"
                        data-testid="email-link"
                      >
                        {MYEMAIL}
                      </a>
                    </p>
                    <p>
                      <a
                        href={LINKEDINLINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-500 hover:underline block"
                        data-testid="linkedin-link"
                      >
                        LinkedIn Profile
                      </a>
                    </p>
                    <div className="pt-6">
                      <CalendlyModal buttonColor="black" buttonTextColor="white" data-testid="calendly-modal-oval" />
                    </div>
                  </div>
                ) : (
                  "Don’t hesitate to reach out!"
                ),
              }}
            />
        </div>
      </div>
    </main>
    <Footer />
    </div>
  );
}
