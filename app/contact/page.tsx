import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Plus,
  ArrowRight,
  Check,
} from "lucide-react";
import { HireHero } from "@/components/portfolio/hire-hero";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { ContactForm } from "@/components/portfolio/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema, breadcrumbSchema, businessSchema } from "@/lib/schema";

const EMAIL = "raoasifriyasat@gmail.com";
const PHONE = "03088663440";
const PHONE_HREF = "+923088663440";
const WHATSAPP = "https://wa.me/923088663440";

export const metadata: Metadata = {
  title: "Contact Asif | Freelance Web Developer & SEO Specialist",
  description:
    "Tell me about your project and get a reply within 24 hours with a clear plan and a fixed quote. Web development, SEO, e-commerce, and ongoing support. Remote, worldwide.",
  alternates: { canonical: "/contact" },
  openGraph: {
    images: ["/og.jpg"],
    title: "Contact Asif | Let's build something that works",
    description:
      "Tell me about your project and get a reply within 24 hours with a clear plan and a fixed quote. Web development, SEO, e-commerce, and ongoing support.",
  },
};

const INFO = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: WHATSAPP },
  { icon: Phone, label: "Phone", value: PHONE, href: `tel:${PHONE_HREF}` },
  { icon: Clock, label: "Response time", value: "Within 24 hours" },
  { icon: MapPin, label: "Location", value: "Remote, worldwide" },
];

const STEPS = [
  {
    n: "01",
    title: "I reply within 24 hours",
    desc: "You send the form, I read it the same day and get back to you within 24 hours, usually much sooner. A real reply from me, not an auto responder.",
  },
  {
    n: "02",
    title: "A quick discovery chat",
    desc: "We hop on a short call or message to go over your goals, scope, and timeline. No pressure and no sales script, just a clear conversation.",
  },
  {
    n: "03",
    title: "A written plan and fixed quote",
    desc: "I send you a plan with exactly what I will build, how long it takes, and a fixed price. You know the full cost upfront with no hidden fees.",
  },
  {
    n: "04",
    title: "We start building",
    desc: "Once you are happy with the plan, I get to work and keep you updated at every step until your site is live and performing.",
  },
];

const INCLUDE = [
  "What you need: a new site, a redesign, an online store, SEO, or fixes to an existing site.",
  "A little about your business and who your customers are.",
  "Any deadline or launch date you are working towards.",
  "A rough budget range, if you have one in mind.",
  "Links to your current site or a few sites you like the look of.",
];

const SERVICES = [
  {
    title: "Web Development",
    desc: "Fast, SEO-ready websites and web apps in WordPress, Shopify, Laravel, and Next.js.",
    href: "/services/web-development",
  },
  {
    title: "Web App Development",
    desc: "Custom dashboards, SaaS platforms, portals, and APIs built on MERN, Next.js, or Laravel.",
    href: "/services/web-apps",
  },
  {
    title: "Mobile App Development",
    desc: "iOS and Android apps built with React Native, from first version to app store launch.",
    href: "/services/mobile-apps",
  },
  {
    title: "Marketing & SEO",
    desc: "Technical SEO, on-page work, and paid campaigns that get you found and bring in leads.",
    href: "/services/marketing",
  },
  {
    title: "E-commerce & Automation",
    desc: "Online stores built to sell, plus automation that saves you hours every week.",
    href: "/services/ecommerce",
  },
  {
    title: "Support & Maintenance",
    desc: "Updates, backups, security, and speed tuning that keep your site healthy after launch.",
    href: "/services/support-maintenance",
  },
  {
    title: "Website Rescue & Launch",
    desc: "Restore a site that went down, fix WordPress errors, or get a self-built or AI-built project live.",
    href: "/services/website-rescue",
  },
  {
    title: "Industry Websites",
    desc: "Sites built around one trade — landscaping, construction, roofing, real estate, and more.",
    href: "/industries",
  },
];

