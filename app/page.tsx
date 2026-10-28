import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Plus,
  Rocket,
  Code2,
  ShieldCheck,
  Headphones,
  Globe,
  Zap,
  MessageSquare,
  Search,
  Layers,
  CheckCircle2,
  Mail,
  Phone,
  LifeBuoy,
  Smartphone,
  PenTool,
  Share2,
  Gem,
  MonitorSmartphone,
  Wrench,
  PackageCheck,
} from "lucide-react";
import { getSortedPosts } from "@/lib/blog-data";
import { HireContactForm } from "@/components/portfolio/hire-contact-form";
import { HeroVideo } from "@/components/portfolio/hero-video";
import { HireNav } from "@/components/portfolio/hire-nav";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { HomeWork } from "@/components/portfolio/home-work";
import { TechMarquee } from "@/components/portfolio/tech-marquee";
import { Testimonials } from "@/components/portfolio/testimonials";
import { TESTIMONIALS } from "@/lib/testimonials";
import { ProcessTimeline, type ProcessStep } from "@/components/portfolio/process-timeline";
import { JsonLd } from "@/components/seo/json-ld";
import { personSchema, businessSchema, websiteSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Full-Stack Developer | Web Apps, Laravel, WordPress & Shopify | Asif.dev",
  description:
    "Full-stack developer building custom web apps, online stores, and business websites with MERN, Laravel, WordPress, and Shopify. Fast, SEO-ready builds with fixed quotes and 24h replies.",
  alternates: { canonical: "/" },
  openGraph: {
    images: ["/og.jpg"],
    title: "Full-Stack Developer for Web Apps, E-commerce & Websites",
    description:
      "Custom web apps, online stores, and business websites built with MERN, Laravel, WordPress, and Shopify — fast, SEO-ready, and built to bring in clients.",
  },
};

// Shown in the hero on mobile (desktop shows the compact proof row instead).
const HERO_STATS = [
  { icon: Rocket, num: "50+", label: "Projects Completed" },
  { icon: Code2, num: "5+", label: "Years of Experience" },
  { icon: ShieldCheck, num: "100%", label: "Client Satisfaction" },
  { icon: Headphones, num: "24/7", label: "Support & Maintenance" },
];

/* The six services shown on the home page, each linking to its own page.
   `tone` gives the grid its rhythm: plain cards with a tinted, a brand and an ink card mixed in. */
type Tone = "plain" | "tint" | "brand" | "ink";
const SERVICES: { icon: typeof Code2; title: string; desc: string; href: string; tone: Tone }[] = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, responsive websites, web apps, and online stores — WordPress, Shopify, Laravel, and custom builds shaped around your goals.",
    href: "/services/web-development",
    tone: "plain",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Web and mobile apps built from the scope up — user journeys, interface, development, and release, planned before code starts.",
    href: "/services/app-development",
    tone: "tint",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Interface design built on user flows, wireframes, and prototypes, so your product is obvious to use and consistent everywhere.",
    href: "/services/ui-ux-design",
    tone: "brand",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Search optimisation grounded in your audience — technical fixes, content that answers real questions, and honest reporting on what moved.",
    href: "/services/marketing",
    tone: "plain",
  },
  {
    icon: Share2,
    title: "Social Media & Ads",
    desc: "Facebook and Instagram campaigns built around a real offer, tracked honestly from first spend — creative, targeting, and landing pages together.",
    href: "/services/social-media-ads",
    tone: "ink",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    desc: "Hosting, security updates, backups, uptime monitoring, and ongoing fixes — so your website keeps working instead of quietly breaking.",
    href: "/services/support-maintenance",
    tone: "plain",
  },
];

