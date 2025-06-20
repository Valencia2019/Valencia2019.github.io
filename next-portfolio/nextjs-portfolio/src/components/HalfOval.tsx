'use client';

import Image from 'next/image';

interface HalfOvalProps {
  accentColor: string;
  content?: {
    text?: string;
    photo?: string;
    photoAlt?: string;
  };
}

export const HalfOval: React.FC<HalfOvalProps> = ({ accentColor, content }) => {
  return (
    <div
      className="relative w-[60vw] max-w-md h-[80vw] max-h-64 rounded-t-full border-4 overflow-hidden mx-auto"
      style={{ borderColor: accentColor }}
    >
      {content?.photo && content?.photoAlt && (
        <Image
          src={content.photo}
          alt={content.photoAlt}
          fill
          style={{ objectFit: 'cover' }}
        />
      )}

      {content?.text && (
        <div className="w-full h-full flex items-center justify-center bg-white">
          <p className="text-center text-black text-lg px-4">{content.text}</p>
        </div>
      )}
    </div>
  );
};
