import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <main className="flex-grow">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-2">My Projects</h1>
        </div>
        <p className="flex items-center justify-center mb-6">All of the professional work I&apos;ve done can&apos;t be shared publicly for privacy reasons.
          Because of that, here are some sample projects I&apos;ve worked on to demonstrate my skills. 
          Test-focused projects use report links when available.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      </main>

    </div>
  );
}
