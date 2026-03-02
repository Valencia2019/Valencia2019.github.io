import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navbar } from './Navbar';
import { act } from '@testing-library/react';

// Simulate scroll events
const scrollTo = (y: number) => {
  Object.defineProperty(window, 'scrollY', {
    writable: true,
    configurable: true,
    value: y,
  });
  window.dispatchEvent(new Event('scroll'));
};

describe('Validating the Navbar component', () => {
  it('renders the logo video and fallback image', () => {
    render(<Navbar />);

    // Check the video exists
    const video = screen.getByTestId('logo');
    expect(video).toBeInTheDocument();

    // Check the fallback image is rendered inside
    const img = screen.getByAltText(/logo/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', expect.stringContaining('static-logo.jpg'));
  });

  it('renders all nav links', () => {
    render(<Navbar />);

    expect(screen.getByTestId('home-link')).toBeInTheDocument();
    expect(screen.getByTestId('contact-link')).toBeInTheDocument();
    expect(screen.getByTestId('projects-link')).toBeInTheDocument();
    expect(screen.getByTestId('resume-link')).toBeInTheDocument();
    expect(screen.queryByTestId('freelance-button')).not.toBeInTheDocument();
    expect(screen.queryByTestId('freelance-menu')).not.toBeInTheDocument();
    expect(screen.queryByTestId('freelance-link')).not.toBeInTheDocument();
    expect(screen.queryByTestId('services-link')).not.toBeInTheDocument();
  });

  it('adds a shadow class when scrolling down', () => {
    const { container } = render(<Navbar />);

    const nav = container.querySelector('nav');
    expect(nav).not.toHaveClass('shadow-lg');

    act(() => {
      scrollTo(100);
    });
    expect(nav).toHaveClass('shadow-lg');
  });

  it('removes shadow class when scrolling to top', () => {
    const { container } = render(<Navbar />);

    const nav = container.querySelector('nav');
    act(() => {
      scrollTo(100);
    });
    expect(nav).toHaveClass('shadow-lg');

    act(() => {
      scrollTo(0);
    });
    expect(nav).not.toHaveClass('shadow-lg');
  });
});