const FAQ = [
  {
    q: "How long does a project take?",
    a: "Most websites take 1 to 4 weeks depending on scope. A landing page can be a few days, while a custom web app or store takes longer. You will get a clear timeline before we start.",
  },
  {
    q: "How much do you charge?",
    a: "Every project is different, so I quote a fixed price after a quick chat about what you need. No hidden fees, you will know the full cost upfront.",
  },
  {
    q: "Which services do you offer?",
    a: "Four core services: web development, marketing and SEO, e-commerce and automation, and ongoing support and maintenance. If you are not sure which one fits, just tell me your goal and I will point you the right way.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. I offer flexible maintenance plans for updates, backups, security, and small changes, so your site stays fast and secure long after it goes live.",
  },
  {
    q: "Will my site be fast and SEO ready?",
    a: "Always. Clean code, proper meta tags, schema, and Core Web Vitals tuning are built into every project, not charged as an extra.",
  },
  {
    q: "Do you work with clients worldwide?",
    a: "Yes, I work fully remote with clients across every timezone. Communication stays clear and consistent from the first message to launch.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d]">
      <span className="h-2 w-2 rounded-full bg-[#1a6b3d]" />
      {children}
    </p>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          businessSchema(),
          faqSchema(FAQ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <HireHero
        bgImage="/desk-calm.png"
        small="Let's talk"
        title="Get in touch"
        taglineTitle="Tell me about your project."
        taglineText="Send one message and get a reply within 24 hours with a clear plan and a fixed quote. No obligation, just an honest next step."
        primaryCta={{ label: "Start your project", href: "#contact-form" }}
        secondaryCta={{ label: "View services", href: "/services" }}
      />

      <main className="bg-background text-foreground">
        {/* ===== INTRO ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Say hello</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Whatever you are building, I would love to hear about it
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              A new website, a store that needs to sell more, a site that finally has to rank, or a
              build someone else left half done. Tell me what you need in a few lines and I will come
              back with a clear plan, a timeline, and a fixed price you can trust.
            </p>
          </div>
        </section>

        {/* ===== CONTACT DETAILS + FORM ===== */}
        <section
          id="contact-form"
          className="ambient-grid relative scroll-mt-24 overflow-clip px-6 py-20 lg:px-10 lg:py-24"
        >
          {/* light theme: mint wash with dots behind the form */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#eaf4ee_100%)] dark:hidden"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(26,107,61,0.16)_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:linear-gradient(to_left,black,transparent_60%)] dark:hidden"
          />
          <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:gap-16">
            {/* left: info */}
            <div>
              <Eyebrow>Contact details</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Reach me directly
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Prefer email or a quick WhatsApp instead of the form? Here is everything you need to
                reach me.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {INFO.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-[#1a6b3d]/40">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#1a6b3d]/25 bg-[#1a6b3d]/10 text-[#1a6b3d]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </div>
                        <div className="mt-1 text-sm font-medium text-foreground">{item.value}</div>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              {/* response promise */}
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#1a6b3d]/25 bg-[#1a6b3d]/5 p-5">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#1a6b3d] text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Every message gets a real reply.</span>{" "}
                  Within 24 hours, from me, never a bot. If it does not fit what I do, I will still
                  point you in the right direction.
                </p>
              </div>
            </div>

            {/* right: form */}
            <div className="relative overflow-hidden rounded-[1.75rem] border bg-white p-6 shadow-2xl shadow-[#1a6b3d]/15 dark:bg-[#0b0f0d] dark:shadow-black/50 sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#1a6b3d]/12 blur-3xl dark:bg-[#1a6b3d]/30"
              />
              <h2 className="relative text-xl font-bold text-foreground">Send a message</h2>
              <p className="relative mt-2 text-sm text-muted-foreground">
                Fill this in and I will get back to you within 24 hours.
              </p>
              <div className="relative mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHAT HAPPENS NEXT ===== */}
        <section className="ambient-glow bg-[#f6faf7] px-6 dark:bg-[var(--panel)] py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>What happens next</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                From your message to launch
              </h2>
              <p className="mt-4 text-muted-foreground">
                No black box and no waiting around. Here is exactly what happens after you hit send.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <div
                  key={s.n}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <span className="font-mono text-xl font-extrabold text-[#1a6b3d]">{s.n}</span>
                  <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHAT TO INCLUDE ===== */}
        <section className="ambient-dots px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Not sure what to write?</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                A few lines is all it takes
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                You do not need a full brief or a spec document. The more you can share, the faster I
                can give you an accurate plan and quote, but even a rough idea is a great start.
              </p>
            </div>
            <ul className="space-y-3">
              {INCLUDE.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[#1a6b3d]/25 bg-[#1a6b3d]/10 text-[#1a6b3d]">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== SERVICE QUICK LINKS ===== */}
        <section className="ambient-glow bg-[#f6faf7] px-6 dark:bg-[var(--panel)] py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>What can I help with?</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Pick a starting point
              </h2>
              <p className="mt-4 text-muted-foreground">
                Not sure which one fits? Just say so in your message and I will guide you.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-[#1a6b3d]/50"
                >
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1a6b3d]">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="ambient-grid px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Questions before you reach out
              </h2>
            </div>
            <div className="mt-12 space-y-3">
              {FAQ.map((item) => (
                <details
                  key={item.q}
                  className="group overflow-hidden rounded-xl border border-border [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 bg-card px-5 py-4 text-sm font-semibold text-foreground transition-colors group-open:bg-[#1a6b3d] group-open:text-white sm:text-base">
                    {item.q}
                    <Plus className="h-5 w-5 shrink-0 transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="bg-[var(--panel)] px-5 py-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-4xl rounded-3xl border border-[#1a6b3d]/30 bg-gradient-to-b from-[var(--panel-2)] to-[var(--panel)] p-10 text-center sm:p-14">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready when you are
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Tell me what you are building and I will reply within 24 hours with a clear plan and a
              fixed quote. No obligation, just an honest next step.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="#contact-form"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105"
              >
                Send a message
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-bold text-foreground transition-colors hover:bg-foreground/10"
              >
                Email me instead
              </a>
            </div>
          </div>
        </section>
      </main>
      <HireFooter />
    </>
  );
}
