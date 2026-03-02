import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { JobAccordion } from './JobAccordion';

describe('JobAccordion', () => {
  it('renders title, meta, and children', () => {
    render(
      <JobAccordion title="Groundswell Principal QA Engineer" meta="Nov 2021 - Present">
        <p>Built a scalable quality program.</p>
      </JobAccordion>
    );

    expect(screen.getByText('Groundswell Principal QA Engineer')).toBeInTheDocument();
    expect(screen.getByText('Nov 2021 - Present')).toBeInTheDocument();
    expect(screen.getByText('Built a scalable quality program.')).toBeInTheDocument();
  });

  it('renders as closed by default', () => {
    render(
      <JobAccordion title="Aclaimant QA Engineer" meta="2018 - 2023">
        <p>Job content</p>
      </JobAccordion>
    );

    expect(screen.getByTestId('job-accordion-aclaimant-qa-engineer')).not.toHaveAttribute('open');
  });

  it('renders as open when defaultOpen is true', () => {
    render(
      <JobAccordion title="Groundswell Principal QA Engineer" meta="Nov 2021 - Present" defaultOpen>
        <p>Job content</p>
      </JobAccordion>
    );

    expect(screen.getByTestId('job-accordion-groundswell-principal-qa-engineer')).toHaveAttribute('open');
  });
});
