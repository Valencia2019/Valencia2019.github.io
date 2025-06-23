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
    
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /freelance/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
  });

  it('adds a shadow class when scrolling down', () => {
    const { container } = render(<Navbar />);

    const nav = container.querySelector('nav');
    expect(nav).not.toHaveClass('shadow-lg');

    act(() => {
        scrollTo(100);
    });
    // Give time for useEffect to run
    setTimeout(() => {
      expect(nav).toHaveClass('shadow-lg');
    }, 100);
  });

  it('removes shadow class when scrolling to top', () => {
    const { container } = render(<Navbar />);

    const nav = container.querySelector('nav');
    act(() => {
        scrollTo(100);
    });
    // Give time for useEffect to run
    setTimeout(() => {
      expect(nav).toHaveClass('shadow-lg');
    }, 100);
    act(() => {
        scrollTo(0);
    });

    // Again wait a moment for effect
    setTimeout(() => {
      expect(nav).not.toHaveClass('shadow-lg');
    }, 100);
  });
});