/* Card, icon, number and button classes for each tone. Ink inverts in dark mode so it still stands out. */
const TONE: Record<Tone, { card: string; icon: string; num: string; text: string; btn: string }> = {
  plain: {
    card: "border bg-card text-foreground",
    icon: "bg-[#1a6b3d] text-white",
    num: "text-[#1a6b3d]",
    text: "text-muted-foreground",
    btn: "border text-foreground group-hover:border-transparent group-hover:bg-[#1a6b3d] group-hover:text-white",
  },
  tint: {
    card: "bg-[#e8f3ec] text-neutral-950 dark:bg-[#0e2117] dark:text-white",
    icon: "bg-white text-[#1a6b3d] shadow-sm dark:bg-white/10 dark:text-white",
    num: "text-[#1a6b3d] dark:text-white/70",
    text: "text-neutral-600 dark:text-white/70",
    btn: "bg-white text-neutral-950 shadow-sm group-hover:bg-[#1a6b3d] group-hover:text-white dark:bg-white/10 dark:text-white",
  },
  brand: {
    card: "bg-[#1a6b3d] text-white shadow-xl shadow-[#1a6b3d]/25",
    icon: "bg-white/15 text-white",
    num: "text-white/70",
    text: "text-white/80",
    btn: "bg-white/15 text-white ring-1 ring-white/25 group-hover:bg-white group-hover:text-[#1a6b3d]",
  },
  ink: {
    card: "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950",
    icon: "bg-white/10 text-white dark:bg-[#1a6b3d] dark:text-white",
    num: "text-white/60 dark:text-[#1a6b3d]",
    text: "text-white/75 dark:text-neutral-600",
    btn: "bg-[#1a6b3d] text-white group-hover:bg-white group-hover:text-neutral-950 dark:group-hover:bg-neutral-950 dark:group-hover:text-white",
  },
};

/* What every build is held to — shown as a centred 4×2 grid after the About section. */
const QUALITY: { icon: typeof Code2; title: string; desc: string }[] = [
  { icon: Gem, title: "Purposeful Solutions", desc: "Every build starts from your goals and your customers, not from a template someone else used." },
  { icon: MonitorSmartphone, title: "Thoughtful UX", desc: "Clear layouts and easy navigation on every screen size, so visitors find what they came for." },
  { icon: Zap, title: "Performance First", desc: "Fast pages and lean code are part of the build from day one, not a fix at the end." },
  { icon: Search, title: "SEO-Ready Foundations", desc: "Clean structure, proper metadata, and schema so search engines understand the site from launch." },
  { icon: MessageSquare, title: "Clear Communication", desc: "You know what is being built, why, and what happens next — in plain language, every week." },
  { icon: Headphones, title: "Support After Launch", desc: "Updates, fixes, and improvements when you need them, from the person who built the site." },
  { icon: Wrench, title: "Flexible by Design", desc: "A simple business site or a custom platform — the approach follows what you actually need." },
  { icon: PackageCheck, title: "Careful Delivery", desc: "Tested, documented, and handed over in a way your team can maintain as the business grows." },
];

const WHY: { icon: typeof Code2; title: string; desc: string; outcome: string }[] = [
  {
    icon: Code2,
    title: "One developer, full stack",
    desc: "Design, front-end, back-end, and deployment handled by the same person. No handoffs, no lost details, no finger-pointing.",
    outcome: "Nothing lost between handoffs",
  },
  {
    icon: Zap,
    title: "Built for performance",
    desc: "Fast loads and strong Core Web Vitals are the starting point on every build — never an upsell.",
    outcome: "Fast pages from day one",
  },
  {
    icon: ShieldCheck,
    title: "Clean, maintainable code",
    desc: "Readable, documented code that you — or any developer after me — can work with without a rewrite.",
    outcome: "Easy to build on later",
  },
  {
    icon: MessageSquare,
    title: "Straight communication",
    desc: "A fixed quote before work starts, replies within 24 hours, and progress you can see every week.",
    outcome: "You always know what's next",
  },
  {
    icon: Rocket,
    title: "Business-first decisions",
    desc: "I recommend the stack that fits your goals and budget — not the one that makes the invoice bigger.",
    outcome: "The right stack for your budget",
  },
  {
    icon: Headphones,
    title: "Support after launch",
    desc: "Updates, backups, monitoring, and small changes taken care of, so launch day is the start, not the end.",
    outcome: "A site that keeps working",
  },
];

const PROCESS: ProcessStep[] = [
  {
    icon: Search,
    title: "Discovery",
    desc: "We talk through your business, your customers, and what the project needs to achieve. You get a clear scope and a fixed quote.",
  },
  {
    icon: Layers,
    title: "Planning",
    desc: "Pages or features are mapped, the right stack is chosen, and we agree the structure before anything is designed or built.",
  },
  {
    icon: PenTool,
    title: "Design & Build",
    desc: "The agreed design is built in stages on a live preview link, so you can see and comment on real progress every week.",
  },
  {
    icon: CheckCircle2,
    title: "Testing",
    desc: "Forms, layouts on every device, speed, and SEO basics are checked and fixed before anyone else sees the site.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    desc: "The site goes live with a full handover, and I stay on hand for updates, fixes, and the next round of improvements.",
  },
];

/* The three newest real articles, straight from the blog. */
const POSTS = getSortedPosts().slice(0, 3);

