import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <main className="flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      </main>

    </div>
  );
}
