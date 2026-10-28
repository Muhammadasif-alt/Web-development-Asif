import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Search,
  MessageSquare,
  Gauge,
  ShieldCheck,
  BadgeCheck,
  MessagesSquare,
  Tag,
  Code2,
  TestTube2,
  LifeBuoy,
} from "lucide-react";
import { HireHero } from "@/components/portfolio/hire-hero";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { ProcessTimeline, type ProcessStep } from "@/components/portfolio/process-timeline";
import { JsonLd } from "@/components/seo/json-ld";
import { personSchema, breadcrumbSchema } from "@/lib/schema";
import { IntroSplit } from "@/components/portfolio/intro-split";

export const metadata: Metadata = {
  title: "About Asif | Freelance Web Developer and SEO Specialist",
  description:
    "Meet Asif, a freelance web developer and SEO specialist with 5+ years building fast, search-ready websites and stores for clients across the US, UK, UAE, and Pakistan.",
  alternates: { canonical: "/about" },
  openGraph: {
    images: ["/og.jpg"],
    title: "About Asif | Web Developer and SEO Specialist",
    description:
      "Meet Asif, a freelance web developer and SEO specialist with 5+ years building fast, search-ready websites and stores for clients across the US, UK, UAE, and Pakistan.",
  },
};

const PRINCIPLES = [
  {
    icon: Zap,
    title: "Performance first",
    desc: "If it is not fast, nothing else matters.",
  },
  {
    icon: Search,
    title: "SEO built in",
    desc: "Structure, schema, and Core Web Vitals from the first line of code.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    desc: "You always know what is happening and what it costs.",
  },
];

const STACK_GROUPS = [
  {
    title: "Web Development",
    items: ["WordPress", "Elementor", "Shopify", "WooCommerce", "PHP", "Laravel", "Python", "MERN Stack", "Next.js", "Tailwind CSS"],
  },
  {
    title: "SEO and Marketing",
    items: ["Technical SEO", "On-page SEO", "Local SEO", "Schema & structured data", "Core Web Vitals", "Search Console", "GA4", "Meta Ads"],
  },
  {
    title: "Automation and Integration",
    items: ["GHL", "Zapier", "Make", "Payment gateways", "API integration", "CRM setup"],
  },
];

const PROCESS: ProcessStep[] = [
  {
    icon: MessagesSquare,
    title: "We talk first",
    desc: "I learn your goals, your users, and your deadline before I quote a single number.",
  },
  {
    icon: Tag,
    title: "You get a fixed price",
    desc: "One clear number with the scope written down. No hourly meter, no scope-creep bills.",
  },
  {
    icon: Code2,
    title: "I build clean",
    desc: "Semantic, SEO-ready code that search engines and the next developer both understand.",
  },
  {
    icon: TestTube2,
    title: "We test everything",
    desc: "Across devices, browsers, and screen sizes before anything goes anywhere near live.",
  },
  {
    icon: LifeBuoy,
    title: "I stay available",
    desc: "Clear updates throughout the build, and real support after launch day.",
  },
];

const NUMBERS = [
  ["50+", "Websites and stores shipped"],
  ["5+", "Years building for the web"],
  ["200%+", "Average organic traffic growth"],
  ["24h", "Reply time, every day"],
];

