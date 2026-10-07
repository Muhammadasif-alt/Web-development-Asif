import Link from "next/link";
import {
  Search,
  MapPin,
  Wrench,
  FileText,
  Link2,
  ShoppingBag,
  PenTool,
  Globe,
  TrendingUp,
  BarChart3,
  Clock,
  Users,
  ShieldCheck,
  Plus,
  ArrowRight,
  Check,
} from "lucide-react";
import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { Button } from "@/components/ui/button";
import { serviceImage } from "@/lib/services-data";

const STATS = [
  { value: "100+", label: "US businesses ranking" },
  { value: "48h", label: "Free audit delivered" },
  { value: "3–6 mo", label: "First ranking movement" },
  { value: "1 roof", label: "SEO + dev in-house" },
];

const SERVICES = [
  {
    icon: Search,
    title: "SEO Services",
    desc: "Full-scope organic search strategy built around your business goals. I audit your current position, find the highest-value opportunities, and build a campaign that grows your rankings, traffic, and revenue.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    desc: "Rank in the Google map pack and dominate local results in your city. I optimise your Google Business Profile, build consistent local citations, and create location-specific content.",
  },
  {
    icon: Wrench,
    title: "Technical SEO",
    desc: "Site speed, Core Web Vitals, crawl errors, indexation issues, broken links, duplicate content, and schema markup. I find every technical problem holding your site back and fix it.",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    desc: "Every page becomes a targeted asset. I align title tags, meta descriptions, header hierarchy, keyword placement, internal links, and content for the terms that matter.",
  },
  {
    icon: Link2,
    title: "Link Building",
    desc: "High-quality, white-hat backlinks from credible, relevant US sources that strengthen your domain authority and accelerate your rankings.",
  },
  {
    icon: ShoppingBag,
    title: "eCommerce SEO",
    desc: "Product page optimisation, category architecture, structured data, faceted navigation, and content strategy built for online stores.",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    desc: "Strategically written content that targets buyer-intent keywords, earns authority, and guides your audience from first search to final purchase.",
  },
  {
    icon: Globe,
    title: "WordPress Development",
    desc: "SEO-first WordPress websites and development support — new builds, landing pages, speed improvements, and technical fixes.",
  },
];

const PROCESS = [
  { step: "01", title: "Audit", desc: "I analyse your website and your competitors in depth to identify every issue, every gap, and every opportunity worth pursuing." },
  { step: "02", title: "Research", desc: "Deep keyword research and market analysis specific to your industry and location. I find exactly how your buyers search." },
  { step: "03", title: "Strategy", desc: "A customised SEO roadmap tailored to your business goals, your budget, and your competitive landscape." },
  { step: "04", title: "Execution", desc: "On-page improvements, technical fixes, content creation, and off-page authority building — all done properly, not outsourced." },
  { step: "05", title: "Reporting & Growth", desc: "Monthly reports track every result. As rankings grow, I find new opportunities and keep optimising." },
];

const CASES = [
  {
    tag: "Local Home Services — Texas",
    problem: "Consistent traffic but zero qualified leads from organic search.",
    did: ["Restructured the site architecture", "Built dedicated landing pages", "Fixed 47 critical technical errors"],
    results: [
      { value: "+214%", label: "Organic traffic" },
      { value: "+89%", label: "Qualified leads" },
    ],
  },
  {
    tag: "eCommerce Brand",
    problem: "Product pages stuck on pages 3–5, entirely dependent on paid media.",
    did: ["Rebuilt category & product architecture", "Rewrote content with keyword alignment", "Resolved Core Web Vitals issues"],
    results: [
      { value: "+156%", label: "Product page rankings" },
      { value: "$124k", label: "Added revenue" },
    ],
  },
];

const WHY = [
  { icon: TrendingUp, title: "Focused on real business growth", desc: "I don't chase rankings as a vanity metric. I optimise for outcomes that matter — qualified leads, booked appointments, and revenue from organic search." },
  { icon: BarChart3, title: "Reporting you can actually understand", desc: "Every month you get a clear report showing exactly what I did, what changed, and why it matters. No walls of SEO jargon." },
  { icon: Users, title: "SEO + web development together", desc: "Search strategy and WordPress development under one roof means faster implementation and better results." },
  { icon: ShieldCheck, title: "Built for US businesses", desc: "I understand how American consumers search and how to position your business to win at both local and national levels." },
];

