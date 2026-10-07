import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ClipboardCheck, ClipboardList, FileText, Gem, Handshake, Hammer, MapPin, ShieldCheck, Sun } from "lucide-react";
import { HireNav } from "@/components/portfolio/hire-nav";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { RoofingForm } from "@/components/portfolio/roofing-form";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema, breadcrumbSchema, businessSchema } from "@/lib/schema";
import { ROOFING as D } from "@/lib/industries/roofing";
import type { Industry } from "@/lib/industries-data";
import "./showcase-marquee.css";

const WHY_ICONS: LucideIcon[] = [ShieldCheck, Handshake, Sun, Gem];
const STEP_ICONS: LucideIcon[] = [ClipboardCheck, Handshake, FileText, Hammer, ClipboardList];

const ACCENT = "text-[#1a6b3d] dark:text-[#86e0a3]";

/** Story photo: left edge notched inward at the middle. */
const STORY_CUT = "polygon(0 0, 100% 0, 100% 100%, 0 100%, 9% 50%)";
/** Difference photo: right edge notched inward at the middle. */
const WHY_CUT = "polygon(0 0, 100% 0, 92% 50%, 100% 100%, 0 100%)";
/** Service photo: bottom edge peaks upward at the centre. */
const CARD_CUT = "polygon(0 0, 100% 0, 100% 100%, 50% 90%, 0 100%)";

const btn =
  "inline-flex items-center justify-center rounded-full bg-[#1a6b3d] px-8 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-sm text-foreground/90">
      <span className="h-px w-8 bg-[#1a6b3d]" />
      {children}
      <span className="h-px w-8 bg-[#1a6b3d]" />
    </p>
  );
}

function Heading({ lead, accent, className = "" }: { lead: string; accent: string; className?: string }) {
  return (
    <h2 className={`text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl ${className}`}>
      {lead} <span className={`font-serif font-normal italic ${ACCENT}`}>{accent}</span>
    </h2>
  );
}

