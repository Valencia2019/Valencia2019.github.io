import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from './Footer';

describe('Footer component', () => {
  it('renders copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/Valencia McMurray/i)).toBeInTheDocument();
  });

  it('renders GitHub icon with link', () => {
    render(<Footer />);
    const githubLink = screen.getByTestId('footer-github');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', expect.stringContaining('github.com'));
  });

  it('renders LinkedIn icon with link', () => {
    render(<Footer />);
    const linkedinLink = screen.getByTestId('footer-linkedin');
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
  });
});
