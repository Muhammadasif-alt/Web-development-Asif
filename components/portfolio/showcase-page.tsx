import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCheck,
  Gem,
  Headset,
  Clock,
  ShieldCheck,
  Users,
  BadgeCheck,
  FileText,
  Award,
  Star,
} from "lucide-react";
import { HireNav } from "@/components/portfolio/hire-nav";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { ShowcaseForm } from "@/components/portfolio/showcase-form";
import { BeforeAfter } from "@/components/portfolio/before-after";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema, breadcrumbSchema, businessSchema } from "@/lib/schema";
import type { Industry } from "@/lib/industries-data";
import "./showcase-marquee.css";

/* Icons by position — copy differs per industry, the card shape does not. */
const CRED_ICONS: LucideIcon[] = [ShieldCheck, Users, BadgeCheck, CheckCheck, FileText];
const WHY_ICONS: LucideIcon[] = [Gem, Headset, Award, Clock];

const ACCENT = "text-[#1a6b3d] dark:text-[#1a6b3d]";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-[var(--sc-accent)] bg-[var(--sc-accent)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#1a6b3d] dark:text-[#1a6b3d]">
      {children}
    </span>
  );
}

function Heading({
  lead,
  accent,
  className = "",
}: {
  lead: string;
  accent: string;
  className?: string;
}) {
  return (
    <h2 className={`text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${className}`}>
      {lead} <span className={ACCENT}>{accent}</span>
    </h2>
  );
}

function Overlap({ main, small, alt }: { main: string; small: string; alt: string }) {
  return (
    <div className="relative pb-16 pr-10 sm:pr-16">
      <Image src={main} alt={alt} width={1536} height={1024} className="aspect-[4/3] w-full rounded-2xl object-cover" />
      <Image
        src={small}
        alt=""
        width={800}
        height={600}
        className="absolute bottom-0 right-0 aspect-[4/3] w-[55%] rounded-2xl border-4 border-background object-cover shadow-xl"
      />
    </div>
  );
}

