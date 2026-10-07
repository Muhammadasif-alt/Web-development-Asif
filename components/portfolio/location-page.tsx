import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { HireHero } from "@/components/portfolio/hire-hero";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import type { LocationData } from "@/lib/locations-data";
import { IntroSplit } from "@/components/portfolio/intro-split";

const SERVICES = [
  { title: "Web Development", href: "/services/web-development" },
  { title: "Marketing & SEO", href: "/services/marketing" },
  { title: "E-commerce & Automation", href: "/services/ecommerce" },
  { title: "Support & Maintenance", href: "/services/support-maintenance" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d]">
      <span className="h-2 w-2 rounded-full bg-[#1a6b3d]" />
      {children}
    </p>
  );
}

export function LocationPage({ data }: { data: LocationData }) {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `Web Development in ${data.country}`,
            description: data.meta.description,
            slug: data.slug,
          }),
          faqSchema(data.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: `Web Developer ${data.country}`, path: `/${data.slug}` },
          ]),
        ]}
      />

      <HireHero
        form={{
          heading: "Get Your Free Quote",
          subheading: "Tell me about your project and I will reply within 24 hours.",
          source: `Location page — ${data.country}`,
        }}
        bgImage="/desk-calm.png"
        small={data.hero.small}
        title={data.hero.title}
        taglineTitle={data.hero.taglineTitle}
        taglineText={data.hero.taglineText}
        primaryCta={{ label: "Start your project", href: "/contact" }}
        secondaryCta={{ label: "View services", href: "/services" }}
      />

      <main className="bg-background text-foreground">
        {/* ===== INTRO ===== */}
        <IntroSplit
          eyebrow={data.country}
          heading={data.intro.heading}
          body={data.intro.body}
          image="/desk-calm.png"
        />

        {/* ===== POINTS ===== */}
        <section className="bg-[var(--panel)] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Why work with me</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Built for {data.country} businesses
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {data.points.map((p, i) => (
                <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
                  <span className="font-mono text-sm font-bold text-[#1a6b3d]">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== LOCAL NOTE ===== */}
        <section className="px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-3xl border border-[#1a6b3d]/25 bg-[#1a6b3d]/5 p-8">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#1a6b3d]/25 bg-[#1a6b3d]/10 text-[#1a6b3d]">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold">Remote, worldwide, priced in {data.currency}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{data.localNote}</p>
            </div>
          </div>
        </section>

        {/* ===== SERVICE LINKS ===== */}
        <section className="bg-[var(--panel)] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>What I can help with</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Services for {data.country} clients
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-[#1a6b3d]/50"
                >
                  <span className="font-bold">{s.title}</span>
                  <ArrowRight className="h-4 w-4 text-[#1a6b3d] transition-transform group-hover:translate-x-0.5" />
                </Link>
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
                {data.country} web development questions
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
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-bold text-foreground transition-colors hover:bg-foreground/10"
              >
                See my work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <HireFooter />
    </>
  );
}
