/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactPage from './page';

jest.mock('@/components/CalendlyModal', () => ({
  CalendlyModal: (props: any) => (
    <button data-testid={props['data-testid'] || 'calendly-modal'}>
      Calendly Button
    </button>
  ),
}));

jest.mock('@/components/HalfOval', () => ({
  HalfOval: ({ content }: any) => (
    <div data-testid="half-oval">
      {typeof content?.text === 'string' ? content.text : content.text}
    </div>
  ),
}));

describe('ContactPage', () => {
  beforeEach(() => {
    render(<ContactPage />);
  });

  it('renders header and instructions, hides contact info initially', () => {
    expect(screen.getByText(/Contact Me/i)).toBeInTheDocument();
    expect(screen.getByTestId('half-oval')).toHaveTextContent("Don't hesitate to reach out!");
    expect(screen.queryByTestId('email-link')).not.toBeInTheDocument();
    expect(screen.queryByTestId('linkedin-link')).not.toBeInTheDocument();
    expect(screen.queryByTestId('calendly-modal-left')).not.toBeInTheDocument(); // not shown yet
    expect(screen.queryByTestId('calendly-modal-oval')).not.toBeInTheDocument(); // not shown yet
  });

  it('reveals contact info and updates HalfOval on checkbox click', () => {
    const checkbox = screen.getByTestId('checkbox');
    fireEvent.click(checkbox);
    waitFor(() => screen.getByTestId('email-link'));

    expect(screen.getByTestId('calendly-modal-left')).toBeInTheDocument();
    expect(screen.getByTestId('email-link')).toBeInTheDocument();
    expect(screen.getByTestId('linkedin-link')).toBeInTheDocument();
    expect(screen.getByTestId('calendly-modal-oval')).toBeInTheDocument();
  });
});
