import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CalendlyModal } from "@/components/CalendlyModal";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Valencia McMurray',
  description: 'Reach out to collaborate or schedule a consulting session.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-16 space-y-12 mt-20">
      <Navbar />
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-white">Contact Me</h1>
        <p className="text-gray-400">
          I'm currently available for freelance QA consulting or dev work.
          Feel free to reach out via email, connect on LinkedIn, or schedule a call.
        </p>

        <div className="flex flex-col items-center space-y-4 text-lg">
          <a
            href="mailto:valencia.mcmurray@gmail.com"
            className="text-accent hover:underline transition"
          >
            valencia.mcmurray@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/valenciamcm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline transition"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>

      <div className="w-full max-w-3xl border-t border-white/10 pt-12 flex justify-center">
        <CalendlyModal />
      </div>

      <Footer />
    </main>
  );
}
