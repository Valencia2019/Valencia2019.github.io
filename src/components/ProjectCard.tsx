import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '@/data/projects';

type ProjectCardProps = Project;

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, tech, github, demo, description, imageSrc, demoType = 'live' }) => {
  //turn project title into dyanmic test id part
  const testId = title.replace(/\s+/g, '-').toLowerCase();
  const demoLabel = demoType === 'report' ? 'View Report' : 'Live Demo';
  const hasGithubLink = Boolean(github);
  const hasDemoLink = Boolean(demo);

  return (
    <article className="sm:w-sm md:w-md w-1/2 bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden shadow-md transition-all hover:scale-[1.02]" data-testid={`project-card-${testId}`}  >
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={imageSrc || '/next.svg'}
          alt={`${title} thumbnail`}
          fill
          className="object-cover"
          data-testid={`project-card-image-${testId}`}
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 text-xs text-white/60 pt-2">
          {tech.map((tag, index) => (
            <span
              key={index}
              className="bg-white/10 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))
          }
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between items-center px-6 pb-6 mt-auto">
        {hasGithubLink ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white flex items-center gap-2"
          >
            <FaGithub />
            GitHub
          </a>
        ) : (
          <span
            aria-disabled="true"
            className="text-zinc-500 cursor-not-allowed flex items-center gap-2"
          >
            <FaGithub />
            GitHub
          </span>
        )}
        {hasDemoLink ? (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white flex items-center gap-2"
          >
            <FaExternalLinkAlt />
            {demoLabel}
          </a>
        ) : (
          <span
            aria-disabled="true"
            className="text-zinc-500 cursor-not-allowed flex items-center gap-2"
          >
            <FaExternalLinkAlt />
            {demoLabel}
          </span>
        )}
      </div>
    </article>
  );
};
