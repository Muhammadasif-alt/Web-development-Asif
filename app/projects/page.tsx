import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HireHero } from "@/components/portfolio/hire-hero";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { ProjectsFilter } from "@/components/portfolio/projects-filter";
import { PROJECTS, projectShot } from "@/lib/projects-data";
import { JsonLd } from "@/components/seo/json-ld";
import { portfolioSchema, breadcrumbSchema } from "@/lib/schema";
import { IntroSplit } from "@/components/portfolio/intro-split";

export const metadata: Metadata = {
  title: "Projects and Portfolio | Web Developer",
  description:
    "A portfolio of fast, SEO-ready websites, online stores, and web apps built in WordPress, Shopify, Laravel, and Next.js. See real projects and the results they delivered.",
  alternates: { canonical: "/projects" },
  openGraph: {
    images: ["/og.jpg"],
    title: "Projects and Portfolio | Asif.dev",
    description:
      "A portfolio of fast, SEO-ready websites, online stores, and web apps built in WordPress, Shopify, Laravel, and Next.js. See real projects and the results they delivered.",
  },
};

const featured = PROJECTS[0]; // Idea Digital

const RESULTS = [
  ["50+", "Projects shipped"],
  ["200%+", "Average organic traffic growth"],
  ["1s", "Typical load time on new builds"],
  ["100%", "Remote, worldwide"],
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d]">
      <span className="h-2 w-2 rounded-full bg-[#1a6b3d]" />
      {children}
    </p>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={[
          portfolioSchema(PROJECTS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        ]}
      />
      <HireHero
        form={{
          heading: "Start Your Project",
          subheading: "Like what you see? Tell me what you are building and I will quote it.",
          source: "Projects page",
        }}
        bgImage="/desk-code.png"
        small="My Work"
        title="Projects & Portfolio"
        taglineTitle="Real websites, real stores, real results."
        taglineText="Sites, stores, and web apps I have built — designed to load fast, rank on Google, and turn visitors into customers. No mockups, just work that shipped."
        primaryCta={{ label: "Start your project", href: "/contact" }}
        secondaryCta={{ label: "View services", href: "/services" }}
      />

      <main className="bg-background text-foreground">
        {/* ===== 2. INTRO ===== */}
        <IntroSplit
          eyebrow="The work"
          heading="Built to perform, not just to look good"
          body={[
            "Every project here started with a goal: more leads, more sales, or a faster site that finally ranks. I do not build for awards, I build for results.",
            "Filter by the type of work and see what was delivered, from custom WordPress builds to Shopify stores and Next.js web apps.",
          ]}
          image="/cta-workspace.png"
        />

        {/* ===== 4. FEATURED SPOTLIGHT ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-8 overflow-hidden rounded-3xl border border-[#1a6b3d]/30 bg-gradient-to-b from-[var(--panel-2)] to-[var(--panel)] lg:grid-cols-2">
              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex aspect-[16/11] items-center overflow-hidden bg-[var(--panel)] lg:aspect-auto"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={projectShot(featured.url)}
                  alt={featured.title}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105 lg:h-auto lg:object-contain"
                />
              </a>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <Eyebrow>Featured</Eyebrow>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight">{featured.title}</h2>
                <span className="mt-3 w-fit rounded-full bg-[#1a6b3d]/12 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1a6b3d]">
                  {featured.category}
                </span>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">The brief:</span> Idea Digital needed a
                  fast, credible agency site that explains their SEO services and turns visitors into
                  enquiries.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">What I did:</span> Built a clean,
                  conversion-focused site with clear services, process, and case-study sections, tuned
                  for speed and on-page SEO from the first line.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {featured.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-card px-2 py-1 text-[11px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-5 rounded-xl border border-[#1a6b3d]/25 bg-[#1a6b3d]/5 p-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-[#1a6b3d]">The result:</span> A fast,
                  professional site with a clear lead path that positions the agency to win new
                  clients.
                </p>
                <a
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#15703a] to-[#4cb45a] px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
                >
                  View live site
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 3 + 5 + 6. FILTERS + GRID ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Browse by type</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                All the work
              </h2>
            </div>
            <div className="mt-12">
              <ProjectsFilter />
            </div>
          </div>
        </section>

        {/* ===== 7. RESULTS BAR ===== */}
        <section className="bg-[var(--panel)] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                The numbers behind the work
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {RESULTS.map(([n, l]) => (
                <div
                  key={l}
                  className="rounded-2xl border border-border bg-card p-6 text-center"
                >
                  <div className="text-4xl font-extrabold text-[#1a6b3d]">{n}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 8. MINI PROCESS ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Behind Every Project</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              The same care, every time
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Whatever the platform, the process stays the same. I start with your goal, pick the
              right stack, build clean and SEO-ready code, tune it for speed, and stay available after
              launch. That is why the projects on this page keep performing long after they go live.
            </p>
            <Link
              href="/services"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-foreground/10"
            >
              See my full process
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>

        {/* ===== 10. CTA ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-4xl rounded-3xl border border-[#1a6b3d]/30 bg-gradient-to-b from-[var(--panel-2)] to-[var(--panel)] p-10 text-center sm:p-14">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Want to be the next project?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Tell me what you are building and I will get back within 24 hours with a clear plan and a
              fixed quote. No obligation, just an honest next step.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#15703a] to-[#4cb45a] px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105"
              >
                Start your project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-bold text-foreground transition-colors hover:bg-foreground/10"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <HireFooter />
    </>
  );
}
