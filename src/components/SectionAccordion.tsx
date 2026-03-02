import { FaRegStar, FaStar } from 'react-icons/fa';
import type { ReactNode } from 'react';

interface SectionAccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function SectionAccordion({ title, children, defaultOpen = false }: SectionAccordionProps) {
  return (
    <details
      open={defaultOpen}
      className="group rounded-lg border border-fuchsia-500/50 bg-zinc-900/95 shadow-sm transition-all [&[open]]:bg-gradient-to-br [&[open]]:from-fuchsia-900/35 [&[open]]:to-emerald-900/20 [&[open]_.section-icon-open]:inline-block [&[open]_.section-icon-closed]:hidden"
      data-testid={`section-accordion-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <summary className="flex cursor-pointer items-center gap-2 px-4 py-3 text-xl font-semibold text-white marker:content-none">
        <FaRegStar className="section-icon-closed inline-block text-fuchsia-300" aria-hidden="true" />
        <FaStar className="section-icon-open hidden text-fuchsia-300" aria-hidden="true" />
        <span>{title}</span>
      </summary>
      <div className="px-4 pb-4 pt-1 text-white/90">{children}</div>
    </details>
  );
}
