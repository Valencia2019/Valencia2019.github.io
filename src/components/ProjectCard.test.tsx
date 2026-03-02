import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard component', () => {
  const mockProps = {
    title: 'Test Project',
    tech: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/valencia/test-project',
    demo: 'https://test-project.vercel.app',
    demoType: 'live' as const,
    description: 'A demo project for testing purposes',
    imageSrc: ''
  };

  it('renders the project title', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it('renders the tech stack', () => {
    render(<ProjectCard {...mockProps} />);
    mockProps.tech.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('renders the description', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  it('has a GitHub link with correct href', () => {
    render(<ProjectCard {...mockProps} />);
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', mockProps.github);
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has a Live Demo link with correct href', () => {
    render(<ProjectCard {...mockProps} />);
    const demoLink = screen.getByRole('link', { name: /live demo/i });
    expect(demoLink).toBeInTheDocument();
    expect(demoLink).toHaveAttribute('href', mockProps.demo);
    expect(demoLink).toHaveAttribute('target', '_blank');
    expect(demoLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders disabled link labels when links are missing', () => {
    render(
      <ProjectCard
        {...mockProps}
        github=""
        demo=""
        demoType="report"
      />
    );

    expect(screen.queryByRole('link', { name: /github/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /view report/i })).not.toBeInTheDocument();
    expect(screen.getByText('GitHub')).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByText('View Report')).toHaveAttribute('aria-disabled', 'true');
  });
});
