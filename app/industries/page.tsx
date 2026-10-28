import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { HireHero } from "@/components/portfolio/hire-hero";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, businessSchema } from "@/lib/schema";
import { INDUSTRIES } from "@/lib/industries-data";
import { PROJECTS } from "@/lib/projects-data";

export const metadata: Metadata = {
  title: "Industries I Build For | Landscaping, Construction, Property, E-commerce",
  description:
    "Websites and SEO built around one trade at a time — landscaping, construction, real estate, and online stores. Real projects in each. Fixed quotes, 24h replies.",
  alternates: { canonical: "/industries" },
  openGraph: {
    images: ["/og.jpg"],
    title: "Industries I Build For",
    description:
      "Websites and SEO built around one trade at a time — landscaping, construction, real estate, and online stores.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={[
          businessSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
          ]),
        ]}
      />

      <HireHero
        small="Who I build for"
        title="Industries I Build For"
        taglineTitle="A site that knows your trade beats a site that knows none."
        taglineText="I build for a handful of industries properly rather than every industry vaguely. Each one gets its own approach, its own proof, and its own way of turning visitors into enquiries."
        primaryCta={{ label: "Start your project", href: "/contact" }}
        secondaryCta={{ label: "See all work", href: "/projects" }}
        bgImage="/About.png"
      />

      <main className="bg-background text-foreground">
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px] space-y-6">
            {INDUSTRIES.map((ind, i) => {
              const count = PROJECTS.filter((p) => ind.projectTags.includes(p.tag)).length;
              return (
                <div
                  key={ind.slug}
                  className="grid gap-8 rounded-3xl border border-border bg-card p-8 lg:grid-cols-2 lg:gap-12 lg:p-10"
                >
                  <div>
                    <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d]">
                      <span className="h-2 w-2 rounded-full bg-[#1a6b3d]" />
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-5 text-3xl font-extrabold tracking-tight">{ind.name}</h2>
                    <p className="mt-3 text-lg font-semibold text-[#1a6b3d] dark:text-[#1a6b3d]">
                      {ind.hero.taglineTitle}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {ind.hero.taglineText}
                    </p>

                    {count > 0 && (
                      <p className="mt-6 inline-block rounded-full border border-[#1a6b3d]/30 bg-[#1a6b3d]/8 px-4 py-2 text-sm text-muted-foreground">
                        <span className="font-bold text-[#1a6b3d]">{count}</span>{" "}
                        {count === 1 ? "project" : "projects"} built in this industry
                      </p>
                    )}

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href={`/industries/${ind.slug}`}
                        className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
                      >
                        See the {ind.name.toLowerCase()} approach
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-foreground/10"
                      >
                        Get a quote
                      </Link>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-[var(--panel)]/40 p-6 lg:p-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#1a6b3d]">
                      What&apos;s included
                    </h3>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {ind.included.slice(0, 6).map((it) => (
                        <li key={it.title} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1a6b3d]" />
                          {it.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Not on the list?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              These are the trades I have built for most, not the only ones I take. If your business
              is somewhere else entirely, the work is the same — tell me what you do and what you need
              it to bring in.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              Tell me about your business
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </main>

      <HireFooter />
    </>
  );
}
