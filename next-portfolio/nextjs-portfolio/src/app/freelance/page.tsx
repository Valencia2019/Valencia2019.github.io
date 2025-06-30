'use client';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { HalfOval } from "@/components/HalfOval";

export default function FreelancePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="container max-w-4xl mx-auto px-6 py-24 mt-20 space-y-16 flex flex-row">
        <div className="flex-1 md:flex-initial md:w-1/3 md:pr-8 mr-8">
          <HalfOval accentColor="#14B8A6"
            content={{
              text: "I'm currently available for freelance QA consulting or dev work. Feel free to reach out via email, connect on LinkedIn, or schedule a call.",
            }}
          />
        </div>
        <div className="flex-2 md:flex-initial md:pl-8 max-w-4xl">
          <section>
            <h1 className="text-4xl font-bold mb-4">Booking My Freelance Services</h1>
            <p className="text-gray-300 text-lg">
              Here&apos;s what to expect when working with me for QA consulting or custom web development.
            </p>
          </section>

          <section className="space-y-8">
            <Step
              step="1"
              title="Send an Inquiry"
              description="Email me a brief overview of your project, what services you need, and your goals. If you're not sure yet, that's okay—this helps kick off the conversation."
              action={
                <Link
                  href="/contact"
                  className="text-teal-400 hover:underline text-sm"
                >
                  Send Inquiry
                </Link>
              }
            />

            <Step
              step="2"
              title="Schedule a Call"
              description="We'll meet to talk through your needs in more detail. You can either use my Calendly link or I'll follow up to schedule a time that works."
              action={
                <Link
                  href="/contact?schedule=true"
                  className="text-teal-400 hover:underline text-sm"
                >
                  Schedule via Calendly
                </Link>
              }
            />

            <Step
              step="3"
              title="Proposal & Timeline"
              description="I'll create a proposal outlining the recommended tools, scope of work, estimated timeline, and deliverables. You'll have a chance to review and request changes."
            />

            <Step
              step="4"
              title="Contract Agreement"
              description="We'll sign a contract to protect both parties. You can provide your own contract, or I can share mine—whichever works best for your business."
            />

            <Step
              step="5"
              title="Payment Terms"
              description="Projects typically require a 50% upfront deposit before work begins. For larger or ongoing projects, we'll set up milestone-based payments."
            />

            <Step
              step="6"
              title="Project Kickoff"
              description="Once everything is signed and your deposit is received, we'll begin the project!"
            />
          </section>

          <section className="pt-10 border-t border-white/10">
            <p className="text-gray-400">
              Ready to browse services?
            </p>
            <Link
              href="/freelance/services"
              className="text-teal-400 underline mt-2 inline-block"
            >
              View My QA & Web Development Services →
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Step({
  step,
  title,
  description,
  action,
}: {
  step: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex gap-6">
      <div className="text-teal-400 font-bold text-xl min-w-[32px]">{step}</div>
      <div>
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-gray-300 mb-2">{description}</p>
        {action && <div>{action}</div>}
      </div>
    </div>
  );
}

