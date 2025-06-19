import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Resume() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <iframe
          src="../../../public/resume.pdf"
          className="w-full h-[100vh]"
          title="Valencia McMurry Resume"
        />
      </div>
      <Footer />
    </>
  );
}
