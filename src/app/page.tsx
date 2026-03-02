import { HalfOval } from "@/components/HalfOval";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow">
        <h1 className="text-6xl font-bold text-center mb-12">Welcome to my Portfolio</h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full">
          <HalfOval
            accentColor="#8B5CF6"
            content={{
              src: "/new-profile-photo.jpg",
              alt: "Portrait of Valencia",
            }}
          />

          <div className="max-w-xl text-white text-xl leading-relaxed text-center md:text-left">
            <p>
              Hi, my name is Valencia (but I also go by Vee and/or Wolf)! I am a Principal QA Engineer with over 10 years of professional experience working in tech.
              I specialize in architecting scalable test frameworks, driving CI/CD integration, and leading QA teams to deliver high-quality software.
              My expertise spans JavaScript frameworks, like Cypress and Playwright, for automation, along with hands-on development of custom testing tools.
              I am passionate about shift-left testing--which to me means asking questions early and often--
              and mentoring engineers.
              On my current project, I am working with xUnit, bUnit, Playwright, .NET Core, and Azure tools for comprehensive unit, integration, and end-to-end testing.
              <br /><br />
              Based in the NYC metro area, I work remotely, but I also love meeting people and working in person. I thrive on solving complex problems and collaborating across teams - though I excel in independent work too.
              When I&apos;m not on the clock, you&apos;ll find me gaming, exploring the city, or spending time with my family. Let&apos;s connect!
              <br /><br />
              <em>(Pronouns: she/her, they/them)</em>
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 space-x-4 flex justify-center">
          <a href="/projects" className="bg-white px-4 py-2 rounded-md text-black" data-testid="view-work-link">View Work</a>
          <a href="/resume.pdf" target="_blank" className="bg-white px-4 py-2 rounded-md text-black" data-testid="view-resume-link">View Resume</a>
          <a href="/contact" className="bg-white px-4 py-2 rounded-md text-black" data-testid="hire-me-link">Hire Me</a>
        </div>
      </main>
    </div>
  );
}
