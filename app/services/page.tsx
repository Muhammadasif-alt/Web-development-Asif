import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code2,
  LayoutDashboard,
  Megaphone,
  ShoppingBag,
  Settings,
  Smartphone,
  Search,
  PenTool,
  Hammer,
  Gauge,
  Rocket,
  LifeBuoy,
} from "lucide-react";
import { HireHero } from "@/components/portfolio/hire-hero";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { ProcessTimeline, type ProcessStep } from "@/components/portfolio/process-timeline";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema, breadcrumbSchema, businessSchema } from "@/lib/schema";
import { IntroSplit } from "@/components/portfolio/intro-split";

export const metadata: Metadata = {
  title: "Web Development and SEO Services",
  description:
    "Web app development, e-commerce, websites, and SEO for growing businesses. MERN stack, Next.js, WordPress, and Shopify builds that convert and scale. Fixed quotes, 24h replies.",
  alternates: { canonical: "/services" },
  openGraph: {
    images: ["/og.jpg"],
    title: "Web Development and SEO Services",
    description:
      "Web app development, e-commerce, websites, and SEO for growing businesses. MERN stack, Next.js, WordPress, and Shopify builds that convert and scale. Fixed quotes, 24h replies.",
  },
};

const SERVICES = [
  {
    num: "01",
    icon: LayoutDashboard,
    title: "Web App Development",
    short: "Custom platforms with logins, data, and real business logic behind them.",
    body: "When an off-the-shelf tool gets you to eighty percent and stops, the last twenty percent is a custom app. I build that on the MERN stack and Next.js — role-based dashboards, SaaS products with subscriptions, internal tools, and the APIs that tie them to whatever you already use.",
    included: [
      "Admin dashboards with roles and permissions",
      "Multi-tenant SaaS platforms with Stripe billing",
      "Internal tools, CRMs, and workflow apps",
      "Booking and scheduling systems",
      "Customer portals and self-serve accounts",
      "REST APIs and third-party integrations",
      "Authentication, JWT, and access control",
      "Takeover and rescue of half-finished builds",
    ],
    best: "Businesses whose process has outgrown spreadsheets and generic SaaS tools.",
    result: "Software shaped around how you actually work, that you own outright.",
    cta: "Get a quote",
    detailHref: "/services/web-apps",
  },
  {
    num: "02",
    icon: Smartphone,
    title: "Mobile App Development",
    short: "One React Native codebase that ships to both the App Store and Google Play.",
    body: "Building separately for iOS and Android means paying twice and shipping twice as slowly. React Native gives both stores a genuinely native feel from one codebase, and because I build the web side too, your app can share the same API, database, and admin panel as your platform instead of duplicating logic in two places.",
    included: [
      "Cross-platform iOS and Android builds",
      "Shared backend and API with your web app",
      "Push notifications, targeted and scheduled",
      "Offline-first caching and sync",
      "Camera, location, biometrics, and deep links",
      "In-app payments and subscriptions",
      "App Store and Play Store submission",
      "Progressive Web Apps when an app is overkill",
    ],
    best: "Businesses that need repeat daily use, push notifications, or device features on a phone.",
    result: "Your product on both stores, built once and updated in one place.",
    cta: "Get a quote",
    detailHref: "/services/mobile-apps",
  },
  {
    num: "03",
    icon: Code2,
    title: "Web Development",
    short: "Fast, SEO-ready websites and web apps, built on the right stack for your goals.",
    body: "From a simple business site to a full custom web app, I write clean, semantic code that loads fast and ranks well. No bloated page builders stacked on top of each other, no themes held together with plugins. Just the right build for what you actually need.",
    included: [
      "WordPress and Elementor custom builds",
      "Shopify and Liquid custom themes",
      "Custom web apps in Laravel, Next.js, and the MERN stack",
      "Headless and JAMstack builds (Next.js with a headless CMS)",
      "WooCommerce online stores",
      "Mobile apps with React Native",
      "Progressive Web Apps (PWA)",
      "Website redesign and migration",
      "API and payment gateway integration",
      "Landing pages built to convert",
    ],
    best: "Businesses that need a professional site or a custom platform that loads fast and ranks well.",
    result: "A site that is quick, clean, and ready to rank the day it goes live.",
    cta: "Get a quote",
    detailHref: "/services/web-development",
  },
  {
    num: "04",
    icon: Megaphone,
    title: "Marketing and SEO",
    short: "Get found on Google and turn that traffic into leads.",
    body: "A beautiful site is useless if no one finds it. I make sure yours shows up when your customers search, then keeps pulling in organic traffic without paying for every click. Technical fixes, on-page work, and content all pointed at one goal: rankings that bring leads.",
    included: [
      "Technical SEO audits and fixes",
      "On-page SEO and content optimisation",
      "Local SEO and Google Business Profile",
      "Schema and structured data",
      "Core Web Vitals and speed for SEO",
      "Meta ads (Facebook and Instagram lead gen)",
      "Social media management and content",
      "Monthly performance reporting in plain English",
    ],
    best: "Businesses that have a site but are not showing up, or are not getting enough leads from it.",
    result: "Higher rankings, more organic traffic, and clear reports you can actually read.",
    cta: "Get a quote",
    detailHref: "/services/marketing",
  },
  {
    num: "05",
    icon: ShoppingBag,
    title: "E-commerce and Automation",
    short: "Sell more and let the busywork run itself.",
    body: "Whether you are launching a new store or fixing one that does not convert, I build online stores that are fast, easy to manage, and built to sell. Then I connect the tools that follow up with leads and customers automatically, so you spend less time on manual work.",
    included: [
      "Shopify and WooCommerce store builds",
      "Product, checkout, and payment setup",
      "Landing pages and sales funnels",
      "CRM and GHL automation",
      "Zapier and Make workflows",
      "Lead capture and follow-up automation",
      "Abandoned cart and email flows",
    ],
    best: "Store owners and service businesses that want more sales with less manual work.",
    result: "A store that converts and a follow-up system that runs while you sleep.",
    cta: "Get a quote",
    detailHref: "/services/ecommerce",
  },
  {
    num: "06",
    icon: Settings,
    title: "Support and Maintenance",
    short: "Keep your site fast, secure, and always online.",
    body: "A website is not a one-time job. It needs updates, backups, and someone to call when something breaks. My care plans keep your site healthy so you can focus on running the business instead of worrying about your website.",
    included: [
      "Flexible monthly care plans",
      "Speed and Core Web Vitals tuning",
      "Security, backups, and plugin or core updates",
      "Bug fixes and small content changes",
      "Uptime monitoring",
      "Priority support with 24h replies",
    ],
    best: "Business owners who want their site handled so they can focus on the business.",
    result: "Peace of mind, and a site that stays fast, secure, and online.",
    cta: "Start a care plan",
    detailHref: "/services/support-maintenance",
  },
  {
    num: "07",
    icon: LifeBuoy,
    title: "Website Rescue and Launch",
    short: "Site down, broken, or stuck before launch? I get it working.",
    body: "Domain or hosting expired and the site vanished, a plugin update threw a 503, or you built a site or app yourself — even with AI — and cannot get it live. I restore from backups, fix the errors, and plan and deploy self-built projects properly.",
    included: [
      "Restore sites after domain or hosting expiry",
      "WordPress 503, white screen and plugin fixes",
      "Go-live help for self-built sites",
      "Planning and deployment for AI-written code",
      "Hosting moves without downtime",
      "Small changes and improvements on existing sites",
    ],
    best: "Anyone whose site is down, broken, or built but not yet live.",
    result: "Your website back online — or live for the first time — set up so it stays that way.",
    cta: "Get help now",
    detailHref: "/services/website-rescue",
  },
];

