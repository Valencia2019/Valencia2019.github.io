import { technicalSkills, experiences } from "@/data/resume";
import { SectionAccordion } from "@/components/SectionAccordion";
import { JobAccordion } from "@/components/JobAccordion";
import { ContactReveal } from "@/components/ContactReveal";

export default function ResumePage() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      <main className="max-w-5xl mx-auto space-y-6">
        <section className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-white">Valencia McMurray</h1>
          <ContactReveal />
          <div className="mt-2">
            <p className="text-white/70 text-sm">Choose resume version:</p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
              <a
                href="/resume-condensed.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white px-4 py-2 rounded-md text-black"
                data-testid="download-condensed-resume-link"
              >
                View Condensed PDF (Default)
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white/50 px-4 py-2 rounded-md text-white hover:bg-white/10"
                data-testid="download-full-resume-link"
              >
                View Full PDF
              </a>
            </div>
          </div>
        </section>

        <SectionAccordion title="Summary" defaultOpen>
          <p>
            Principal QA Engineer / SDET with 10+ years of experience architecting automation frameworks, test infrastructure, and scalable quality systems across enterprise, startup, and regulated environments. Strong TypeScript/JavaScript engineer with backend exposure in .NET and Java, spanning UI, API, integration, database, performance, and security validation.
          </p>
          <p className="mt-3">
            Known for establishing quality foundations in greenfield environments, embedding multi-layer validation into CI/CD pipelines, and reducing production defect leakage through release-gating and deterministic test data strategies. Experienced in cross-organizational influence, architectural decision-making, and mentoring engineers into automation-focused roles.
          </p>
        </SectionAccordion>

        <SectionAccordion title="Technical Skills">
          <div className="space-y-3 text-sm md:text-base">
            <p><span className="font-semibold text-white">Programming:</span> {technicalSkills.programming.join(', ')}</p>
            <p><span className="font-semibold text-white">Automation & Testing:</span> {technicalSkills.automation.join(', ')}</p>
            <p><span className="font-semibold text-white">Testing Domains:</span> {technicalSkills.domains.join(', ')}</p>
            <p><span className="font-semibold text-white">Development:</span> {technicalSkills.development.join(', ')}</p>
            <p><span className="font-semibold text-white">DevOps & CI/CD:</span> {technicalSkills.devops.join(', ')}</p>
            <p><span className="font-semibold text-white">Architecture & Practices:</span> {technicalSkills.architecture.join(', ')}</p>
          </div>
        </SectionAccordion>

        <SectionAccordion title="Experience">
          <div className="space-y-4">
            {experiences.map((job, index) => (
              <JobAccordion key={job.role} title={job.role} meta={job.meta} defaultOpen={index === 0}>
                {'groups' in job && job.groups ? (
                  <div className="space-y-4">
                    {job.groups.map((group) => (
                      <div key={group.title}>
                        <p className="font-semibold text-white mb-2">{group.title}</p>
                        <ul className="list-disc ml-5 space-y-1 text-white/90">
                          {group.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="list-disc ml-5 space-y-1 text-white/90">
                    {job.bullets?.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </JobAccordion>
            ))}
          </div>
        </SectionAccordion>

        <SectionAccordion title="Education">
          <p className="font-semibold text-white">Augsburg College - B.A. Computer Science</p>
          <p className="text-white/80">Minneapolis, MN</p>
        </SectionAccordion>
      </main>
    </div>
  );
}
