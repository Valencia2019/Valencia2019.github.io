export const ProjectCard = ({ title, tech, github, demo, description }: {
  title: string;
  tech: string;
  github: string;
  demo: string;
  description: string;
}) => {
  return (
    <article className="bg-black border border-accent border-opacity-10 rounded-lg transition-all hover:scale-105 hover:border-opacity-100" data-testid="project-card">
      <header className="p-6">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-sm text-white opacity-80">{tech}</p>
      </header>
      <div className="flex gap-4 p-6">
        <a
          className="flex items-center rounded-lg bg-white bg-opacity-10 px-4 py-2 text-sm font-medium text-black transition-all hover:bg-opacity-20"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
        <a
          className="flex items-center rounded-lg bg-white bg-opacity-10 px-4 py-2 text-sm font-medium text-black transition-all hover:bg-opacity-20"
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      </div>
      <div className="p-6">
        <p className="text-sm text-white opacity-80">{description}</p>
      </div>
    </article>
  );
};
