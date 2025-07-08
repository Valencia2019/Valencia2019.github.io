import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard component', () => {
  const mockProps = {
    title: 'Test Project',
    tech: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/valencia/test-project',
    demo: 'https://test-project.vercel.app',
    description: 'A demo project for testing purposes',
    imageSrc: ''
  };

  beforeEach(() => {
    render(<ProjectCard {...mockProps} />);
  });

  it('renders the project title', () => {
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it('renders the tech stack', () => {
    mockProps.tech.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('renders the description', () => {
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  it('has a GitHub link with correct href', () => {
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', mockProps.github);
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has a Live Demo link with correct href', () => {
    const demoLink = screen.getByRole('link', { name: /live demo/i });
    expect(demoLink).toBeInTheDocument();
    expect(demoLink).toHaveAttribute('href', mockProps.demo);
    expect(demoLink).toHaveAttribute('target', '_blank');
    expect(demoLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