export function RoofingPage({ data }: { data: Industry }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
      <div className="border-b border-border bg-background">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <HireNav />
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden text-white">
        <Image src={D.hero.image} alt="Aerial view of freshly roofed homes" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div
          className="absolute inset-0 -z-10 bg-black/65"
          style={{ clipPath: "polygon(0 0, 68% 0, 48% 100%, 0 100%)" }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-[1440px] px-6 pb-40 pt-20 lg:px-10 lg:pb-48 lg:pt-28">
          <div className="max-w-2xl">
            <p className="font-serif text-4xl italic text-[#86e0a3] sm:text-5xl">{D.hero.script}</p>
            <h1 className="mt-2 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">{D.hero.title}</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90">{D.hero.text}</p>
            <a href="#estimate" className={`${btn} mt-8 !bg-white !text-black`}>
              {D.hero.cta}
            </a>
          </div>
        </div>
      </section>

      {/* ===== QUOTE BAND (overlaps hero) ===== */}
      <div id="estimate" className="relative z-10 mx-auto -mt-28 max-w-[1300px] px-6 lg:px-10">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
          <div className="bg-[#1a6b3d] px-6 py-5 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">{D.hero.formHeading}</h2>
          </div>
          <div className="p-6 sm:p-8">
            <RoofingForm services={D.formServices} button={D.hero.formButton} source="Roofing — hero" />
          </div>
        </div>
      </div>

      {/* ===== STORY ===== */}
      <section id="story" className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1300px] items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>{D.story.eyebrow}</Eyebrow>
            <Heading className="mt-6" lead={D.story.heading} accent={D.story.accent} />
            <div className="mt-7 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {D.story.paras.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <a href="#why" className={`${btn} mt-9`}>
              {D.story.cta}
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl" style={{ clipPath: STORY_CUT }}>
            <Image
              src={D.story.image}
              alt="Roofer installing slate tiles"
              width={1535}
              height={1024}
              sizes="(min-width:1024px) 50vw, 100vw"
              className="aspect-[4/3.4] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== TICKER ===== */}
      <div className="overflow-hidden bg-[#86e0a3] py-5 text-[#0b1f15]" aria-hidden="true">
        <div className="sc-track">
          {[...D.ticker, ...D.ticker, ...D.ticker, ...D.ticker].map((t, i) => (
            <span key={i} className="flex shrink-0 items-center text-xl font-bold sm:text-2xl">
              <span className="px-8">{t}</span>
              <span className="text-xl">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ===== SERVICES ===== */}
      <section id="services" className="bg-muted/40 px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1300px]">
          <Eyebrow>{D.services.eyebrow}</Eyebrow>
          <Heading className="mt-5" lead={D.services.heading} accent={D.services.accent} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {D.services.items.map((s) => (
              <article key={s.title} className="overflow-hidden rounded-2xl border border-border bg-card p-1.5 shadow-lg">
                <div className="overflow-hidden rounded-xl" style={{ clipPath: CARD_CUT }}>
                  <Image
                    src={s.img}
                    alt={s.title}
                    width={1200}
                    height={900}
                    sizes="(min-width:768px) 33vw, 100vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="px-4 pb-5 pt-3">
                  <h3 className="text-lg font-extrabold uppercase tracking-wide">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE PRO DIFFERENCE ===== */}
      <section id="why" className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1300px]">
          <Eyebrow>{D.why.eyebrow}</Eyebrow>
          <Heading className="mt-5" lead={D.why.heading} accent={D.why.accent} />
          <p className="mt-4 max-w-3xl text-sm text-muted-foreground sm:text-base">{D.why.text}</p>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="bg-[#86e0a3] pr-1.5" style={{ clipPath: WHY_CUT }}>
              <div className="overflow-hidden rounded-3xl" style={{ clipPath: WHY_CUT }}>
                <Image
                  src={D.why.image}
                  alt="Roofer fitting a standing-seam metal roof"
                  width={1538}
                  height={1024}
                  sizes="(min-width:1024px) 45vw, 100vw"
                  className="aspect-[4/4.4] w-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              {D.why.items.map((it, i) => {
                const Icon = WHY_ICONS[i % WHY_ICONS.length];
                return (
                  <div key={it.title} className="flex items-start gap-5 rounded-2xl border border-border bg-card p-5 sm:p-6">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#1a6b3d] text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-base font-extrabold uppercase tracking-wide">{it.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" className="bg-muted/40 px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1300px]">
          <Eyebrow>{D.process.eyebrow}</Eyebrow>
          <Heading className="mt-5" lead={D.process.heading} accent={D.process.accent} />
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">{D.process.text}</p>
          <div className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {D.process.steps.map((s, i) => {
              const Icon = STEP_ICONS[i % STEP_ICONS.length];
              return (
                <div key={s.title} className="relative overflow-hidden rounded-3xl border border-border bg-card p-6">
                  <span className="pointer-events-none absolute right-4 top-2 text-7xl font-extrabold text-foreground/5">{i + 1}</span>
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#1a6b3d] text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-base font-extrabold uppercase leading-snug">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1300px]">
          <Eyebrow>{D.faq.eyebrow}</Eyebrow>
          <Heading className="mt-5" lead={D.faq.heading} accent={D.faq.accent} />
          <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.7fr_1fr]">
            <div className="space-y-3">
              {data.faqs.map((f, i) => (
                <details key={f.q} open={i === 0} className="group rounded-full bg-muted px-7 py-4 open:rounded-3xl">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium sm:text-lg">
                    {f.q}
                    <span className="text-2xl leading-none text-[#1a6b3d] transition-transform group-open:rotate-45 dark:text-[#86e0a3]">+</span>
                  </summary>
                  <p className="pb-2 pt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{f.a}</p>
                </details>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center rounded-3xl bg-[#1a6b3d] p-8 text-center text-white lg:min-h-[420px]">
              <h3 className="text-3xl font-extrabold uppercase leading-tight">{D.faq.card.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/90">{D.faq.card.text}</p>
              <a href="#estimate" className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black">
                {D.faq.card.button}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TERRITORIES ===== */}
      <section id="areas" className="bg-muted/40 px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1300px]">
          <Eyebrow>{D.areas.eyebrow}</Eyebrow>
          <Heading className="mt-5 max-w-3xl" lead={D.areas.heading} accent={D.areas.accent} />
          <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
            <iframe
              title={`${D.brand} service area on Google Maps`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(D.address)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full rounded-3xl border border-border lg:h-full lg:min-h-[560px]"
            />
            <div className="flex flex-col rounded-3xl border border-border bg-card p-6 sm:p-8">
              <div className="flex flex-wrap gap-3">
                {D.areas.cities.map((c) => (
                  <a
                    key={c}
                    href="#estimate"
                    className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold transition-colors hover:border-[#1a6b3d]"
                  >
                    <MapPin className="h-4 w-4 fill-[#1a6b3d] text-[#1a6b3d]" />
                    {c}
                  </a>
                ))}
              </div>
              <p className="mt-8 flex-1 text-base leading-relaxed sm:text-lg">{D.areas.text}</p>
              <a href="#estimate" className={`${btn} mt-8 w-full`}>
                {D.areas.button}
              </a>
            </div>
          </div>
        </div>
      </section>

      <HireFooter />
    </div>
  );
}
