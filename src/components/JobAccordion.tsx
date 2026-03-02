import { MdWorkOutline, MdWork } from 'react-icons/md';
import type { ReactNode } from 'react';

interface JobAccordionProps {
  title: string;
  meta: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function JobAccordion({ title, meta, children, defaultOpen = false }: JobAccordionProps) {
  const testId = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <details
      open={defaultOpen}
      className="group rounded-lg border border-emerald-500/45 bg-zinc-800/95 transition-all [&[open]]:bg-gradient-to-br [&[open]]:from-emerald-900/30 [&[open]]:to-fuchsia-900/20 [&[open]_.job-icon-open]:inline-block [&[open]_.job-icon-closed]:hidden"
      data-testid={`job-accordion-${testId}`}
    >
      <summary className="cursor-pointer px-4 py-3 marker:content-none">
        <div className="flex items-center gap-2">
          <MdWorkOutline className="job-icon-closed inline-block text-emerald-300" aria-hidden="true" />
          <MdWork className="job-icon-open hidden text-emerald-300" aria-hidden="true" />
          <p className="text-lg font-semibold text-white">{title}</p>
        </div>
        <p className="text-sm text-white/70">{meta}</p>
      </summary>
      <div className="px-4 pb-4 pt-1">{children}</div>
    </details>
  );
}