const FAQS = [
  {
    q: "What kind of projects do you take on?",
    a: "Three main types: custom web applications on MERN, Next.js, or Laravel; online stores on Shopify and WooCommerce; and fast business websites on WordPress. If your project spans more than one of those, that is normal — it is exactly why I work full stack.",
  },
  {
    q: "How long does a project take?",
    a: "A business site is usually 1–3 weeks. A store depends on catalogue size, typically 2–4 weeks. Custom web apps are scoped in phases and start from about 4 weeks. You get a clear timeline before we start.",
  },
  {
    q: "How much do you charge?",
    a: "Every project gets a fixed quote after a quick chat about your goals — scope, timeline, and price written down before any work starts, so there are no surprises. Use the budget field on the contact form to give me a rough range.",
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
    q: "My website went down or I can't get it live. Can you help?",
    a: "Yes. I restore sites after a domain or hosting expiry, fix WordPress errors like 503s caused by plugins, and plan and deploy sites people have built themselves — including projects written with AI tools. Send me the domain and what happened, and you get a fixed quote within 24 hours.",
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
    <section className="relative overflow-hidden bg-[#f3f8f5] dark:bg-black">
      {/* Ground. A soft brand-green wash with a faint grid by day, near-black by night —
          the video sits in the card on the right, so the copy never fights it. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#f7fbf9_0%,#e8f3ec_55%,#d3eadb_100%)] dark:bg-[linear-gradient(135deg,#000_0%,#020905_60%,#06150d_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-48 h-[680px] w-[680px] rounded-full bg-[#1a6b3d]/20 blur-3xl dark:bg-[#1a6b3d]/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(26,107,61,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(26,107,61,0.08)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_85%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)]"
      />

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col px-6 lg:px-10">
        <HireNav />

        <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
          {/* ---------- copy ---------- */}
          <div className="flex flex-col justify-center">
            <p className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[#1a6b3d]/30 bg-[#1a6b3d]/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#1a6b3d] dark:border-[#1a6b3d]/60 dark:bg-[#1a6b3d]/15 dark:text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1a6b3d] dark:bg-[#1a6b3d]" />
              Full-Stack Developer · Open for New Projects
            </p>

            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.04] tracking-tight text-neutral-950 dark:text-white sm:text-5xl lg:text-[3.4rem]">
              Full-Stack Developer for{" "}
              <span className="text-[#1a6b3d] dark:text-[#1a6b3d]">Web Apps</span>{" "}
              &amp; Online Stores
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-white/70 sm:text-lg">
              I design, build, and launch websites, web apps, and online stores for growing
              businesses — with MERN, Laravel, WordPress, and Shopify, from first idea to launch
              and beyond.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] px-7 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105"
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

            {/* quick proof — desktop (mobile gets the stat list below) */}
            <ul className="mt-8 hidden max-w-xl flex-wrap gap-x-7 gap-y-2 font-mono text-xs text-neutral-600 dark:border-white/15 dark:text-white/60 lg:flex">
              {["50+ Delivered", "5+ Years Experience", "24h Rapid Response"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#1a6b3d] dark:bg-[#1a6b3d]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- video card + floating proof ----------
              A fixed tall portrait card, independent of how long the copy runs. */}
          <div className="relative mx-auto w-full max-w-md lg:ml-auto lg:mr-0 lg:max-w-[560px]">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/60 p-2 shadow-2xl shadow-[#1a6b3d]/15 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-neutral-900">
                <HeroVideo />
              </div>
            </div>

            {/* projects — left */}
            <div className="absolute -left-3 top-1/3 rounded-2xl border border-neutral-200 bg-white px-5 py-3.5 dark:border-white/10 dark:bg-[#0d0d0d] lg:-left-8">
              <div className="text-2xl font-extrabold text-[#1a6b3d] dark:text-[#1a6b3d]">50+</div>
              <div className="mt-0.5 text-xs text-neutral-600 dark:text-white/60">
                Projects Delivered
              </div>
            </div>

            {/* rating — bottom right */}
            <div className="absolute -right-3 bottom-10 rounded-2xl border border-neutral-200 bg-white px-5 py-3.5 dark:border-white/10 dark:bg-[#0d0d0d] lg:-right-8">
              <div className="text-2xl font-extrabold text-[#1a6b3d] dark:text-[#1a6b3d]">5★</div>
              <div className="mt-0.5 text-xs text-neutral-600 dark:text-white/60">Client Rating</div>
            </div>
          </div>
        </div>

        {/* mobile stats */}
        <div className="py-4 lg:hidden">
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
    </section>

    {/* ===== TECHNOLOGIES — logo marquee ===== */}
    <TechMarquee />

    {/* ===== SERVICES — one grid, six doors in ===== */}
    <section className="ambient-glow bg-[var(--panel)] px-6 py-20 text-foreground lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d]">
              <span className="h-2 w-2 rounded-full bg-[#1a6b3d]" />
              Services
            </p>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Everything your business
              <br />
              needs <span className="text-[#1a6b3d]">online</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground lg:justify-self-end">
            From your first website to your next product — focused services built around your
            goals, not a one-size-fits-all package.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((sv, i) => {
            const Icon = sv.icon;
            const t = TONE[sv.tone];
            return (
              <Link
                key={sv.title}
                href={sv.href}
                className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/10 sm:p-8 ${t.card}`}
              >
                <div className="flex items-start justify-between">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${t.icon}`}>
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <span className={`font-mono text-xs font-bold ${t.num}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-extrabold tracking-tight">{sv.title}</h3>
                <p className={`mt-3 flex-1 text-sm leading-relaxed ${t.text}`}>{sv.desc}</p>
                <span
                  className={`mt-7 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-colors ${t.btn}`}
                >
                  Explore service
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>

    {/* ===== RESCUE STRIP — for visitors arriving with a broken or unlaunched site ===== */}
    <section className="bg-background px-6 pb-4 text-foreground lg:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 rounded-3xl border bg-gradient-to-br from-[#1a6b3d]/[0.12] to-transparent p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-5">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#1a6b3d] text-white">
            <LifeBuoy className="h-6 w-6" />
          </span>
          <div>
            <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl">
              Website down, broken, or stuck before launch?
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Domain or hosting expired, a WordPress 503 after a plugin update, or a site you built
              yourself — even with AI — that you can&apos;t get live. I restore, fix, and deploy it.
            </p>
          </div>
        </div>
        <Link
          href="/services/website-rescue"
          className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] py-2 pl-6 pr-2 text-sm font-bold text-white lg:self-auto"
        >
          Get my site back
          <span className="grid h-8 w-8 place-items-center rounded-full bg-black/85 ring-1 ring-white/15">
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </section>

    {/* ===== ABOUT ME ===== */}
    <section className="ambient-dots relative overflow-hidden bg-[#f6faf7] text-foreground dark:bg-[var(--panel-2)]">
      {/* light theme: soft mint wash, dot texture and a glow — distinct from the hero's grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#eef6f1_100%)] dark:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(26,107,61,0.14)_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:linear-gradient(to_right,black,transparent_70%)] dark:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#1a6b3d]/15 blur-3xl dark:hidden"
      />
      <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-24">
        {/* LEFT — about me */}
        <div>
          <span className="inline-block rounded-full border border-border px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            About Me
          </span>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
            Hi, I&apos;m <span className="text-[#1a6b3d]">Asif</span>, a developer who ships.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            For 5+ years I have built web apps, online stores, and business websites for clients in
            the US, UK, Australia, the UAE, and Pakistan. I work across the full stack — React, Node,
            and Laravel for custom products; WordPress and Shopify for content and commerce — so every
            project gets the right tool instead of being forced into the same one.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            I focus on what moves your numbers: fast pages, solid search rankings, clean code, and
            interfaces that turn visitors into clients. You always know what is being built, why,
            and what it costs — no black box, no bloated templates.
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
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] py-3 pl-6 pr-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
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
          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-[#1a6b3d]/20 ring-1 ring-black/5 dark:rounded-2xl dark:shadow-none dark:ring-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/asif-laptop.webp" alt="Asif working" className="w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>

    {/* ===== QUALITY — eight things every build is held to ===== */}
    <section className="relative overflow-clip bg-[#f3f8f5] px-6 py-20 text-foreground dark:bg-[#05120b] lg:px-10 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#1a6b3d]/15 blur-3xl dark:bg-[#1a6b3d]/35"
      />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#1a6b3d] shadow-sm dark:bg-white/10 dark:text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1a6b3d] dark:bg-white" />
            Built on quality
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Built on quality,
            <br />
            purpose and <span className="font-serif font-normal italic text-[#1a6b3d] dark:text-white/85">care.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {QUALITY.map((q) => {
            const Icon = q.icon;
            return (
              <div
                key={q.title}
                className="group flex flex-col items-center rounded-3xl border bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1a6b3d]/10 dark:bg-white/[0.04] dark:shadow-none"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#1a6b3d]/10 text-[#1a6b3d] transition-colors group-hover:bg-[#1a6b3d] group-hover:text-white dark:bg-[#1a6b3d]/30 dark:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 text-base font-bold tracking-tight">{q.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{q.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ===== WORK — pinned, one card per scroll step ===== */}
    <section className="bg-background px-6 text-foreground lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <HomeWork
          header={
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
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] py-2 pl-6 pr-2 text-xs font-bold uppercase tracking-[0.16em] text-white"
              >
                All Work
                <span className="grid h-8 w-8 place-items-center rounded-full bg-black/85 ring-1 ring-white/15">
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </span>
              </Link>
            </div>
          }
        />
      </div>
    </section>

    {/* ===== WHY CHOOSE ME — deep green band, sticky intro, numbered timeline ===== */}
    <section className="dark relative overflow-clip bg-[#0a1f14] px-6 py-20 text-white lg:px-10 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-[#1a6b3d]/30 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* LEFT — stays in view while the list scrolls past */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#1a6b3d]/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Why Work With Me
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            A small studio that
            <br />
            <span className="font-serif font-normal italic text-white/85">ships like a senior team.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            You work directly with the developer doing the work. No account managers, no
            hand-off, no disappearing once the invoice clears.
          </p>
          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] py-2 pl-6 pr-2 text-sm font-bold text-white"
          >
            Start a project
            <span className="grid h-8 w-8 place-items-center rounded-full bg-black/85 ring-1 ring-white/15">
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </span>
          </Link>
        </div>

        {/* RIGHT — numbered timeline */}
        <ol className="relative">
          {WHY.map((w, i) => {
            const Icon = w.icon;
            const last = i === WHY.length - 1;
            return (
              <li key={w.title} className="relative grid grid-cols-[auto_1fr_auto] gap-x-6 pb-12 last:pb-0">
                {/* connector to the next step */}
                {!last && (
                  <span aria-hidden="true" className="absolute left-[23px] top-12 h-[calc(100%-3rem)] w-px bg-white/15" />
                )}
                <span className="relative grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-[#0a1f14] font-mono text-sm font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-1.5">
                  <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{w.title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">{w.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1a6b3d]/45 px-3 py-1 text-xs font-semibold text-white">
                    <Icon className="h-3.5 w-3.5" />
                    {w.outcome}
                  </span>
                </div>
                <span className="hidden pt-1 font-serif text-4xl italic text-white/25 sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>

    {/* ===== PROCESS ===== */}
    <ProcessTimeline
      eyebrow="How it works"
      title="From your idea to a"
      titleAccent="working website"
      intro="A clear process keeps the project focused and makes it easy to know what happens next. Five steps, each with something you can see."
      steps={PROCESS}
      footnote="You always know which stage we are in and what comes next."
      cta={{ label: "Start your project", href: "/contact" }}
      bg="ambient-grid bg-[var(--panel)]"
    />

    {/* ===== BLOG / KNOWLEDGE ===== */}
    <section className="ambient-glow bg-[var(--panel-2)] px-6 py-20 text-foreground lg:px-10 lg:py-24">
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
                <span className="w-fit bg-[#1a6b3d] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white transition-colors group-hover:bg-white group-hover:text-[#1a6b3d]">
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

    {/* ===== TESTIMONIALS — hidden in production until every sample is replaced ===== */}
    {(process.env.NODE_ENV !== "production" || !TESTIMONIALS.some((t) => t.sample)) && (
      <Testimonials items={TESTIMONIALS} />
    )}

    {/* ===== FAQ ===== */}
    <section className="ambient-dots bg-[var(--panel-2)] px-6 py-20 text-foreground lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:gap-16">
        {/* left — heading + description, stays put while the questions scroll */}
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
            The questions clients ask most before we start. Anything else on your mind? Send a
            message — I reply within 24 hours.
          </p>
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
        </div>
      </div>
    </section>

    {/* ===== CONTACT ===== */}
    <section className="ambient-grid relative overflow-clip bg-[var(--panel)] px-6 py-20 text-foreground lg:px-10 lg:py-24">
      {/* light theme: mint wash rising from the bottom, a corner glow, and dots behind the form */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,#e3f1e8_0%,#ffffff_70%)] dark:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-[460px] w-[460px] rounded-full bg-[#1a6b3d]/15 blur-3xl dark:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-full bg-[radial-gradient(rgba(26,107,61,0.16)_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:linear-gradient(to_left,black,transparent_60%)] dark:hidden"
      />
      <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:gap-16">
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
            Tell me what you want to build and I&apos;ll reply within 24 hours with a clear plan and a
            fixed quote. No obligation — just an honest next step.
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
