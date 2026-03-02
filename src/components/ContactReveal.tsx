'use client';

import { useEffect, useMemo, useState } from 'react';

const phoneChars = [55, 55, 50, 46, 56, 51, 52, 46, 49, 48, 49, 51];
const emailChars = [
  118, 97, 108, 101, 110, 99, 105, 97, 46, 109, 99, 109, 117, 114, 114, 97, 121, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109,
];
const linkedInChars = [
  104, 116, 116, 112, 115, 58, 47, 47, 108, 105, 110, 107, 101, 100, 105, 110, 46, 99, 111, 109, 47, 105, 110, 47, 118, 97, 108,
  101, 110, 99, 105, 97, 109, 99, 109, 47,
];

const decode = (chars: number[]) => String.fromCharCode(...chars);
const REVEAL_KEY = 'resume_contact_revealed';

export function ContactReveal() {
  const [revealed, setRevealed] = useState(false);

  const contact = useMemo(
    () => ({
      phone: decode(phoneChars),
      email: decode(emailChars),
      linkedIn: decode(linkedInChars),
    }),
    []
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const persisted = window.sessionStorage.getItem(REVEAL_KEY);
    if (persisted === 'true') {
      setRevealed(true);
    }
  }, []);

  const revealContact = () => {
    setRevealed(true);
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(REVEAL_KEY, 'true');
    }
  };

  if (!revealed) {
    return (
      <div className="space-y-2" data-testid="contact-redacted">
        <p className="text-white/70">New York, NY</p>
        <p className="text-white/60 tracking-wide blur-[2px] select-none">[ Phone Hidden ] [ Email Hidden ] [ LinkedIn Hidden ]</p>
        <button
          type="button"
          onClick={revealContact}
          className="inline-block rounded-md border border-fuchsia-400 px-3 py-1 text-sm text-fuchsia-200 hover:bg-fuchsia-900/30"
          data-testid="reveal-contact-button"
        >
          Reveal Contact Info
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-2" data-testid="contact-revealed">
      <p className="text-white/80">New York, NY | {contact.phone}</p>
      <p className="text-white/80">
        <a href={`mailto:${contact.email}`} className="underline decoration-fuchsia-300/80 underline-offset-2">
          {contact.email}
        </a>
      </p>
      <p className="text-white/80">
        <a href={contact.linkedIn} target="_blank" rel="noopener noreferrer" className="underline decoration-emerald-300/80 underline-offset-2">
          LinkedIn
        </a>
      </p>
    </div>
  );
}
