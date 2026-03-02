import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResumePage from './page';

describe('ResumePage', () => {
  it('renders resume header and pdf options', () => {
    render(<ResumePage />);
    expect(screen.getByRole('heading', { name: /Valencia McMurray/i })).toBeInTheDocument();
    expect(screen.getByTestId('download-condensed-resume-link')).toHaveAttribute('href', '/resume-condensed.pdf');
    expect(screen.getByTestId('download-full-resume-link')).toHaveAttribute('href', '/resume.pdf');
    expect(screen.getByTestId('reveal-contact-button')).toBeInTheDocument();
  });

  it('renders section accordions', () => {
    render(<ResumePage />);
    expect(screen.getByText('Summary')).toBeInTheDocument();
    expect(screen.getByText('Technical Skills')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
  });

  it('renders job accordions under experience', () => {
    render(<ResumePage />);
    expect(screen.getByText(/Groundswell/i)).toBeInTheDocument();
    expect(screen.getByText(/Aclaimant/i)).toBeInTheDocument();
    expect(screen.getByText(/Freelance/i)).toBeInTheDocument();
  });
});