export function ShowcasePage({ data }: { data: Industry }) {
  const sc = data.showcase;
  if (!sc) return null;
  const { images, theme } = sc;

  const style = {
    "--sc-accent": theme.accent,
    "--sc-text": theme.accentText,
    "--sc-bg": theme.bg,
    "--sc-ink": theme.ink,
    "--sc-dark": theme.dark,
    "--sc-light": "#1a6b3d",
  } as React.CSSProperties;

  const btn =
    "inline-flex items-center gap-2 rounded-lg bg-[var(--sc-accent)] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-opacity hover:opacity-90";

  return (
    <div style={style} className="min-h-screen bg-background text-foreground">
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

      {/* ===== SITE HEADER ===== */}
      <div className="border-b border-border bg-white text-neutral-900 dark:bg-black dark:text-white">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <HireNav />
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-[var(--sc-dark)] text-white">
        <Image src={images.hero} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />


        <div
          id="estimate"
          className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-12 px-6 pb-40 pt-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-10 lg:pb-48 lg:pt-16"
        >
          <div>
            <span className="inline-flex rounded-lg border border-[var(--sc-accent)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em]">
              {sc.hero.badge}
            </span>
            <h1 className="mt-7 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {sc.hero.title} <span className="text-[var(--sc-light)]">{sc.hero.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">{sc.hero.text}</p>
            <ul className="mt-7 space-y-2.5">
              {sc.hero.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm sm:text-base">
                  <CheckCheck className="h-5 w-5 text-[var(--sc-light)]" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#estimate" className={btn}>
                {sc.hero.primaryCta} <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                {sc.hero.secondaryCta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <ShowcaseForm
            heading={sc.hero.formHeading}
            services={sc.formServices}
            button="Send"
            source={`${data.name} — hero`}
          />
        </div>

        {/* slanted cream edge */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 h-20 bg-background sm:h-28"
          style={{ clipPath: "polygon(0 100%, 0 68%, 26% 0, 100% 52%, 100% 100%)" }}
        />
      </section>

      <main>
        {/* ===== INTRO ===== */}
        <section className="px-6 pb-20 pt-16 lg:px-10 lg:pt-20">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Overlap main={images.introMain} small={images.introSmall} alt={`${data.name} project`} />
            <div>
              <Pill>{sc.intro.eyebrow}</Pill>
              <Heading className="mt-6" lead={sc.intro.heading.lead} accent={sc.intro.heading.accent} />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                {sc.intro.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <ul className="mt-7 space-y-2.5">
                {sc.intro.checks.map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-sm font-medium sm:text-base">
                    <CheckCheck className={`h-5 w-5 ${ACCENT}`} />
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href="#estimate"
                className="mt-8 inline-flex rounded-lg bg-foreground px-6 py-3.5 text-sm font-bold text-background transition-opacity hover:opacity-85"
              >
                {sc.intro.cta}
              </a>
            </div>
          </div>
        </section>

        {/* ===== TICKER ===== */}
        <div className="overflow-hidden bg-[var(--sc-dark)] py-6 text-white" aria-hidden="true">
          <div className="sc-track">
            {[...sc.ticker, ...sc.ticker, ...sc.ticker, ...sc.ticker].map((t, i) => (
              <span key={i} className="flex shrink-0 items-center text-sm font-bold uppercase tracking-[0.2em] text-[var(--sc-light)]">
                <span className="px-8">{t}</span>
                <span className="text-xs">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ===== CREDENTIALS ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="text-center">
              <Pill>{sc.credentials.eyebrow}</Pill>
              <Heading className="mt-6" lead={sc.credentials.heading.lead} accent={sc.credentials.heading.accent} />
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {sc.credentials.items.map((c, i) => {
                const Icon = CRED_ICONS[i % CRED_ICONS.length];
                return (
                  <div key={c.title} className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
                    <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[var(--sc-accent)] text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-base font-bold">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section id="services" className="px-6 pb-20 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="text-center">
              <Pill>{sc.services.eyebrow}</Pill>
              <Heading className="mt-6" lead={sc.services.heading.lead} accent={sc.services.heading.accent} />
            </div>
            {sc.services.variant === "cards" ? (
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {sc.services.items.map((s) => (
                  <article key={s.title} className="flex flex-col rounded-xl border border-border bg-card p-4 shadow-lg">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        sizes="(min-width:768px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                      <h3 className="text-lg font-extrabold uppercase tracking-wide">{s.title}</h3>
                      {s.desc && <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>}
                      <a
                        href="#estimate"
                        className="mt-5 inline-flex w-fit rounded-md bg-[var(--sc-accent)] px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
                      >
                        Learn More
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {sc.services.items.map((s, i) => (
                <a key={s.title} href="#estimate" className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <span className="absolute left-4 top-4 grid h-8 w-8 place-items-center rounded-lg bg-black/80 text-xs font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="text-lg font-bold leading-snug">{s.title}</h3>
                    {s.desc && <p className="mt-2 text-sm text-white/80">{s.desc}</p>}
                    <span className="mt-4 flex items-center justify-between text-sm font-semibold">
                      <span className="border-b border-[var(--sc-accent)] pb-0.5">Learn More</span>
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition-colors group-hover:bg-[var(--sc-accent)]">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </span>
                  </div>
                </a>
              ))}
              <div className="flex flex-col rounded-2xl bg-[var(--sc-accent)] p-6 text-white">
                <h3 className="text-xl font-bold leading-snug">{sc.services.aside.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/90">{sc.services.aside.body}</p>
              </div>
            </div>
            )}
          </div>
        </section>

        {/* ===== BEFORE / AFTER ===== */}
        <section className="bg-[var(--sc-dark)] px-6 py-20 text-white lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1100px]">
            <div className="text-center">
              <Heading lead={sc.beforeAfter.heading.lead} accent={sc.beforeAfter.heading.accent} />
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                {sc.beforeAfter.body}
              </p>
            </div>
            <div className="mt-10">
              <BeforeAfter
                before={sc.beforeAfter.before}
                after={sc.beforeAfter.after}
                beforeLabel={sc.beforeAfter.beforeLabel}
                afterLabel={sc.beforeAfter.afterLabel}
                accent={theme.accent}
              />
            </div>
          </div>
        </section>

        {/* ===== WHY ===== */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Pill>{sc.why.eyebrow}</Pill>
              <Heading className="mt-6" lead={sc.why.heading.lead} accent={sc.why.heading.accent} />
              <div className="mt-8 space-y-4">
                {sc.why.items.map((w, i) => {
                  const Icon = WHY_ICONS[i % WHY_ICONS.length];
                  return (
                    <div key={w.title} className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--sc-accent)] text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold">{w.title}</h3>
                        <p className="text-sm text-muted-foreground">{w.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <Overlap main={images.whyMain} small={images.whySmall} alt={`${data.name} detail`} />
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section id="process" className="px-6 pb-20 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-[1440px]">
            <Pill>{sc.steps.eyebrow}</Pill>
            <Heading className="mt-6" lead={sc.steps.heading.lead} accent={sc.steps.heading.accent} />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {sc.steps.items.map((s, i) => (
                <div key={s.title} className="relative rounded-xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  {i < sc.steps.items.length - 1 && (
                    <span className="absolute -right-4 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-[var(--sc-accent)] text-white ring-8 ring-background lg:grid">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== REVIEWS ===== */}
        {sc.reviews && (
          <section className="px-6 pb-20 lg:px-10 lg:pb-24">
            <div className="mx-auto max-w-[1440px]">
              <div className="text-center">
                <Pill>{sc.reviews.eyebrow}</Pill>
                <Heading className="mt-6" lead={sc.reviews.heading.lead} accent={sc.reviews.heading.accent} />
                {sc.reviews.sample && (
                  <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Placeholder reviews — swap in real client feedback before launch
                  </p>
                )}
              </div>
              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {sc.reviews.items.map((r, i) => (
                  <figure key={i} className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex gap-0.5 text-yellow-400">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{r.text}</blockquote>
                    <figcaption className="mt-5 flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--sc-accent)] text-sm font-bold text-white">
                        {r.name[0]}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">{r.name}</span>
                        <span className="block text-xs text-muted-foreground">{r.role}</span>
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===== FAQ ===== */}
        <section id="faq" className="px-6 pb-20 lg:px-10 lg:pb-24">
          <div className="mx-auto grid max-w-[1440px] items-start gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <Pill>{sc.faq.eyebrow}</Pill>
              <Heading className="mt-6" lead={sc.faq.heading.lead} accent={sc.faq.heading.accent} />
              <div className="mt-8 space-y-3">
                {data.faqs.map((f, i) => (
                  <details
                    key={f.q}
                    open={i === 0}
                    className="group rounded-xl border border-border bg-card [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-sm font-bold sm:text-base">
                      {f.q}
                      <span className={`text-xl transition-transform group-open:rotate-45 ${ACCENT}`}>+</span>
                    </summary>
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
            <Image
              src={images.faq}
              alt={`${data.name} project`}
              width={1536}
              height={1024}
              className="h-full max-h-[620px] w-full rounded-2xl object-cover"
            />
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="px-6 pb-20 lg:px-10 lg:pb-24">
          <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-3xl bg-[var(--sc-dark)] text-white shadow-2xl">
            <Image src={images.cta} alt="" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
            <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-14">
              <div>
                <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-5xl">
                  {sc.cta.heading}
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">{sc.cta.body}</p>
                <a href="#estimate" className={`${btn} mt-7`}>
                  {sc.cta.button} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <ShowcaseForm
                variant="compact"
                heading={sc.cta.formHeading}
                services={sc.formServices}
                button="Send"
                source={`${data.name} — CTA`}
              />
            </div>
          </div>
        </section>
      </main>

      <HireFooter />
    </div>
  );
}
