import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ContactReveal } from './ContactReveal';

describe('ContactReveal', () => {
  beforeEach(() => {
    window.sessionStorage.clear();
  });

  it('does not render personal contact values before reveal', () => {
    render(<ContactReveal />);

    expect(screen.getByTestId('contact-redacted')).toBeInTheDocument();
    expect(screen.queryByText(/772\.834\.1013/)).not.toBeInTheDocument();
    expect(screen.queryByText(/valencia\.mcmurray@gmail\.com/)).not.toBeInTheDocument();
    expect(screen.queryByText(/linkedin\.com\/in\/valenciamcm/i)).not.toBeInTheDocument();
  });

  it('reveals personal contact values after click', async () => {
    const user = userEvent.setup();
    render(<ContactReveal />);

    await user.click(screen.getByTestId('reveal-contact-button'));

    expect(screen.getByTestId('contact-revealed')).toBeInTheDocument();
    expect(screen.getByText(/772\.834\.1013/)).toBeInTheDocument();
    expect(screen.getByText(/valencia\.mcmurray@gmail\.com/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', expect.stringContaining('linkedin.com/in/valenciamcm/'));
  });

  it('starts revealed when session value exists', () => {
    window.sessionStorage.setItem('resume_contact_revealed', 'true');
    render(<ContactReveal />);

    expect(screen.getByTestId('contact-revealed')).toBeInTheDocument();
    expect(screen.getByText(/772\.834\.1013/)).toBeInTheDocument();
  });
});