const FAQ = [
  { q: "How long does SEO take to show results?", a: "Most clients start seeing clear movement in rankings and organic traffic within 3–6 months. Significant results typically show up between months 6–12." },
  { q: "What's included in the free SEO audit?", a: "A complete technical SEO analysis, on-page evaluation, keyword opportunity assessment, competitor ranking comparison, backlink profile review, and a prioritised roadmap." },
  { q: "Do you build WordPress websites too?", a: "Yes — WordPress development runs alongside the SEO work, so every site is designed with search performance as a priority from day one." },
  { q: "Do you work with US clients only?", a: "The primary focus is the US market, but I also work with international businesses specifically targeting US audiences." },
  { q: "How do you report progress?", a: "You receive a monthly report showing ranking changes, organic traffic movement, leads generated, work completed, and the plan ahead." },
  { q: "Can you guarantee first-page rankings?", a: "No ethical SEO specialist can guarantee specific rankings — Google controls its own algorithm. What I guarantee is honest, proven, white-hat work that moves the needle." },
];

export function SeoPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative flex min-h-[68vh] items-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={serviceImage("seo", 1920, 1080)}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
          <div className="relative mx-auto w-full max-w-5xl px-6 pt-32 pb-16 lg:pt-40">
            <nav className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
              <span>/</span>
              <Link href="/#services" className="transition-colors hover:text-foreground">Services</Link>
              <span>/</span>
              <span className="text-brand">SEO</span>
            </nav>

            <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-4 py-1.5 text-xs font-medium text-brand">
              <Search className="h-3.5 w-3.5" />
              Search Engine Optimisation
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-6xl">
              SEO services that turn{" "}
              <span className="text-brand">clicks into clients.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Your rankings are leaving money on the table. Thousands of buyers are searching for
              your service right now — let&apos;s make sure they find you, not your competitors.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">Get a free SEO audit</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-transparent text-foreground hover:bg-accent hover:text-foreground"
              >
                <a href="#results">View results</a>
              </Button>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-card/40">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-px px-6 py-2 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="px-4 py-8 text-center">
                <div className="text-3xl font-extrabold text-foreground sm:text-4xl">{s.value}</div>
                <div className="mt-1.5 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="mb-14 max-w-2xl">
              <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-brand">
                <span className="h-px w-8 bg-brand" />
                What I do
              </span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Everything your site needs to rank
              </h2>
              <p className="mt-4 text-muted-foreground">
                Ranking on page one is not luck — it&apos;s a strategy. Here&apos;s the full toolkit I
                use to get you there.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="flex flex-col rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-brand/40"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="mb-14 max-w-2xl">
              <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-brand">
                <span className="h-px w-8 bg-brand" />
                My process
              </span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                A clear path from audit to growth
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
              {PROCESS.map((p) => (
                <div
                  key={p.step}
                  className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6"
                >
                  <span className="pointer-events-none absolute -right-1 -top-3 select-none font-mono text-6xl font-bold leading-none text-foreground/[0.05]">
                    {p.step}
                  </span>
                  <div className="relative">
                    <span className="font-mono text-xs font-semibold text-brand">Step {p.step}</span>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDIES / RESULTS */}
        <section id="results" className="py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="mb-14 max-w-2xl">
              <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-brand">
                <span className="h-px w-8 bg-brand" />
                Real results
              </span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Rankings that turned into revenue
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {CASES.map((c) => (
                <div key={c.tag} className="rounded-2xl border border-border bg-card/50 p-7 sm:p-8">
                  <div className="font-mono text-xs uppercase tracking-[0.15em] text-brand">{c.tag}</div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">The problem:</span> {c.problem}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {c.did.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6">
                    {c.results.map((r) => (
                      <div key={r.label}>
                        <div className="text-3xl font-extrabold text-brand">{r.value}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE ME */}
        <section className="py-24">
          <div className="mx-auto max-w-[1440px] px-6">
            <div className="mb-14 max-w-2xl">
              <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-brand">
                <span className="h-px w-8 bg-brand" />
                Why work with me
              </span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                SEO that&apos;s honest, clear, and built to grow you
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {WHY.map((w) => {
                const Icon = w.icon;
                return (
                  <div key={w.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card/50 p-6">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{w.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-10 text-center">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-brand">FAQ</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                SEO questions, answered
              </h2>
            </div>
            <div className="space-y-3">
              {FAQ.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-border bg-card/50 p-5 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-medium text-foreground">
                    {item.q}
                    <Plus className="h-5 w-5 shrink-0 text-brand transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <div className="relative overflow-hidden rounded-3xl border border-brand/25 bg-brand/[0.06] p-10 text-center sm:p-14">
              <div className="relative">
                <div className="mx-auto flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-brand">
                  <Clock className="h-4 w-4" />
                  Free audit in 48 hours
                </div>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                  Ready to find out what your rankings are worth?
                </h2>
                <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                  Get a free, no-obligation SEO audit that shows exactly what&apos;s holding your
                  rankings back — and how to fix it.
                </p>
                <Button asChild size="lg" className="mt-8 rounded-full">
                  <Link href="/contact">
                    Start with a free audit <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
