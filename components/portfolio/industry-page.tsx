import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, AlertCircle, Search, PenTool, Hammer, Rocket, LifeBuoy } from "lucide-react";
import { HireHero } from "@/components/portfolio/hire-hero";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { ServiceIncludes } from "@/components/portfolio/service-includes";
import { ProcessTimeline, type ProcessStep } from "@/components/portfolio/process-timeline";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema, breadcrumbSchema, businessSchema } from "@/lib/schema";
import { PROJECTS, projectShot } from "@/lib/projects-data";
import type { Industry } from "@/lib/industries-data";

/* Same five stages whatever the trade — only the copy above them changes. */
const PROCESS: ProcessStep[] = [
  { icon: Search, title: "Discovery", desc: "We talk through your goals, your customers, and what a good month looks like. You leave with a fixed quote." },
  { icon: PenTool, title: "Structure", desc: "I map the pages and the path a visitor takes from landing to enquiry, before any design happens." },
  { icon: Hammer, title: "Build", desc: "Development in visible stages, on the right platform for your budget and how you want to run it." },
  { icon: Rocket, title: "Launch", desc: "Speed, SEO and cross-device checks, then live — with redirects in place so nothing is lost." },
  { icon: LifeBuoy, title: "Grow", desc: "Rankings, enquiries and the changes that follow. Launch day is the start, not the finish." },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d]">
      <span className="h-2 w-2 rounded-full bg-[#1a6b3d]" />
      {children}
    </p>
  );
}

export function IndustryPage({ data }: { data: Industry }) {
  const proof = PROJECTS.filter((p) => data.projectTags.includes(p.tag));

  return (
    <>
      <JsonLd
        data={[
          businessSchema(),
          faqSchema(data.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: data.name, path: `/industries/${data.slug}` },
          ]),
        ]}
      />

      <HireHero
        small={data.hero.small}
        title={data.hero.title}
        taglineTitle={data.hero.taglineTitle}
        taglineText={data.hero.taglineText}
        bullets={data.hero.bullets}
        bgImage={data.images?.hero ?? "/cta-workspace.png"}
        form={{
          heading: "Get a Fixed Quote",
          subheading: `Tell me about your ${data.buyer === "store owner" ? "store" : "business"} and I will reply within 24 hours.`,
          source: `Industry — ${data.name}`,
        }}
      />

      <main className="bg-background text-foreground">
        {/* ===== INTRO ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Overview</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                {data.intro.heading}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                {data.intro.body.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[#1a6b3d]/35 bg-card p-2">
              <Image
                src={data.images?.intro ?? "/desk-code.png"}
                alt={data.images?.introAlt ?? ""}
                width={1600}
                height={1061}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* ===== WHAT IS COSTING THEM WORK ===== */}
        <section className="bg-[var(--panel)] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>The usual problems</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                What is costing you enquiries right now
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {data.pains.map((p) => (
                <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-[#1a6b3d]/25 bg-[#1a6b3d]/12 text-[#1a6b3d]">
                    <AlertCircle className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-base font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHAT'S INCLUDED ===== */}
        <ServiceIncludes
          title="What a"
          titleAccent={`${data.name} build includes`}
          intro={`Everything below is part of the project, handled end to end — nothing quoted as an add-on after the fact.`}
          items={data.included}
          cta={{ label: "Get a Custom Proposal", href: "/contact" }}
        />

        {/* ===== PROOF ===== */}
        {proof.length > 0 && (
          <section className="px-6 py-20 lg:px-10 lg:py-24">
            <div className="mx-auto max-w-[1440px]">
              <div className="mx-auto max-w-2xl text-center">
                <Eyebrow>Proof</Eyebrow>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {data.proofHeading}
                </h2>
              </div>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {proof.map((p) => (
                  <a
                    key={p.url}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-[#1a6b3d]/45"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={projectShot(p.url)}
                      alt={`${p.title} website`}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#1a6b3d]">
                        {p.tag}
                      </span>
                      <h3 className="mt-3 flex items-center gap-1.5 text-lg font-bold">
                        {p.title}
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-[#1a6b3d]" />
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.stack.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===== PROCESS ===== */}
        <ProcessTimeline
          eyebrow="How it works"
          title="A 5-Step Process With"
          titleAccent="No Guesswork"
          intro="Every build follows the same order. You always know what stage we are in, what is being done, and what it costs."
          steps={PROCESS}
          cta={{ label: "Start your project", href: "/contact" }}
          bg="bg-[var(--panel)]"
        />

        {/* ===== FAQ + CTA ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <Eyebrow>Before you ask</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Common questions
              </h2>
            </div>
            <div className="mt-12 space-y-3">
              {data.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group overflow-hidden rounded-xl border border-border [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 bg-card px-5 py-4 text-sm font-semibold text-foreground transition-colors group-open:bg-[#1a6b3d] group-open:text-white sm:text-base">
                    {f.q}
                    <span className="text-lg transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="bg-[var(--panel)] px-5 py-4 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
                </details>
              ))}
            </div>

            <div className="mt-14 rounded-3xl border border-[#1a6b3d]/30 bg-gradient-to-b from-[var(--panel-2)] to-[var(--panel)] p-10 text-center sm:p-14">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {data.cta.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{data.cta.body}</p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105"
                >
                  Get a fixed quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <HireFooter />
    </>
  );
}
