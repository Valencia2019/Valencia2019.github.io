import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { CalendlyModal } from './CalendlyModal';

describe('CalendlyModal component', () => {
  it('renders the Schedule a Call button', () => {
    render(<CalendlyModal />);
    expect(screen.getByRole('button', { name: /schedule a call/i })).toBeInTheDocument();
  });

  it('opens the modal when the button is clicked', async () => {
    render(<CalendlyModal />);

    await userEvent.click(screen.getByRole('button', { name: /schedule a call/i }));

    // Wait for the iframe to be loaded
    await waitFor(() => screen.getByTestId('calendly-iframe'));

    // Check for iframe presence
    const iframe = screen.getByTestId('calendly-iframe');
    expect(iframe).toBeInTheDocument();

    // Check that the modal container exists
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  it('closes the modal when the close button is clicked', async () => {
    render(<CalendlyModal />);

    await userEvent.click(screen.getByRole('button', { name: /schedule a call/i }));

    await waitFor(() => screen.getByTestId('calendly-iframe'));

    const closeButton = screen.getByRole('button', { name: /close/i });
    await userEvent.click(closeButton);

    await waitFor(() => screen.queryByTestId('calendly-iframe'));

    // Modal should be gone now
    expect(screen.queryByTitle('Calendly Scheduling')).not.toBeInTheDocument();
  });
});
