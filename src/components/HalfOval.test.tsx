import { ImageProps } from 'next/image';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HalfOval } from './HalfOval';

// Mock next/image for Jest
jest.mock('next/image', () => {
  return function MockImage(props: ImageProps) {
    
    if (typeof props.src === 'string') {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={props.src} alt={props.alt || 'Test Image'} data-testid="half-oval-image" fetchPriority="high" />;
    } else {
      return null;
    }
  };
});

// Mock framer-motion to remove animation for testing
jest.mock('framer-motion', () => ({
  motion: {
    div: (props: ImageProps) => {
      return <div {...props} />;
    },
  },
}));

describe('Validating HalfOval component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders image with correct alt text', () => {

    render(
      <HalfOval
        accentColor="#8B5CF6"
        content={{ src: '/test.jpg', alt: 'Test Image' }}
      />
    );
    
    expect(screen.getByTestId('half-oval-image')).toBeInTheDocument();
    expect(screen.getByTestId('half-oval-image')).toHaveAttribute('alt', 'Test Image');
    expect(screen.getByTestId('half-oval-image')).toHaveAttribute('src', '/test.jpg');
  });

  it('renders text content when no image is provided', () => {
    render(
      <HalfOval
        accentColor="#8B5CF6"
        content={{ text: 'This is a test message' }}
      />
    );
    expect(screen.getByTestId('half-oval-text')).toBeInTheDocument();
    expect(screen.getByTestId('half-oval-text')).toHaveTextContent(/this is a test message/i);
  });

  it('does not render if no content is provided', () => {
    const { container } = render(<HalfOval accentColor="#8B5CF6" />);
    expect(container.querySelector('[data-testid="half-oval"]')).not.toBeInTheDocument();
  });
});

