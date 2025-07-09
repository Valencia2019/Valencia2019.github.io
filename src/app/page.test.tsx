import { render, screen } from '@testing-library/react';
import Home from './page';
import '@testing-library/jest-dom';

jest.mock('@/components/HalfOval', () => ({
  HalfOval: () => <div data-testid="half-oval" />,
}));

describe('Home Page', () => {
  it('renders main heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /welcome to my portfolio/i })).toBeInTheDocument();
  });

  it('renders the CTA buttons', () => {
    render(<Home />);
    expect(screen.getByText(/view work/i)).toBeInTheDocument();
    expect(screen.getByText(/view resume/i)).toBeInTheDocument();
    expect(screen.getByText(/hire me/i)).toBeInTheDocument();
  });

  it('renders HalfOval components', () => {
    render(<Home />);
    expect(screen.getByTestId('half-oval')).toBeInTheDocument();
  });

  it('includes bio content', () => {
    render(<Home />);
    expect(screen.getByText(/valencia/i)).toBeInTheDocument();
    expect(screen.getByText(/principal qa engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/nyc metro/i)).toBeInTheDocument();
  });
});
