import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Plus,
  Rocket,
  Code2,
  ShieldCheck,
  Headphones,
  Check,
  Megaphone,
  ShoppingBag,
  LayoutDashboard,
  Globe,
  Zap,
  MessageSquare,
  Search,
  Layers,
  Hammer,
  CheckCircle2,
  Mail,
  Phone,
} from "lucide-react";
import { getSortedPosts } from "@/lib/blog-data";
import { HireContactForm } from "@/components/portfolio/hire-contact-form";
import { HeroVideo } from "@/components/portfolio/hero-video";
import { HireNav } from "@/components/portfolio/hire-nav";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { HomeWork } from "@/components/portfolio/home-work";
import { TechMarquee } from "@/components/portfolio/tech-marquee";
import { ProcessTimeline, type ProcessStep } from "@/components/portfolio/process-timeline";
import { JsonLd } from "@/components/seo/json-ld";
import { personSchema, businessSchema, websiteSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Full-Stack Developer | MERN, WordPress & Shopify | Asif.dev",
  description:
    "Full-stack developer building web apps, online stores, and business sites. MERN stack, WordPress, and Shopify — fast, SEO-ready builds that convert and scale. Fixed quotes, 24h replies.",
  alternates: { canonical: "/" },
  openGraph: {
    images: ["/og.jpg"],
    title: "Full-Stack Developer for Web Apps, E-commerce & Websites",
    description:
      "Full-stack developer building web apps, online stores, and business sites. MERN stack, WordPress, and Shopify — fast, SEO-ready builds that convert and scale.",
  },
};

/* The four entry points into the site, ordered by how a client thinks about the job. */
const SKILLS = [
  { num: "01", label: "Web Apps (MERN)", href: "/services/web-apps" },
  { num: "02", label: "E-commerce & Shopify", href: "/services/ecommerce" },
  { num: "03", label: "WordPress & Websites", href: "/services/web-development" },
  { num: "04", label: "SEO & Performance", href: "/services/marketing" },
];

// Shown in the hero on mobile (desktop shows the skills grid instead).
const HERO_STATS = [
  { icon: Rocket, num: "50+", label: "Projects Completed" },
  { icon: Code2, num: "5+", label: "Years of Experience" },
  { icon: ShieldCheck, num: "100%", label: "Client Satisfaction" },
  { icon: Headphones, num: "24/7", label: "Support & Maintenance" },
];

/**
 * The three things I actually get hired for, kept separate so a visitor
 * self-selects instead of reading one long list of technologies.
 *
 * The Web Apps bullets are the ones to edit as real SaaS and admin-tool
 * case studies come in — they describe build types, not specific clients.
 */
const PILLARS: {
  icon: typeof Code2;
  eyebrow: string;
  title: string;
  desc: string;
  points: string[];
  stack: string;
  href: string;
}[] = [
  {
    icon: LayoutDashboard,
    eyebrow: "Custom Software",
    title: "Web Applications",
    desc: "Products with logins, data, and real business logic behind them — not brochure pages.",
    points: [
      "Admin dashboards and analytics panels",
      "Multi-tenant SaaS platforms with billing",
      "Booking, CRM, and internal tools",
      "REST APIs and third-party integrations",
    ],
    stack: "MongoDB · Express · React · Node · Next.js",
    href: "/services/web-apps",
  },
  {
    icon: ShoppingBag,
    eyebrow: "Selling Online",
    title: "E-commerce",
    desc: "Stores built around the checkout, then tuned until the numbers move.",
    points: [
      "Shopify themes coded in Liquid",
      "WooCommerce stores and migrations",
      "Payments, shipping, and tax setup",
      "Conversion and speed optimisation",
    ],
    stack: "Shopify · Liquid · WooCommerce · Stripe",
    href: "/services/ecommerce",
  },
  {
    icon: Globe,
    eyebrow: "Marketing Sites",
    title: "WordPress",
    desc: "Business sites that load fast, stay editable, and are built to rank from day one.",
    points: [
      "Custom themes without plugin bloat",
      "Landing pages built to convert",
      "Speed and Core Web Vitals tuning",
      "Redesigns and migrations, rankings intact",
    ],
    stack: "WordPress · PHP · Elementor · Laravel",
    href: "/services/web-development",
  },
];

