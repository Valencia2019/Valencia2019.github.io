import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HalfOval } from "@/components/HalfOval";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main  className="flex-grow">
        <h1 className="text-6xl font-bold text-center mb-12">Welcome to my Portfolio</h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full">
          <HalfOval
            accentColor="#8B5CF6"
            content={{
              src: "/profilepic1.jpeg",
              alt: "Portrait of Valencia",
            }}
          />

          <div className="max-w-xl text-white text-xl leading-relaxed text-center md:text-left">
            <p>
              Hi, I’m Valencia (V/Wolf) – a Principal QA Engineer & Test Automation Leader with 10+ years in tech.
              I specialize in architecting scalable test frameworks, driving CI/CD integration, and leading teams to deliver high-quality software.
              My expertise spans JavaScript, Cypress, and Playwright for automation, along with hands-on development of custom testing tools.
              Passionate about shift-left testing and mentoring engineers, I bridge quality and engineering through risk-driven strategies and process innovation.
              <br /><br />
              Based in the NYC metro area, I thrive on solving complex problems and collaborating across teams—though I excel in independent work too.
              Outside of tech, you’ll find me gaming, writing, or geeking out about personal growth, animals, and shared passions. Let’s connect!
              <br /><br />
              <em>(Pronouns: she/her, they/them)</em>
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 space-x-4 flex justify-center">
          <a href="/projects" className="bg-white px-4 py-2 rounded-md text-black">View Work</a>
          <a href="/resume.pdf" target="_blank" className="bg-white px-4 py-2 rounded-md text-black">View Resume</a>
          <a href="/contact" className="bg-white px-4 py-2 rounded-md text-black">Hire Me</a>
        </div>
      </main >

      <Footer />
    </div>
  );
}
