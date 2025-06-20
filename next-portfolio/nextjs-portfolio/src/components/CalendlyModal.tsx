'use client';

import { useState } from 'react';

export const CalendlyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-2 border border-accent text-white hover:bg-white hover:text-black transition-all rounded-xl"
      >
        Schedule a Call
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-black rounded-2xl shadow-xl max-w-4xl w-full p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-accent text-2xl"
              aria-label="Close"
            >
              &times;
            </button>

            <div className="w-full h-[600px] mt-4">
              <iframe
                src="https://calendly.com/yourusername"
                width="100%"
                height="100%"
                className="rounded-xl border-none"
                title="Calendly Scheduling"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