type Part = { t: string; hl?: boolean };
const QUALIFY: { img: string; n: string; title: string; parts: Part[] }[] = [
  {
    img: "/card1-asif.webp",
    n: "1",
    title: "You need a real product",
    parts: [
      { t: "You want a " },
      { t: "custom app or platform", hl: true },
      { t: " — dashboards, logins, payments — built properly instead of stitched together from plugins." },
    ],
  },
  {
    img: "/card2-asif-1.webp",
    n: "2",
    title: "You want it to sell",
    parts: [
      { t: "You want a site or store that turns visitors into " },
      { t: "real clients and sales", hl: true },
      { t: " — consistently, every single month, with results you can measure." },
    ],
  },
  {
    img: "/card3-asif-1.webp",
    n: "3",
    title: "You want one developer",
    parts: [
      { t: "You want a " },
      { t: "complete end-to-end build", hl: true },
      { t: " — design, development, SEO, and ongoing support — all handled by one person." },
    ],
  },
];

const OFFER: { n: string; title: [string, string]; desc: string; href: string }[] = [
  {
    n: "01",
    title: ["Web App", "Development"],
    desc: "Custom MERN and Next.js platforms — dashboards, SaaS tools, client portals, and APIs — engineered around your exact workflow, secure and ready to scale.",
    href: "/services/web-apps",
  },
  {
    n: "02",
    title: ["E-commerce", "& Automation"],
    desc: "High-converting Shopify and WooCommerce stores with smooth checkout, payments, and automation that handles orders and follow-ups for you.",
    href: "/services/ecommerce",
  },
  {
    n: "03",
    title: ["Website", "Development"],
    desc: "Fast, SEO-ready WordPress and Next.js business websites — custom, mobile-first, and built to turn visitors into enquiries, not a bloated template.",
    href: "/services/web-development",
  },
];

const WHY: { icon: typeof Code2; title: string; desc: string }[] = [
  {
    icon: Code2,
    title: "One developer, full stack",
    desc: "Front-end, back-end, database, and deployment handled by the same person. No handoffs, no finger-pointing.",
  },
  {
    icon: Zap,
    title: "Built for performance",
    desc: "Sub-second loads and strong Core Web Vitals are the baseline on every build, never a paid extra.",
  },
  {
    icon: ShieldCheck,
    title: "Clean, maintainable code",
    desc: "Readable, documented code you or the next developer can pick up without a rewrite.",
  },
  {
    icon: MessageSquare,
    title: "Straight communication",
    desc: "Fixed quotes before work starts, replies within 24 hours, and progress you can actually see.",
  },
  {
    icon: Rocket,
    title: "Business-first decisions",
    desc: "I pick the stack that fits your goals and budget, not the one that pads an invoice.",
  },
  {
    icon: Headphones,
    title: "Support after launch",
    desc: "Updates, backups, monitoring, and small changes handled so launch day is not the finish line.",
  },
];

const PROCESS: ProcessStep[] = [
  {
    icon: Search,
    title: "Discovery",
    desc: "We talk through your goals, users, and must-have features. You leave with a clear scope and a fixed quote.",
  },
  {
    icon: Layers,
    title: "Plan & Stack",
    desc: "I choose the right stack for the job — MERN, Next.js, WordPress, or Shopify — and map the architecture.",
  },
  {
    icon: Hammer,
    title: "Build",
    desc: "Development in visible increments. You see progress as it happens instead of waiting for a big reveal.",
  },
  {
    icon: CheckCircle2,
    title: "Test & Launch",
    desc: "Cross-device testing, speed and SEO checks, then launch and handover with everything documented.",
  },
];

