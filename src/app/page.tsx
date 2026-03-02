import { HalfOval } from "@/components/HalfOval";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow">
        <h1 className="text-6xl font-bold text-center mb-12">Welcome to my Portfolio</h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full">
          <div className="md:-mt-8 md:-ml-6">
            <HalfOval
              accentColor="#8B5CF6"
              content={{
                src: "/new-profile-photo.jpg",
                alt: "Portrait of Valencia",
              }}
            />
          </div>

          <div className="max-w-xl text-white text-xl leading-relaxed text-center md:text-left">
            <p className="mx-2 px-2">
              Hi, my name is Valencia (but I also go by Vee and/or Wolf)! I am a Principal QA Engineer with 10+ years of experience architecting automation frameworks, test infrastructure, and scalable quality systems across enterprise, startup, and regulated environments.
              I am a TypeScript/JavaScript-focused engineer with backend exposure in .NET and Java, spanning UI, API, integration, database, performance, and security validation.
              I specialize in building quality foundations in greenfield environments, embedding multi-layer validation into CI/CD pipelines, and reducing production defect leakage through release-gating and deterministic test data strategies.
              I regularly influence architectural decisions, drive cross-team quality strategy, and mentor engineers into automation-focused roles.
              <br /><br />
              <em>(Pronouns: she/her, they/them)</em>
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 space-x-4 flex justify-center">
          <a href="/projects" className="bg-white px-4 py-2 rounded-md text-black" data-testid="view-work-link">View Personal Projects</a>
          <a href="/resume" className="bg-white px-4 py-2 rounded-md text-black" data-testid="view-resume-link">View Resume</a>
          <a href="/contact" className="bg-white px-4 py-2 rounded-md text-black" data-testid="hire-me-link">Hire Me</a>
        </div>
      </main>
    </div>
  );
}
