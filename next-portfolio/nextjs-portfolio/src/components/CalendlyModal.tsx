'use client';

import { useState, useEffect } from 'react';

export const CalendlyModal = ({
  buttonColor = "white",
  buttonTextColor = "black",
  autoOpen = false,
  ...props
}: {
  buttonColor?: string;
  buttonTextColor?: string;
  autoOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (autoOpen) {
      setIsOpen(true);
    }
  }, [autoOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`bg-${buttonColor} text-${buttonTextColor} cursor-pointer rounded-lg px-4 py-2 font-semibold hover:bg-${buttonColor}/90 hover:border-1 border-${buttonTextColor}`}
        {...props}
      >
        Schedule a Call
      </button>

      {isOpen && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-${buttonColor}/70 backdrop-blur-sm`}>
          <div className={`bg-black rounded-2xl shadow-xl max-w-4xl w-full p-6 relative`}>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-accent text-2xl"
              aria-label="Close"
            >
              &times;
            </button>

            <div className="w-full h-[600px] mt-4">
              <iframe
                src="https://calendly.com/valencia-mcmurray/30min"
                width="100%"
                height="100%"
                data-testid="calendly-iframe"
                className="rounded-xl border-none"
                title="Calendly Scheduling"
                
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