/* Entry prices. These mirror the Starter tier on each service detail page. */
const PRICING: {
  icon: typeof Code2;
  name: string;
  price: string;
  period: string;
  tagline: string;
  points: string[];
  href: string;
}[] = [
  {
    icon: LayoutDashboard,
    name: "Web App Development",
    price: "From $1,499",
    period: "one-time",
    tagline: "A custom platform built around your workflow.",
    points: ["MERN or Next.js build", "Auth, database, and admin", "API integrations included"],
    href: "/services/web-apps",
  },
  {
    icon: ShoppingBag,
    name: "E-commerce & Automation",
    price: "From $799",
    period: "one-time",
    tagline: "Get selling fast with a clean, solid store.",
    points: ["Shopify or WooCommerce", "Products and payments set up", "Automation that follows up"],
    href: "/services/ecommerce",
  },
  {
    icon: Code2,
    name: "Website Development",
    price: "From $499",
    period: "one-time",
    tagline: "A clean, fast professional site to get you online.",
    points: ["Custom, mobile-first design", "SEO-ready from day one", "Speed tuned before launch"],
    href: "/services/web-development",
  },
  {
    icon: Megaphone,
    name: "SEO & Performance",
    price: "From $299",
    period: "/mo",
    tagline: "Get the foundations right and start climbing.",
    points: ["Technical and on-page SEO", "Content and schema", "Monthly reporting"],
    href: "/services/marketing",
  },
];

/* The three newest real articles, straight from the blog. */
const POSTS = getSortedPosts().slice(0, 3);

const FAQS = [
  {
    q: "What kind of projects do you take on?",
    a: "Three main types: custom web applications on the MERN stack and Next.js, online stores in Shopify and WooCommerce, and fast WordPress business sites. If your project spans more than one of those, that is normal — it is why I work full stack.",
  },
  {
    q: "How long does a project take?",
    a: "A business site is usually 1–3 weeks. A store depends on catalogue size, typically 2–4 weeks. Custom web apps are scoped in phases and start from about 4 weeks. You get a clear timeline before we start.",
  },
  {
    q: "How much do you charge?",
    a: "Websites start at $499, stores at $799, and custom web apps at $1,499. Every project is quoted upfront with a fixed price after a quick chat, so you know the full cost before any work begins.",
  },
  {
    q: "Can you take over an existing project?",
    a: "Yes. I regularly pick up half-finished builds, inherited codebases, and sites left by a previous developer. I start with an audit so you know exactly what you have before deciding what to fix.",
  },
  {
    q: "Will my site be fast and SEO-friendly?",
    a: "Always. Clean code, proper meta tags, schema, and Core Web Vitals tuning are baked into every build — never charged as an extra.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. I offer flexible maintenance plans for updates, backups, security, and small changes, so your project stays fast and secure long after launch.",
  },
];

