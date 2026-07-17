import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import SmartImage from "@/components/SmartImage";
import ProjectAccordion from "@/components/ProjectAccordion";
import {
  ArrowDownIcon,
  DownloadIcon,
  StarIcon,
  CertificateIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/Icons";
import { profile, about, contact } from "@/lib/content";
import {
  getExperience,
  getPmProjects,
  getAiProjects,
  getCertifications,
} from "@/lib/data";

// Re-fetch CMS content from Supabase every 5 minutes (ISR), so edits in the
// database appear without a redeploy. Falls back to seed content when unset.
export const revalidate = 300;

export default async function Home() {
  const [experience, pmProjects, aiProjects, certifications] = await Promise.all([
    getExperience(),
    getPmProjects(),
    getAiProjects(),
    getCertifications(),
  ]);

  return (
    <>
      <Navbar />
      <main id="top">
        {/* ---------------------------------------------------------------- */}
        {/* HERO */}
        {/* ---------------------------------------------------------------- */}
        <section className="relative overflow-hidden">
          {/* soft organic shapes behind hero, very low opacity */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-sage/10 blur-3xl" />
            <div className="absolute -left-28 top-40 h-80 w-80 rounded-full bg-clay/10 blur-3xl" />
            <LeafSilhouette className="absolute right-[-3rem] top-24 h-72 w-72 text-sage/[0.07]" />
          </div>

          <div className="section-shell relative flex flex-col items-center gap-10 pb-16 pt-16 text-center sm:pt-20 md:flex-row md:items-center md:gap-14 md:pb-24 md:pt-24 md:text-left">
            <Reveal className="shrink-0" as="div">
              <div className="relative mx-auto h-52 w-52 sm:h-60 sm:w-60 md:h-72 md:w-72">
                <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-sage/15" />
                <SmartImage
                  src={profile.headshotUrl}
                  fallback="/placeholder-headshot.svg"
                  alt={`${profile.name}, portrait`}
                  className="relative h-full w-full rounded-[2rem] object-cover shadow-paper"
                />
              </div>
            </Reveal>

            <Reveal className="flex-1" as="div" delay={120}>
              <p className="eyebrow mb-4">Product Management · AI · Security</p>
              <h1 className="font-serif text-4xl leading-[1.08] text-olive sm:text-5xl md:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-4 font-serif text-lg italic text-sage sm:text-xl md:text-2xl">
                {profile.tagline}
              </p>
              <p className="mx-auto mt-6 max-w-xl text-[1.02rem] text-charcoal/75 md:mx-0">
                {profile.intro}
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start">
                <a href="#projects" className="btn-primary w-full sm:w-auto">
                  View Projects
                  <ArrowDownIcon />
                </a>
                <a
                  href={profile.resumeUrl}
                  download
                  className="btn-secondary w-full sm:w-auto"
                >
                  Download Resume
                  <DownloadIcon />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* ABOUT */}
        {/* ---------------------------------------------------------------- */}
        <section id="about" className="scroll-mt-20 py-20 md:py-28">
          <div className="section-shell max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-4">About</p>
              <div className="space-y-5 text-[1.05rem] text-charcoal/80">
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <blockquote className="mt-10 border-l-2 border-sage pl-6 font-serif text-xl italic leading-snug text-sage sm:text-2xl">
                “{about.pullQuote}”
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* EXPERIENCE */}
        {/* ---------------------------------------------------------------- */}
        <section id="experience" className="scroll-mt-20 bg-paper/60 py-20 md:py-28">
          <div className="section-shell max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-4">Experience</p>
              <h2 className="font-serif text-3xl text-olive sm:text-4xl">Where I&apos;ve worked</h2>
            </Reveal>

            {experience.map((job, i) => (
              <Reveal key={i} delay={120}>
                <article className="mt-8 rounded-card border border-charcoal/5 bg-cream p-6 shadow-paper sm:p-8">
                  <div className="flex h-12 items-center">
                    <SmartImage
                      src={job.logoUrl}
                      fallback="/placeholder-logo.svg"
                      alt={job.logoAlt}
                      className="h-11 w-auto object-contain"
                    />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl text-olive">{job.title}</h3>
                  <p className="mt-1 text-sm font-medium text-charcoal/60">
                    {job.company} &nbsp;|&nbsp; {job.location} &nbsp;|&nbsp; {job.period}
                  </p>

                  <ul className="mt-6 space-y-4">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-sage"
                        />
                        <p className="text-[0.975rem] text-charcoal/80">
                          {b.text}
                          {b.highlight && (
                            <span className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-clay-soft px-3 py-1 align-middle text-xs font-semibold text-[#9C6B44]">
                              <StarIcon className="h-3.5 w-3.5" />
                              Pinnacle Award
                            </span>
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* PM PROJECTS */}
        {/* ---------------------------------------------------------------- */}
        <section id="projects" className="scroll-mt-20 py-20 md:py-28">
          <div className="section-shell">
            <Reveal className="max-w-3xl">
              <p className="eyebrow mb-4">Case Studies</p>
              <h2 className="font-serif text-3xl text-olive sm:text-4xl">
                Product Management Case Studies
              </h2>
              <p className="mt-4 text-[1.02rem] text-charcoal/75">
                Selected case studies from my product management coursework and practice, applying
                user research, prioritization frameworks, and business-outcome thinking.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pmProjects.map((project, i) => (
                <Reveal key={project.slug} delay={i * 90}>
                  <ProjectAccordion project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* AI PROJECTS */}
        {/* ---------------------------------------------------------------- */}
        <section id="ai-projects" className="scroll-mt-20 bg-paper/60 py-20 md:py-28">
          <div className="section-shell">
            <Reveal className="max-w-3xl">
              <p className="eyebrow mb-4">Building with AI</p>
              <h2 className="font-serif text-3xl text-olive sm:text-4xl">AI Projects</h2>
              <p className="mt-4 text-[1.02rem] text-charcoal/75">
                Exploring how AI can remove friction from evaluation and decision-making workflows.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {aiProjects.map((project, i) => (
                <Reveal key={project.slug} delay={i * 90}>
                  <article className="flex h-full flex-col rounded-card border border-charcoal/5 bg-cream p-6 shadow-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-paper-lift sm:p-7">
                    <h3 className="font-serif text-xl text-olive sm:text-2xl">{project.name}</h3>
                    <p className="mt-3 text-[0.975rem] text-charcoal/75">{project.description}</p>
                    <p className="mt-4 text-sm text-charcoal/60">
                      <span className="font-semibold text-clay">Tech stack:</span>{" "}
                      {project.techStack}
                    </p>
                    <div className="mt-6 pt-1">
                      <a href={`#case-${project.slug}`} className="btn-secondary">
                        View Project
                        <ArrowDownIcon />
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* In-page case-study detail blocks */}
            <div className="mt-14 space-y-8">
              {aiProjects.map((project) => (
                <Reveal key={project.slug} id={`case-${project.slug}`} className="scroll-mt-24">
                  <article className="rounded-card border border-sage/20 bg-cream p-6 shadow-paper sm:p-8">
                    <p className="eyebrow mb-3">Case Study</p>
                    <h3 className="font-serif text-2xl text-olive">{project.name}</h3>
                    <p className="mt-4 text-[1rem] leading-relaxed text-charcoal/80">
                      {project.caseStudy}
                    </p>
                    <p className="mt-5 text-sm text-charcoal/60">
                      <span className="font-semibold text-clay">Tech stack:</span>{" "}
                      {project.techStack}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* CERTIFICATIONS */}
        {/* ---------------------------------------------------------------- */}
        <section id="certifications" className="scroll-mt-20 py-20 md:py-28">
          <div className="section-shell max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-4">Certifications</p>
              <h2 className="font-serif text-3xl text-olive sm:text-4xl">Continued learning</h2>
            </Reveal>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {certifications.map((cert, i) => (
                <Reveal key={i} delay={i * 90}>
                  <article className="flex items-start gap-4 rounded-card border border-charcoal/5 bg-paper p-6 shadow-paper">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage">
                      <CertificateIcon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg text-olive">{cert.title}</h3>
                      <p className="mt-1 text-sm font-medium text-charcoal/70">
                        {cert.issuer} · {cert.date}
                      </p>
                      <p className="mt-1 text-sm text-charcoal/55">{cert.issuedBy}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* CONTACT */}
        {/* ---------------------------------------------------------------- */}
        <section id="contact" className="scroll-mt-20 bg-olive py-20 text-cream md:py-28">
          <div className="section-shell max-w-3xl text-center">
            <Reveal>
              <h2 className="font-serif text-3xl text-cream sm:text-4xl">Let&apos;s Connect</h2>
              <p className="mt-4 text-[1.05rem] text-cream/80">
                Open to Product Management opportunities — let&apos;s talk.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mx-auto mt-10 flex max-w-md flex-col gap-3">
                <ContactRow
                  href={contact.linkedin}
                  icon={<LinkedInIcon />}
                  label={contact.linkedin.replace("https://www.", "")}
                  external
                />
                <ContactRow
                  href={`mailto:${contact.email}`}
                  icon={<MailIcon />}
                  label={contact.email}
                />
                <ContactRow
                  href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                  icon={<PhoneIcon />}
                  label={contact.phone}
                />
              </div>
            </Reveal>

            <Reveal delay={200}>
              <a
                href={profile.resumeUrl}
                download
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-btn bg-cream px-7 py-3 text-[0.95rem] font-semibold text-olive shadow-paper transition-all duration-300 hover:bg-white hover:shadow-paper-lift"
              >
                Download Resume
                <DownloadIcon />
              </a>
            </Reveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-olive-dark py-8 text-center text-sm text-cream/60">
          Designed with care — © 2026 Deeksha Hulyal
        </footer>
      </main>
    </>
  );
}

function ContactRow({
  href,
  icon,
  label,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-4 rounded-btn border border-cream/15 bg-cream/5 px-5 py-4 text-left transition-colors duration-300 hover:border-cream/30 hover:bg-cream/10"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors group-hover:bg-cream/20">
        {icon}
      </span>
      <span className="break-all text-[0.95rem] text-cream/85">{label}</span>
    </a>
  );
}

function LeafSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="currentColor" className={className} aria-hidden="true">
      <path d="M100 10C60 40 30 80 30 120c0 40 30 70 70 70V10z" opacity="0.9" />
      <path d="M100 10c40 30 70 70 70 110 0 40-30 70-70 70V10z" opacity="0.6" />
      <path d="M100 20v170" stroke="#4A5D42" strokeWidth="1.5" opacity="0.3" />
    </svg>
  );
}
