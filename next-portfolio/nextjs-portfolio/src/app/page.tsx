import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-6xl font-bold">Welcome to my Portfolio</h1>
        <h2 className="text-2xl">Principal QA Engineer</h2>
        <p className="text-xl">Highly detail-oriented QA Engineer with experience in Cypress.io, Playwright, and Pytest.</p>
        <div className="mt-4 space-x-4">
          <a href="/projects" className="bg-black px-4 py-2 rounded-md text-white">View Work</a>
          <a href="/contact" className="bg-black px-4 py-2 rounded-md text-white">Hire Me</a>
        </div>
      </div>



      <Footer />
    </div>
  );
}
