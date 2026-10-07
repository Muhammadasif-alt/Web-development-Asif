import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { HireHero } from "@/components/portfolio/hire-hero";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { ProcessTimeline, type ProcessStep } from "@/components/portfolio/process-timeline";
import { Search, PenTool, Hammer, TestTube2, Rocket, LifeBuoy } from "lucide-react";
import { ServiceIncludes } from "@/components/portfolio/service-includes";
import Image from "next/image";

export type ServiceDetail = {
  slug: string;
  name: string;
  meta: { title: string; description: string };
  hero: { small: string; title: string; taglineTitle: string; taglineText: string };
  /** intro.body may contain \n\n to split into paragraphs */
  intro: { heading: string; body: string };
  included: { title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  tech: string[];
  packages: {
    name: string;
    price: string;
    period: string;
    tagline: string;
    features: string[];
    featured: boolean;
    cta: string;
  }[];
  faqs: { q: string; a: string }[];
  cta: { heading: string; body: string };
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d]">
      <span className="h-2 w-2 rounded-full bg-[#1a6b3d]" />
      {children}
    </p>
  );
}

/* Step icons by position — the copy differs per service, the shape does not. */
const STEP_ICONS = [Search, PenTool, Hammer, TestTube2, Rocket, LifeBuoy];

export function ServiceDetailPage({ data }: { data: ServiceDetail }) {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: data.name,
            description: data.meta.description,
            slug: data.slug,
          }),
          faqSchema(data.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: data.name, path: `/services/${data.slug}` },
          ]),
        ]}
      />
      <HireHero
        form={{
          heading: "Get a Fixed Quote",
          subheading: "Tell me what you need and I will come back with scope, timeline, and price.",
          source: data.name,
        }}
        bgImage="/cta-workspace.png"
        small={data.hero.small}
        title={data.hero.title}
        taglineTitle={data.hero.taglineTitle}
        taglineText={data.hero.taglineText}
        primaryCta={{ label: "Start your project", href: "/contact" }}
        secondaryCta={{ label: "All services", href: "/services" }}
      />

      <main className="bg-background text-foreground">
        {/* ===== INTRO — copy and image share the row evenly ===== */}
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
                src="/desk-code.png"
                alt=""
                width={1536}
                height={1024}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* ===== WHAT'S INCLUDED ===== */}
        <ServiceIncludes
          title="What My"
          titleAccent={`${data.name} Includes`}
          intro={`Everything in a ${data.name} project, handled end to end — no add-ons quoted after the fact.`}
          items={data.included}
          cta={{ label: "Get a Custom Proposal", href: "/contact" }}
        />

        {/* ===== BENEFITS ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>What you get</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Results, not just deliverables
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {data.benefits.map((b, i) => (
                <div
                  key={b.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <span className="font-mono text-sm font-bold text-[#1a6b3d]">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <ProcessTimeline
          eyebrow="How it works"
          title="A Clear Path From"
          titleAccent="Start To Launch"
          intro="Every build follows the same disciplined process. You always know what stage we are in, what is being done, and why."
          steps={data.process.map((p, i) => ({
            ...p,
            icon: STEP_ICONS[i % STEP_ICONS.length],
          }))}
          cta={{ label: "Start your project", href: "/contact" }}
          bg="bg-[var(--panel)]"
        />

        {/* ===== TECH ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Tools I use</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Built on tools that scale
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {data.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PACKAGES ===== */}
        <section className="bg-[var(--panel)] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Pricing</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Simple, transparent packages
              </h2>
              <p className="mt-4 text-muted-foreground">
                Starting prices — the final quote depends on scope. No hidden fees.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {data.packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`flex flex-col rounded-3xl border p-8 ${
                    pkg.featured
                      ? "border-[#1a6b3d] bg-gradient-to-b from-[var(--panel-2)] to-[var(--panel)]"
                      : "border-border bg-card"
                  }`}
                >
                  {pkg.featured && (
                    <span className="mb-4 w-fit rounded-full bg-gradient-to-r from-[#15703a] to-[#4cb45a] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-lg font-bold">{pkg.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="text-4xl font-extrabold text-[#1a6b3d]">{pkg.price}</span>
                    <span className="text-sm text-muted-foreground">{pkg.period}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{pkg.tagline}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1a6b3d]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform hover:scale-105 ${
                      pkg.featured
                        ? "bg-[#1a6b3d] text-white"
                        : "border border-border text-foreground hover:bg-foreground/10"
                    }`}
                  >
                    {pkg.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <Eyebrow>FAQ</Eyebrow>
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
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-4xl rounded-3xl border border-[#1a6b3d]/30 bg-gradient-to-b from-[var(--panel-2)] to-[var(--panel)] p-10 text-center sm:p-14">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{data.cta.heading}</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{data.cta.body}</p>
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
                Book a free consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <HireFooter />
    </>
  );
}