const WHICH = [
  { q: "I need a custom app, dashboard, or SaaS tool.", a: "Start with Web App Development." },
  { q: "I need an iOS and Android app.", a: "Start with Mobile App Development." },
  { q: "I need a new website or store.", a: "Start with Web Development or E-commerce." },
  { q: "I have a site but no one finds it.", a: "Start with Marketing and SEO." },
  { q: "My site is slow or breaking.", a: "Start with Support and Maintenance." },
  { q: "My site is down, or I built one and can't get it live.", a: "Start with Website Rescue and Launch." },
  { q: "I want more leads from ads.", a: "Start with Meta ads under Marketing and SEO." },
  { q: "I want everything handled by one person.", a: "Perfect, that is exactly how I work." },
];

const PROCESS: ProcessStep[] = [
  { icon: Search, title: "Discover", desc: "We talk about your goals, audience, and what success looks like. You get a clear plan and a fixed quote." },
  { icon: PenTool, title: "Design", desc: "I map the structure and design a clean, on-brand layout built to convert, not just look nice." },
  { icon: Hammer, title: "Build", desc: "I develop your site on the right stack with clean, semantic, SEO-ready code." },
  { icon: Gauge, title: "Optimise", desc: "Speed, Core Web Vitals, meta tags, and schema are tuned before anything goes live." },
  { icon: Rocket, title: "Launch", desc: "We go live with testing across devices and browsers. Everything checked, nothing left to chance." },
  { icon: LifeBuoy, title: "Support", desc: "Ongoing care plans keep your site fast, secure, and improving over time." },
];

