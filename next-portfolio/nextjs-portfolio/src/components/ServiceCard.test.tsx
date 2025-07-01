import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ServiceCard } from './ServiceCard';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    pathname: '/',
  }),
}));

describe('Validating the ServiceCard component', () => {
  const mockProps = {
    key: 1,
    title: 'QA Automation Audit',
    description: 'An in-depth review of your test framework and strategies.',
    cost: '999',
  };

  beforeEach(() => {
    render(<ServiceCard  title={mockProps.title} description={mockProps.description} cost={mockProps.cost} />);
  });

  it('renders the service title', () => {
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it('renders the description', () => {
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  it('renders the cost', () => {
    expect(screen.getByText(`Starting at $${mockProps.cost}`)).toBeInTheDocument();
  });

  it('renders the TestCafe icon', () => {
    const svg = screen.getByTestId('testcafe-icon');
    expect(svg).toBeInTheDocument();
  });
});