export default function HireMePage() {
  return (
    <>
    <JsonLd data={[personSchema(), businessSchema(), websiteSchema(), faqSchema(FAQS)]} />
    <main className="bg-background">
    <section className="dark relative overflow-hidden bg-black">
      {/* Ground. Light by day, deep green by night — the video sits in the card
          on the right rather than behind everything, so the copy never fights it. */}
      <div className="absolute inset-0 bg-black" />

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col px-6 lg:px-10">
        <HireNav />

        <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
          {/* ---------- copy ---------- */}
          <div>
            <p className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[#1a6b3d]/30 bg-[#1a6b3d]/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#1a6b3d] dark:border-[#86e0a3]/35 dark:bg-[#86e0a3]/10 dark:text-[#86e0a3]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1a6b3d] dark:bg-[#c8e659]" />
              Web Development &amp; Digital Solutions
            </p>

            <h1 className="mt-7 text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-neutral-950 dark:text-white sm:text-5xl lg:text-[3.4rem]">
              Full-Stack Developer for{" "}
              <span className="text-[#1a6b3d] dark:text-[#86e0a3]">Web Apps</span>{" "}
              &amp; E-commerce
            </h1>

            <h2 className="mt-7 text-xl font-bold leading-snug text-neutral-900 dark:text-white sm:text-2xl">
              MERN, WordPress &amp; Shopify — end to end.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600 dark:text-white/70 sm:text-base">
              I build high-performance digital products for growing businesses: custom dashboards
              and SaaS platforms, online stores that sell, and websites that rank on Google.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#15703a] to-[#4cb45a] px-7 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/70 px-7 py-3.5 text-sm font-bold text-neutral-900 transition-colors hover:bg-white dark:border-white/30 dark:bg-transparent dark:text-white dark:hover:bg-white/10"
              >
                View work
              </Link>
            </div>
          </div>

          {/* ---------- video card + floating proof ---------- */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-white/60 p-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-neutral-900 sm:aspect-[3/4]">
                <HeroVideo />
              </div>
            </div>

            {/* git push — top right */}
            <div className="absolute -right-2 top-14 hidden rounded-xl border border-neutral-200 bg-white px-4 py-2.5 font-mono text-xs text-neutral-700 dark:border-white/10 dark:bg-[#0d0d0d] dark:text-white/80 sm:block lg:-right-6">
              git push origin production{" "}
              <span className="text-[#1a6b3d] dark:text-[#c8e659]">✓</span>
            </div>

            {/* projects — left */}
            <div className="absolute -left-3 top-1/3 rounded-2xl border border-neutral-200 bg-white px-5 py-3.5 dark:border-white/10 dark:bg-[#0d0d0d] lg:-left-8">
              <div className="text-2xl font-extrabold text-[#1a6b3d] dark:text-[#86e0a3]">50+</div>
              <div className="mt-0.5 text-xs text-neutral-600 dark:text-white/60">
                Projects Delivered
              </div>
            </div>

            {/* rating — bottom right */}
            <div className="absolute -right-3 bottom-10 rounded-2xl border border-neutral-200 bg-white px-5 py-3.5 dark:border-white/10 dark:bg-[#0d0d0d] lg:-right-8">
              <div className="text-2xl font-extrabold text-[#1a6b3d] dark:text-[#86e0a3]">5★</div>
              <div className="mt-0.5 text-xs text-neutral-600 dark:text-white/60">Client Rating</div>
            </div>
          </div>
        </div>

        {/* mobile stats */}
        <div className="border-t border-neutral-200 py-4 dark:border-white/15 lg:hidden">
          <div className="divide-y divide-neutral-200 dark:divide-white/10">
            {HERO_STATS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex items-center gap-4 py-3.5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#1a6b3d] text-white">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <div className="text-2xl font-extrabold leading-none text-neutral-950 dark:text-white">
                      {s.num}
                    </div>
                    <div className="mt-1 text-sm text-neutral-600 dark:text-white/70">{s.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ---------- entry points band ---------- */}
      <div className="relative z-10 bg-[#123f28]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-6 gap-y-7 px-6 py-8 lg:grid-cols-4 lg:px-10">
          {SKILLS.map((s) => (
            <Link key={s.num} href={s.href} className="group">
              <div className="font-mono text-sm font-semibold tracking-wider text-[#86e0a3]">
                {s.num}
              </div>
              <div className="mt-2 text-base font-semibold text-white transition-opacity group-hover:opacity-80 sm:text-lg">
                {s.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ===== TECHNOLOGIES — logo marquee ===== */}
    <TechMarquee />

    {/* ===== WHAT I DO — three clear lanes ===== */}
    <section className="relative overflow-hidden bg-[var(--panel)] px-6 py-20 text-foreground lg:px-10 lg:py-24">
      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d]">
              <span className="h-2 w-2 rounded-full bg-[#1a6b3d]" />
              What I Do
            </p>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
              Three lanes.
              <br />
              Pick the one you&apos;re in.
            </h2>
          </div>
          <p className="text-muted-foreground lg:pb-2 lg:ml-auto lg:max-w-sm lg:text-right">
            Most developers do one of these. I do all three, which means the right tool gets picked
            for your problem instead of the only tool available.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.title}
                href={p.href}
                className="group flex flex-col rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1a6b3d]/60 hover:bg-white/[0.05]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#1a6b3d]/25 bg-[#1a6b3d]/10 text-[#1a6b3d] transition-colors group-hover:bg-[#1a6b3d] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a6b3d]">
                  {p.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                <ul className="mt-6 flex-1 space-y-2.5 border-t border-border pt-6">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1a6b3d]" strokeWidth={2.5} />
                      {pt}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 font-mono text-[11px] leading-relaxed text-muted-foreground">{p.stack}</p>
                <span className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#15703a] to-[#4cb45a] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#06210f] transition-opacity group-hover:opacity-90">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>

    {/* ===== WHAT I OFFER ===== */}
    <section className="bg-[var(--panel)] px-6 py-20 text-foreground lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        {/* header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d]">
              <span className="h-2 w-2 rounded-full bg-[#1a6b3d]" />
              Services
            </p>
            <h2 className="mt-5 text-5xl font-extrabold uppercase leading-[0.92] tracking-tight sm:text-6xl">
              Services
              <br />
              built to win
            </h2>
          </div>
          <div className="lg:pb-2 lg:text-right">
            <p className="text-muted-foreground lg:ml-auto lg:max-w-sm">
              Every build is designed with one goal in mind — getting you the results you came here
              for. No fluff, no filler.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-[#15703a] to-[#4cb45a] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* cards */}
        <div className="mt-12 grid border-l border-t border-border sm:grid-cols-3">
          {OFFER.map((o) => (
            <Link
              key={o.n}
              href={o.href}
              className="group flex flex-col border-b border-r border-border p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-[#1a6b3d]"
            >
              <span className="font-mono text-sm font-bold text-[#1a6b3d] group-hover:text-foreground">
                {o.n}
              </span>
              <span className="mt-3 block h-px w-full bg-[#1a6b3d]/40 group-hover:bg-[#1a6b3d] dark:group-hover:bg-white/50" />
              <h3 className="mt-6 text-2xl font-extrabold uppercase leading-[1.05] text-foreground">
                {o.title[0]}
                <br />
                {o.title[1]}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground group-hover:text-white/90">
                {o.desc}
              </p>
              <span className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#15703a] to-[#4cb45a] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#06210f] transition-opacity group-hover:opacity-90">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ===== ABOUT ME ===== */}
    <section className="dark relative overflow-hidden bg-[var(--panel-2)] text-foreground">
      <div className="absolute inset-x-0 bottom-0 h-1 bg-[#12502d]" />
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-24">
        {/* LEFT — about me */}
        <div>
          <span className="inline-block rounded-full border border-border px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            About Me
          </span>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
            Hi, I&apos;m <span className="text-[#1a6b3d]">Asif</span>, a developer who ships.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            For the past 5+ years I have built web apps, online stores, and business websites for
            clients across the US, UK, UAE, and Pakistan. I work full stack — React and Node on the
            product side, WordPress and Shopify on the commerce side — so I can pick the right stack
            for the job instead of forcing every project into the same one.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            I care about the things that move the needle: clean code, real speed, search rankings,
            and interfaces that turn visitors into clients. No bloated templates, no handing your
            project into a black box. Just clear communication and results you can measure.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
            {[
              ["50+", "Projects shipped"],
              ["5+", "Years experience"],
              ["200%+", "Organic traffic growth"],
              ["24h", "Reply time"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-extrabold text-foreground">{n}</div>
                <div className="mt-1 text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#15703a] to-[#4cb45a] py-3 pl-6 pr-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Contact me
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#1a6b3d]">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-foreground/10"
            >
              More about me
            </Link>
          </div>
        </div>

        {/* RIGHT — image */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/asif-laptop.webp" alt="Asif working" className="w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>

    {/* ===== WORK, SEGMENTED BY BUILD TYPE ===== */}
    <section className="bg-background px-6 py-20 text-foreground lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d]">
              <span className="h-2 w-2 rounded-full bg-[#1a6b3d]" />
              Selected Work
            </p>
            <h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl">
              Work that ships and <span className="text-[#1a6b3d]">performs</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            View all projects
            <span className="grid h-7 w-7 place-items-center rounded-full border border-border transition-colors group-hover:border-[#1a6b3d] group-hover:bg-[#1a6b3d] group-hover:text-white">
              <Plus className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>

        <div className="mt-12">
          <HomeWork />
        </div>
      </div>
    </section>

    {/* ===== WHY CHOOSE ME ===== */}
    <section className="relative overflow-hidden bg-[var(--panel)] px-6 py-20 text-foreground lg:px-10 lg:py-24">
      <div className="relative mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d]">
            <span className="h-2 w-2 rounded-full bg-[#1a6b3d]" />
            Why Work With Me
          </p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Multi-stack, <span className="text-[#1a6b3d]">single point of contact</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            You brief one person and get the whole thing built — no agency layers, no waiting on
            someone else&apos;s subcontractor.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w) => {
            const Icon = w.icon;
            return (
              <div
                key={w.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-[#1a6b3d]/50"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#1a6b3d]/25 bg-[#1a6b3d]/10 text-[#1a6b3d]">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ===== PROCESS ===== */}
    <ProcessTimeline
      eyebrow="Process"
      title="A 4-Step Process That Removes the"
      titleAccent="Mystery From Your Project"
      intro="Four steps, no mystery. You know what happens next at every stage, and what it costs before anything starts."
      steps={PROCESS}
      footnote="Every stage is visible, and the price is agreed before a single line is written."
      cta={{ label: "Start your project", href: "/contact" }}
    />

    {/* ===== THIS IS FOR YOU IF ===== */}
    <section className="dark relative overflow-hidden border-t border-[#1a6b3d]/25 bg-[var(--panel-2)] px-6 py-20 text-foreground lg:px-10 lg:py-28">
      <div className="relative mx-auto max-w-[1440px]">
        <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          This work is <span className="text-[#1a6b3d]">for you if:</span>
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {QUALIFY.map((card) => (
            <article
              key={card.n}
              className="group flex flex-col rounded-3xl border border-[#1a6b3d]/35 bg-gradient-to-b from-[var(--panel-2)] to-[var(--panel)] p-3 transition-all duration-300 hover:-translate-y-2 hover:border-[#1a6b3d]"
            >
              <div className="overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.img}
                  alt=""
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="relative px-3 pb-6 pt-9">
                <span className="absolute -top-5 left-3 grid h-11 w-11 place-items-center rounded-full bg-[#1a6b3d] text-lg font-extrabold text-white">
                  {card.n}
                </span>
                <h3 className="text-lg font-bold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.parts.map((p, i) =>
                    p.hl ? (
                      <span key={i} className="font-semibold text-[#1a6b3d]">
                        {p.t}
                      </span>
                    ) : (
                      <span key={i}>{p.t}</span>
                    )
                  )}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#15703a] to-[#4cb45a] px-10 py-4 text-base font-bold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:opacity-95"
          >
            Yes, that&apos;s me!
          </Link>
        </div>
      </div>
    </section>

    {/* ===== PRICING ===== */}
    <section className="relative overflow-hidden bg-[var(--panel)] px-6 py-20 text-foreground lg:px-10 lg:py-24">
      <div className="relative mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d]">
            <span className="h-2 w-2 rounded-full bg-[#1a6b3d]" />
            Pricing
          </p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Simple pricing, <span className="text-[#1a6b3d]">no surprises</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Starting prices for each service. Every project gets a fixed quote after a quick chat, so
            you know the full cost before any work begins.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="group flex flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1a6b3d]/60"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-[#1a6b3d]/25 bg-[#1a6b3d]/10 text-[#1a6b3d]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold">{p.name}</h3>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-[#1a6b3d]">{p.price}</span>
                  <span className="text-xs text-muted-foreground">{p.period}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1a6b3d]" strokeWidth={2.5} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.href}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground transition-colors group-hover:border-[#1a6b3d] group-hover:bg-gradient-to-r from-[#15703a] to-[#4cb45a]"
                >
                  See packages
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* reassurance strip */}
        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-[#1a6b3d]/25 bg-[#1a6b3d]/5 px-6 py-5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <Check className="h-4 w-4 text-[#1a6b3d]" strokeWidth={2.5} />
            Fixed quote upfront
          </span>
          <span className="inline-flex items-center gap-2">
            <Check className="h-4 w-4 text-[#1a6b3d]" strokeWidth={2.5} />
            No hidden fees
          </span>
          <span className="inline-flex items-center gap-2">
            <Check className="h-4 w-4 text-[#1a6b3d]" strokeWidth={2.5} />
            SEO and speed included
          </span>
          <span className="inline-flex items-center gap-2">
            <Check className="h-4 w-4 text-[#1a6b3d]" strokeWidth={2.5} />
            Reply within 24 hours
          </span>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Not sure which one fits?{" "}
          <Link href="/contact" className="font-semibold text-[#1a6b3d] hover:underline">
            Tell me your goal
          </Link>{" "}
          and I will point you the right way.
        </p>
      </div>
    </section>

    {/* ===== BLOG / KNOWLEDGE ===== */}
    <section className="bg-[var(--panel-2)] px-6 py-20 text-foreground lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        {/* header */}
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d]">
              <span className="h-2 w-2 rounded-full bg-[#1a6b3d]" />
              Knowledge &amp; Tips
            </p>
            <h2 className="mt-5 text-5xl font-extrabold uppercase leading-[0.92] tracking-tight sm:text-6xl">
              Build smarter
              <br />
              sites
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-white hover:text-black"
          >
            All articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.cover}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col bg-card p-6 transition-colors duration-300 group-hover:bg-[#1a6b3d]">
                <span className="w-fit bg-gradient-to-r from-[#15703a] to-[#4cb45a] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white transition-colors group-hover:bg-white group-hover:text-[#1a6b3d]">
                  {post.category}
                </span>
                <h3 className="mt-4 text-xl font-bold leading-snug text-foreground">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/90">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground transition-colors group-hover:text-muted-foreground">
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a6b3d] transition-colors group-hover:text-foreground">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ===== FAQ ===== */}
    <section className="bg-[var(--panel-2)] px-6 py-20 text-foreground lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:gap-16">
        {/* left — heading + description + image */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d]">
            <span className="h-2 w-2 rounded-full bg-[#1a6b3d]" />
            FAQ
          </p>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Got questions?
            <br />
            I&apos;ve got answers.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Everything you need to know before we start working together. Still unsure about
            something? Just reach out — I reply within 24 hours.
          </p>
          <Image
            src="/desk-code.png"
            alt="Late-night development workspace"
            width={1536}
            height={1024}
            className="mt-8 aspect-[16/10] w-full rounded-3xl border border-border object-cover shadow-xl"
          />
        </div>

        {/* right — accordion */}
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow open:shadow-lg [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 bg-card px-6 py-5 text-base font-semibold text-foreground transition-colors hover:text-[#1a6b3d] group-open:bg-[#1a6b3d] group-open:text-white group-open:hover:text-white sm:text-lg">
                <span className="flex items-center gap-4"><span className="font-mono text-sm opacity-60">{String(i + 1).padStart(2, "0")}</span>{f.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-current/20 transition-transform group-open:rotate-45"><Plus className="h-4 w-4" /></span>
              </summary>
              <div className="bg-[var(--panel)] px-6 py-5 pl-[4.25rem] text-[15px] leading-relaxed text-muted-foreground">{f.a}</div>
            </details>
          ))}
          <div className="flex flex-col gap-4 rounded-2xl bg-[#1a6b3d]/10 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold">Still have a question? I reply within 24 hours.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#15703a] to-[#4cb45a] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#06210f] transition-opacity hover:opacity-90">
              Ask me <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* ===== CONTACT ===== */}
    <section className="bg-[var(--panel)] px-6 py-20 text-foreground lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:gap-16">
        {/* left — heading + description */}
        <div>
          <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d]">
            <span className="h-2 w-2 rounded-full bg-[#1a6b3d]" />
            Contact
          </p>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Let&apos;s start
            <br />
            your project
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Tell me about what you need and I&apos;ll get back to you within 24 hours — with a clear
            plan and a fixed quote. No obligation, just an honest next step.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              { Icon: Mail, label: "Email", value: "raoasifriyasat@gmail.com", href: "mailto:raoasifriyasat@gmail.com" },
              { Icon: Phone, label: "Phone / WhatsApp", value: "0308 8663440", href: "tel:+923088663440" },
              { Icon: Globe, label: "Availability", value: "Worldwide — 100% remote" },
            ].map(({ Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#1a6b3d]/10 text-[#1a6b3d] transition-colors group-hover:bg-[#1a6b3d] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
                    <span className="block font-semibold text-foreground">{value}</span>
                  </span>
                </>
              );
              const cls = "group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors";
              return (
                <li key={label}>
                  {href ? (
                    <a href={href} className={cls + " hover:border-[#1a6b3d]/60"}>{inner}</a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* right — form */}
        <div className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-10">
          <h3 className="mb-6 text-xl font-extrabold">Send me a message</h3>
          <HireContactForm />
        </div>
      </div>
    </section>
    </main>

    {/* ===== FOOTER ===== */}
    <HireFooter />
    </>
  );
}