const STACK_GROUPS = [
  { title: "Web and Mobile", items: ["WordPress", "Elementor", "Shopify", "WooCommerce", "PHP", "Laravel", "Python", "MERN Stack", "Next.js", "React Native", "Tailwind CSS"] },
  { title: "Growth", items: ["Technical SEO", "On-page SEO", "Schema", "Google Search Console", "GA4", "Meta Ads", "Social media"] },
  { title: "Automation", items: ["GHL", "Zapier", "Make", "Payment gateways", "API integration"] },
];

const WHY = [
  "One point of contact from first message to launch and beyond.",
  "SEO and speed built into every build, never sold as an upsell.",
  "Fixed quotes, so you know the full cost before work begins.",
  "Clear communication, replies within 24 hours.",
  "Honest advice, even when it means recommending less than you asked for.",
  "5+ years and 50+ sites shipped across the US, UK, UAE, and Pakistan.",
];

const WHY_STATS = [
  ["50+", "Projects shipped"],
  ["200%+", "Avg. organic traffic growth"],
  ["24h", "Reply time"],
  ["100%", "Remote, worldwide"],
];

const FAQS = [
  { q: "Can you do just SEO, or just the website?", a: "Both. Pick a single service or a full end-to-end build. I will recommend what actually moves the needle for your goals." },
  { q: "Which platform should I use?", a: "It depends on your goals. WordPress for content-heavy sites, Shopify for stores, custom Next.js or Laravel for apps and speed. I will advise on the first call." },
  { q: "Do you fix existing sites, or only build new ones?", a: "Both. I redesign, speed up, and re-rank existing sites, or build fresh from scratch." },
  { q: "How fast can you start?", a: "Usually within a few days of agreeing the scope. You will get a clear timeline before we begin." },
  { q: "Do you work with clients outside Pakistan?", a: "Yes. Most of my clients are in the US, UK, UAE, and Canada. Fully remote, every timezone." },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d]">
      <span className="h-2 w-2 rounded-full bg-[#1a6b3d]" />
      {children}
    </p>
  );
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          businessSchema(),
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <HireHero
        form={{
          heading: "Get a Custom Proposal",
          subheading: "Tell me which service you need and I will scope it with a fixed quote.",
          source: "Services page",
        }}
        bgImage="/cta-workspace.png"
        small="What I Do"
        title="Web Dev & SEO Services"
        taglineTitle="Everything your site needs to launch, rank, and grow."
        taglineText="I plan, build, and optimise fast websites and stores that search engines understand and customers trust. Every service is built around one thing: results you can measure."
        primaryCta={{ label: "Start your project", href: "/contact" }}
        secondaryCta={{ label: "See my work", href: "/projects" }}
      />

      <main className="bg-background text-foreground">
        {/* ===== 2. POSITIONING INTRO ===== */}
        <IntroSplit
          eyebrow="How I Work"
          heading="The right tool for the job, every time"
          body={[
            "Most freelancers sell you one stack and force your project to fit it. I do the opposite. I pick the platform and approach that fit your goals, your budget, and your timeline, then build it clean, fast, and SEO-ready from day one.",
            "Everything below is a service I deliver end to end, so you deal with one person from the first message to launch and beyond.",
          ]}
          image="/desk-code.png"
          reverse
        >
          <p className="mt-6 rounded-2xl border border-border bg-card px-6 py-4 text-sm text-muted-foreground">
            Not sure what you need? Jump to &quot;Which service is right for you&quot; below, or just
            message me and I will point you the right way.
          </p>
        </IntroSplit>

        {/* ===== 3-6. SERVICE PILLARS ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px] space-y-6">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.num}
                  className="grid gap-8 rounded-3xl border border-border bg-card p-8 lg:grid-cols-2 lg:gap-12 lg:p-10"
                >
                  {/* left */}
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="grid h-14 w-14 place-items-center rounded-xl border border-[#1a6b3d]/25 bg-[#1a6b3d]/10 text-[#1a6b3d]">
                        <Icon className="h-7 w-7" strokeWidth={1.75} />
                      </span>
                      <Eyebrow>Service {s.num}</Eyebrow>
                    </div>
                    <h2 className="mt-5 text-3xl font-extrabold tracking-tight">{s.title}</h2>
                    <p className="mt-3 text-lg font-semibold text-[#1a6b3d] dark:text-[#1a6b3d]">{s.short}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>

                    <div className="mt-6 space-y-3">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Best for:</span> {s.best}
                      </p>
                      <p className="rounded-xl border border-[#1a6b3d]/25 bg-[#1a6b3d]/5 p-4 text-sm text-muted-foreground">
                        <span className="font-semibold text-[#1a6b3d]">Result you get:</span> {s.result}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
                      >
                        {s.cta}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                      <Link
                        href={s.detailHref}
                        className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-foreground/10"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>

                  {/* right — what's included */}
                  <div className="rounded-2xl border border-border bg-[var(--panel)]/40 p-6 lg:p-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#1a6b3d]">
                      What&apos;s included
                    </h3>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {s.included.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1a6b3d]" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== 7. WHICH SERVICE IS RIGHT FOR YOU ===== */}
        <section className="bg-[var(--panel)] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <Eyebrow>Not Sure Where To Start</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Which service is right for you?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Pick the line that sounds like you, and you will know where to begin.
              </p>
            </div>
            <div className="mt-10 space-y-3">
              {WHICH.map((w) => (
                <div
                  key={w.q}
                  className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <span className="font-semibold text-foreground">&quot;{w.q}&quot;</span>
                  <span className="text-sm text-[#1a6b3d] dark:text-[#1a6b3d]">{w.a}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-muted-foreground">
              Still unsure? Message me your goal and I will tell you honestly what you actually need,
              even if it is less than you asked for.
            </p>
            <div className="mt-6 text-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] px-7 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105"
              >
                Get a recommendation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== 9. MY PROCESS ===== */}
        <ProcessTimeline
          eyebrow="How It Gets Done"
          title="A 6-Step Process That Removes the"
          titleAccent="Surprises From Your Build"
          intro="Every project follows the same disciplined process. You always know what stage we are in, what is being done, and why. No black box, no guessing."
          steps={PROCESS}
          footnote="One point of contact from the first message to launch and beyond."
          cta={{ label: "Start your project", href: "/contact" }}
        />

        {/* ===== 10. TECH STACK ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-2xl">
              <Eyebrow>Built To Scale</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                The tools behind the results
              </h2>
              <p className="mt-4 text-muted-foreground">
                I work across the platforms that power the modern web, and recommend the best fit for
                your project, not just the one I like most.
              </p>
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
          </div>
        </section>

        {/* ===== 11. WHY WORK WITH ME ===== */}
        <section className="bg-[var(--panel)] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Why Me</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Why businesses pick me
              </h2>
              <ul className="mt-8 space-y-4">
                {WHY.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#1a6b3d]" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 self-start">
              {WHY_STATS.map(([n, l]) => (
                <div
                  key={l}
                  className="rounded-2xl border border-border bg-card p-6 text-center"
                >
                  <div className="text-3xl font-extrabold text-[#1a6b3d]">{n}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 12. FAQ + CTA ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <Eyebrow>Before You Ask</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Common questions
              </h2>
            </div>
            <div className="mt-12 space-y-3">
              {FAQS.map((f) => (
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
                Not sure which service you need?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Tell me your goal and I will point you to the right one, with a clear plan and a fixed
                quote. No obligation, just an honest next step.
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
                  Book a free consultation
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
