import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SectionAccordion } from './SectionAccordion';

describe('SectionAccordion', () => {
  it('renders section title and content', () => {
    render(
      <SectionAccordion title="Summary">
        <p>Section content</p>
      </SectionAccordion>
    );

    expect(screen.getByText('Summary')).toBeInTheDocument();
    expect(screen.getByText('Section content')).toBeInTheDocument();
  });

  it('applies open state when defaultOpen is true', () => {
    render(
      <SectionAccordion title="Experience" defaultOpen>
        <p>Experience content</p>
      </SectionAccordion>
    );

    expect(screen.getByTestId('section-accordion-experience')).toHaveAttribute('open');
  });
});

