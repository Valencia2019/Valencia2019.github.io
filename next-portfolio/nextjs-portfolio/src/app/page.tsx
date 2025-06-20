import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {HalfOval} from "@/components/HalfOval";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-6xl font-bold">Welcome to my Portfolio</h1>
        <br />
        <span><HalfOval accentColor="#8B5CF6" content={{ photo: "/profilepic1.jpeg", photoAlt: "portrait of Valencia"}}/>
        <p className="text-xl">Hi, I’m Valencia (V/Wolf) – a Principal QA Engineer & Test Automation Leader with 10+ years in tech.
          I specialize in architecting scalable test frameworks, driving CI/CD integration, and leading teams to deliver high-quality software. My expertise spans JavaScript, Cypress, and Playwright for automation, 
          along with hands-on development of custom testing tools. Passionate about shift-left testing and mentoring engineers, I bridge quality and engineering through risk-driven strategies and process innovation.

          Based in the NYC metro area, I thrive on solving complex problems and collaborating across teams—though I excel in independent work too. Outside of tech, you’ll find me gaming, writing, or geeking out about 
          personal growth, animals, and shared passions. Let’s connect!

          <em>(Pronouns: she/her, they/them)</em>
        </p></span>
        <br />
        <div className="mt-4 space-x-4">
          <a href="/projects" className="bg-white px-4 py-2 rounded-md text-black">View Work</a>
          <a href="/resume.pdf" target="_blank" className="bg-white px-4 py-2 rounded-md text-black">View Resume</a>
          <a href="/contact" className="bg-white px-4 py-2 rounded-md text-black">Hire Me</a>
        </div>
      </div>



      <Footer />
    </div>
  );
}