const VALUES = [
  { icon: ShieldCheck, title: "Honesty", desc: "If you do not need something, I will tell you, even if it means a smaller invoice." },
  { icon: Gauge, title: "Speed", desc: "Every site I ship is tuned to pass Core Web Vitals." },
  { icon: BadgeCheck, title: "Ownership", desc: "I take responsibility from the first message to long after launch." },
  { icon: MessageSquare, title: "Clarity", desc: "Plain language, fixed quotes, and no jargon walls." },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d] dark:text-[#1a6b3d]">
      <span className="h-2 w-2 rounded-full bg-[#1a6b3d] dark:bg-[#1a6b3d]" />
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          personSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <HireHero
        form={{
          heading: "Get Your Free Quote",
          subheading: "Tell me the goal and I will come back with a plan and a fixed price.",
          source: "About page",
        }}
        bgImage="/About.png"
        small="About Me"
        title="The developer behind the builds"
        taglineTitle="Hi, I'm Asif, a web developer and SEO specialist."
        taglineText="I build fast, search-ready websites and stores that rank on Google and turn visitors into clients. Clean code, honest advice, and work that performs in the real world."
        primaryCta={{ label: "Start your project", href: "/contact" }}
        secondaryCta={{ label: "View my work", href: "/projects" }}
      />

      <main className="bg-background text-foreground">
        {/* ===== 2. QUICK INTRO ===== */}
        <IntroSplit
          eyebrow="In short"
          heading="Five years of building sites that earn their keep"
          body={[
            "For the past 5+ years I have helped businesses across the US, UK, UAE, and Pakistan launch websites that load fast, rank well, and actually bring in leads.",
            "I work across WordPress, Shopify, Laravel, Python, the MERN stack, and Next.js, and I pick the right stack for the job instead of forcing every project into the same template.",
          ]}
          image="/About.png"
        >
          <p className="mt-8 rounded-2xl border border-[#1a6b3d]/30 bg-[#1a6b3d]/10 px-6 py-4 text-base font-semibold text-[#14532b] dark:text-white">
            One developer, start to finish, with SEO and speed built into every build.
          </p>
        </IntroSplit>

        {/* ===== 3. MY STORY ===== */}
        <section className="dark bg-black px-6 py-20 text-foreground lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <Eyebrow>The Journey</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                How I got here
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  I started the way most self-taught developers do, building small WordPress sites and
                  fixing broken ones for anyone who would let me. What kept me going was a simple
                  frustration: most websites looked fine but performed terribly. Slow load times, no
                  SEO, no real strategy behind them.
                </p>
                <p>
                  So I went deeper. I learned to write clean, semantic code, to build custom themes
                  instead of drag-and-drop clutter, and to treat SEO and speed as part of development,
                  not an afterthought. Over time I moved from single pages to full custom web apps in
                  Laravel, Next.js, and the MERN stack, and from one-off fixes to long-term
                  partnerships with agencies and business owners.
                </p>
                <p>
                  Today I ship fast, SEO-ready websites and stores for clients around the world. The
                  mission has not changed since day one: build sites that are quick, that rank, and
                  that earn their keep.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/asif-about.webp"
                alt="Asif — freelance web developer"
                className="w-full rounded-2xl border border-border object-cover"
              />
            </div>
          </div>
        </section>

        {/* ===== 4. MY APPROACH ===== */}
        <section className="bg-[var(--panel-2)] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-2xl">
              <Eyebrow>How I Think</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                The right tool for the job, every time
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                A lot of freelancers sell you one stack and bend your project to fit it. I do the
                opposite. I start with your goal, your audience, and your budget, then choose the
                platform and approach that fit. WordPress for content-heavy sites. Shopify for stores.
                Custom Next.js or Laravel when speed and scale matter. The tech serves the goal, never
                the other way around.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {PRINCIPLES.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-[#1a6b3d]/25 bg-[#1a6b3d]/10 text-[#1a6b3d]">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== 6. SKILLS & TECH STACK ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-2xl">
              <Eyebrow>What I Work With</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                The tools behind the results
              </h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {STACK_GROUPS.map((g) => (
                <div key={g.title} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1a6b3d]">
                    {g.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              I recommend the best fit for your project, not just the tools I happen to like most.
            </p>
          </div>
        </section>

        {/* ===== 7. THE WAY I WORK ===== */}
        <ProcessTimeline
          eyebrow="My Process"
          title="A 5-Step Process That Removes the"
          titleAccent="Guesswork From Your Build"
          intro="Every project I take on follows the same disciplined process. You always know what stage we are in, what is being done, and why. No black box, no guessing."
          steps={PROCESS}
          footnote="You will never wonder where your project stands or what it will cost."
          cta={{ label: "Start with a free consultation", href: "/contact" }}
          bg="bg-[var(--panel)]"
        />

        {/* ===== 8. NUMBERS ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Proof, Not Promises</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">A few numbers</h2>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {NUMBERS.map(([n, l]) => (
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

        {/* ===== 9. WHO I WORK WITH ===== */}
        <section className="bg-[var(--panel-2)] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Clients</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Trusted by businesses worldwide
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              I work fully remote with clients across the US, UK, UAE, Canada, and Pakistan. From
              local contractors and service businesses to online stores and agencies, the common
              thread is simple: they want a site that works and a developer they can actually reach.
              No timezone has ever been a problem, and no project is too far away.
            </p>
          </div>
        </section>

        {/* ===== 10. WHAT I VALUE ===== */}
        <section className="bg-[var(--panel)] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-2xl">
              <Eyebrow>How I Operate</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                The things I will not cut corners on
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-[#1a6b3d]/25 bg-[#1a6b3d]/10 text-[#1a6b3d]">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== 11. CTA ===== */}
        <section className="px-6 pb-24 pt-20 lg:px-10">
          <div className="mx-auto max-w-4xl rounded-3xl border border-[#1a6b3d]/30 bg-gradient-to-b from-[var(--panel-2)] to-[var(--panel)] p-10 text-center sm:p-14">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Let&apos;s build something that works
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Whether you need a fresh website, an online store, or a site that finally ranks, I would
              love to hear what you are working on. Tell me your goal and I will get back within 24
              hours with a clear plan and a fixed quote.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105"
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
