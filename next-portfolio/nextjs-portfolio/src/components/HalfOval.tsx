'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface HalfOvalProps {
  accentColor: string;
  content?: {
    text?: React.ReactNode;
    src?: string;
    alt?: string;
  };
}

export const HalfOval: React.FC<HalfOvalProps> = ({ accentColor, content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative h-[30vw] max-h-2xl w-[300px] rounded-[100px_100px_0_0] border-2 overflow-hidden mx-auto"
      style={{ borderColor: accentColor }}
    >
      {content?.src && content?.alt && (
        <Image
          src={content.src}
          alt={content.alt}
          data-testid="half-oval-image"
          fill
          style={{ objectFit: 'cover' }}
        />
      )}

      {content?.text && (
        <div className="w-full h-full flex items-center justify-center bg-white" data-testid="half-oval-text">
          <p className="text-center text-black text-lg px-4">{content.text}</p>
        </div>
      )}
    </motion.div>
  );
};
