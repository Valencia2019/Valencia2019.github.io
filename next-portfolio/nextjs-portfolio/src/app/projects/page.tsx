import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div>
      <Navbar />
      
      <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-16 space-y-12 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      </main>


    <Footer />
    </div>
  );
}
