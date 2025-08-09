import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <main className="flex-grow">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-2">My Projects</h1>
        </div>
        <p className="flex items-center justify-center mb-6">Here are some of the sample projects I&apos;ve worked on. 
          The demo links for the test projects lead to report pages.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      </main>

    </div>
  );
}
