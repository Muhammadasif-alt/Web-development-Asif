import Image from "next/image";
import { Check, CheckCircle2, Star, X } from "lucide-react";
import { HireNav } from "@/components/portfolio/hire-nav";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { LandscapeForm } from "@/components/portfolio/landscape-form";
import { BeforeAfter } from "@/components/portfolio/before-after";
import { YouTubeEmbed } from "@/components/portfolio/youtube-embed";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema, breadcrumbSchema, businessSchema } from "@/lib/schema";
import { LANDSCAPING as D } from "@/lib/landscaping-page";
import type { Industry } from "@/lib/industries-data";

const GREEN = "#1a6b3d";

/** Square image with the top-right and bottom-left corners cut off. */
const CUT = "polygon(0 0, 88% 0, 100% 12%, 100% 100%, 10% 100%, 0 90%)";

const btn =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.03]";

/** Italic serif eyebrow flanked by red rules, as on the reference design. */
function Eyebrow({ children, align = "center" }: { children: React.ReactNode; align?: "center" | "left" }) {
  return (
    <p
      className={`flex items-center gap-4 font-serif text-lg italic text-foreground/90 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span className="h-px w-12 bg-[#1a6b3d]" />
      {children}
      <span className="h-px w-12 bg-[#1a6b3d]" />
    </p>
  );
}

function Title({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${className}`}>
      {children}
    </h2>
  );
}

/** Same estimate card as the home-renovation page: themed panel, centred heading, p-6/p-8. */
function FormCard({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="w-full rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-2xl sm:p-8">
      <h2 className="mb-6 text-center text-xl font-bold leading-snug sm:text-2xl">{heading}</h2>
      {children}
    </div>
  );
}

/** Green-edged frame with the top-right and bottom-left corners cut, used on every photo of this page. */
function Cut({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[#1a6b3d] p-[4px] ${className}`} style={{ clipPath: CUT }}>
      <div className="overflow-hidden" style={{ clipPath: CUT }}>
        {children}
      </div>
    </div>
  );
}

const card = "rounded-2xl border-b-2 border-r-2 border-[#1a6b3d] bg-card";

export function LandscapingPage({ data }: { data: Industry }) {
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
      <section id="top" className="px-6 pb-10 pt-14 lg:px-10 lg:pt-16">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">{D.hero.title}</h1>
            <span className="mt-8 block h-px w-24 bg-foreground/30" />
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/90">{D.hero.text}</p>
            <ul className="mt-8 space-y-3">
              {D.hero.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 font-medium">
                  <CheckCircle2 className="h-6 w-6 fill-[#1a6b3d] text-background" />
                  {b}
                </li>
              ))}
            </ul>
            <a href="#estimate" className={`${btn} mt-9`}>
              {D.hero.cta}
            </a>
          </div>
          <Cut className="mx-auto w-full max-w-[640px] lg:ml-auto">
            <Image
              src={D.hero.image}
              alt="Family enjoying a finished paver patio"
              width={1280}
              height={1229}
              priority
              sizes="(min-width:1024px) 50vw, 100vw"
              className="h-auto w-full"
            />
          </Cut>
        </div>

        {/* form band */}
        <div id="estimate" className="mx-auto mt-12 max-w-[1440px] overflow-hidden rounded-3xl border border-border bg-card">
          <div className="bg-[#1a6b3d] px-6 py-5 text-center text-white">
            <h2 className="text-2xl font-extrabold sm:text-3xl">{D.hero.formHeading}</h2>
          </div>
          <div className="p-6 sm:p-8">
            <LandscapeForm
              layout="band"
              services={D.formServices}
              budgets={D.formBudgets}
              button={D.hero.formButton}
              note={D.hero.formNote}
              source="Landscaping — hero"
            />
          </div>
        </div>
      </section>

      {/* ===== PROBLEM & PHILOSOPHY ===== */}
      <section className="px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow align="left">{D.problem.eyebrow}</Eyebrow>
            <Title className="mt-6">{D.problem.title}</Title>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">{D.problem.body}</p>
            <div className="my-9 border-t-2 border-dashed border-[#1a6b3d]" />
            <Eyebrow align="left">{D.problem.philosophyEyebrow}</Eyebrow>
            <h3 className="mt-6 text-2xl font-extrabold sm:text-3xl">{D.problem.philosophyTitle}</h3>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{D.problem.philosophyBody}</p>
            <p className={`${card} mt-7 px-6 py-5 text-sm font-medium italic sm:text-base`}>{D.problem.quote}</p>
          </div>

          <div className="relative">
            <Cut>
              <BeforeAfter
                before={D.problem.before}
                after={D.problem.image}
                beforeLabel="Before"
                afterLabel="After"
                accent={GREEN}
                aspect="aspect-[4/3]"
                frame=""
                labelRight="right-[14%]"
              />
            </Cut>
            <ul className="pointer-events-none absolute bottom-3 right-3 space-y-2 rounded-xl bg-black/65 p-4 text-sm backdrop-blur-sm">
              {D.problem.good.map((g) => (
                <li key={g} className="flex items-center gap-2.5">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-green-500">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
            <ul className="pointer-events-none absolute bottom-3 left-3 hidden space-y-2 rounded-xl bg-black/65 p-4 text-sm backdrop-blur-sm sm:block">
              {D.problem.bad.map((g) => (
                <li key={g} className="flex items-center gap-2.5">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[#1a6b3d]">
                    <X className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 3D VISUALIZATION ===== */}
      <section className="px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <Eyebrow>{D.visual.eyebrow}</Eyebrow>
          <Title className="mt-6">{D.visual.title}</Title>
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">{D.visual.body}</p>
          <div className="mx-auto mt-10 w-full max-w-[1100px]">
            <Cut>
              <BeforeAfter
                before={D.visual.before}
                after={D.visual.after}
                beforeLabel={D.visual.beforeLabel}
                afterLabel={D.visual.afterLabel}
                accent={GREEN}
                aspect="aspect-[16/9]"
                frame=""
                labelRight="right-[14%]"
              />
            </Cut>
          </div>
          <a href="#estimate" className={`${btn} mt-8`}>
            {D.visual.cta}
          </a>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" className="px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="text-center">
            <Eyebrow>{D.process.eyebrow}</Eyebrow>
            <Title className="mt-6">{D.process.title}</Title>
            <span className="mx-auto mt-5 block h-px w-14 bg-[#1a6b3d]" />
            <p className="mt-5 text-sm text-muted-foreground sm:text-base">{D.process.intro}</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_1fr]">
            <Cut className="h-full max-h-[680px]">
              <Image
                src={D.process.image}
                alt="Backyard before, 3D concept and finished patio"
                width={2048}
                height={1536}
                sizes="(min-width:1024px) 50vw, 100vw"
                className="h-full max-h-[672px] w-full object-cover"
              />
            </Cut>
            <div className="grid gap-5 sm:grid-cols-2">
              {D.process.steps.map((s, i) => (
                <div key={s.title} className={`${card} p-6`}>
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#1a6b3d] text-2xl font-extrabold text-white">{i + 1}</span>
                  <h3 className="mt-6 text-lg font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF (light) ===== */}
      <section id="reviews" className="bg-[var(--panel)] px-6 py-16 text-foreground lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="text-center">
            <p className="flex items-center justify-center gap-4 font-serif text-lg italic text-foreground/80">
              <span className="h-px w-12 bg-[#1a6b3d]" />
              {D.proof.eyebrow}
              <span className="h-px w-12 bg-[#1a6b3d]" />
            </p>
            <h2 className="mt-6 text-3xl font-extrabold uppercase leading-tight sm:text-5xl">
              {D.proof.title.map((t) => (
                <span key={t} className="block">
                  <span className="text-[#1a6b3d] dark:text-[#1a6b3d]">{t.split(" ")[0]}</span> {t.split(" ").slice(1).join(" ")}
                </span>
              ))}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">{D.proof.body}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {D.proof.videos.map((v) => (
              <div key={v.id} className="rounded-2xl border-b-2 border-r-2 border-[#1a6b3d] bg-card p-3 shadow-lg">
                <YouTubeEmbed id={v.id} title={v.title} />
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {D.proof.reviews.map((r) => (
              <figure key={r.name} className="flex flex-col rounded-2xl border-b-2 border-r-2 border-[#1a6b3d] bg-card p-5">
                <div className="flex flex-1 flex-col rounded-xl bg-[var(--panel-2)] p-4 ring-1 ring-border">
                  <div className="flex gap-0.5 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{r.text}</blockquote>
                </div>
                <figcaption className="mt-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#1a6b3d] text-sm font-bold text-white">{r.name[0]}</span>
                  <span>
                    <span className="block text-sm font-semibold">{r.name}</span>
                    <span className="block text-xs text-muted-foreground">{r.when}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="#estimate" className={btn}>
              Read All Reviews
            </a>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE BUILD ===== */}
      <section id="services" className="px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="text-center">
            <Eyebrow>{D.services.eyebrow}</Eyebrow>
            <Title className="mt-6">{D.services.title}</Title>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-relaxed text-muted-foreground sm:text-base">{D.services.body}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {D.services.items.map((s) => (
              <article key={s.title} className={`${card} flex flex-col p-3`}>
                <Cut>
                  <Image
                    src={s.img}
                    alt={s.title}
                    width={560}
                    height={420}
                    sizes="(min-width:1024px) 33vw, 100vw"
                    className="aspect-[4/3] w-full scale-[1.08] object-cover"
                  />
                </Cut>
                <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <a href="#estimate" className="mt-5 block rounded-lg bg-[#1a6b3d] py-3.5 text-center text-sm font-bold text-white hover:opacity-90">
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="#estimate" className={btn}>
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="text-center">
            <Eyebrow>{D.compare.eyebrow}</Eyebrow>
            <Title className="mt-6">{D.compare.title}</Title>
            <p className="mx-auto mt-6 max-w-5xl text-sm leading-relaxed text-muted-foreground sm:text-base">{D.compare.body}</p>
          </div>
          <div className="mt-10 overflow-x-auto rounded-2xl border-b-2 border-r-2 border-[#1a6b3d] bg-card p-1.5 text-foreground">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="bg-[#123f28] text-white">
                  <th className="px-5 py-4 font-bold">What to check</th>
                  <th className="px-5 py-4 font-bold">Why it matters in Richmond</th>
                  <th className="px-5 py-4 font-bold">Rosete</th>
                </tr>
              </thead>
              <tbody>
                {D.compare.rows.map(([a, b, c], i) => (
                  <tr key={a} className={i % 2 ? "bg-foreground/[0.04]" : "bg-foreground/[0.08]"}>
                    <td className="px-5 py-3.5 font-semibold">{a}</td>
                    <td className="px-5 py-3.5">{b}</td>
                    <td className="px-5 py-3.5 font-bold text-[#1a6b3d] dark:text-[#1a6b3d]">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== FOUNDERS VIDEO ===== */}
      <section className="px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1000px] text-center">
          <Eyebrow>{D.founders.eyebrow}</Eyebrow>
          <Title className="mt-6">{D.founders.title}</Title>
          <p className="mt-5 text-sm text-muted-foreground sm:text-base">{D.founders.body}</p>
          <div className="mt-10 rounded-2xl border-b-2 border-r-2 border-[#1a6b3d] bg-card p-2">
            <YouTubeEmbed
              id={D.founders.video.id}
              title={D.founders.video.title}
              poster={<span className="block h-full w-full bg-gradient-to-br from-[#123f28] to-black" />}
            />
          </div>
        </div>
      </section>

      {/* ===== FINANCING ===== */}
      <section id="financing" className="px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 rounded-3xl border-b-2 border-r-2 border-[#1a6b3d] bg-card p-6 sm:p-10 lg:grid-cols-2">
          <div>
            <Eyebrow align="left">{D.financing.eyebrow}</Eyebrow>
            <Title className="mt-6">{D.financing.title}</Title>
            <p className="mt-5 text-sm text-muted-foreground sm:text-base">{D.financing.body}</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {D.financing.options.map(([big, small]) => (
                <div key={big} className="rounded-xl border-b-2 border-r-2 border-[#1a6b3d] p-4">
                  <p className="text-3xl font-extrabold">{big}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{small}</p>
                </div>
              ))}
            </div>
            <a href="#estimate" className={`${btn} mt-7`}>
              {D.financing.cta}
            </a>
          </div>
          <Cut>
            <Image
              src={D.financing.image}
              alt="Pave now, pay later financing"
              width={1536}
              height={1024}
              sizes="(min-width:1024px) 50vw, 100vw"
              className="w-full object-cover"
            />
          </Cut>
        </div>
      </section>

      {/* ===== CTA WITH FORM ===== */}
      <section className="px-6 py-16 lg:px-10 lg:py-20">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-3xl bg-card text-foreground">
          <Image src={D.cta.image} alt="" fill sizes="100vw" className="object-cover object-right opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
          <div className="relative grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:p-12">
            <div>
              <p className="font-serif text-lg italic text-[#1a6b3d] dark:text-[#1a6b3d]">{D.cta.eyebrow}</p>
              <span className="mt-2 block h-px w-24 bg-[#1a6b3d]" />
              <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-5xl">{D.cta.title}</h2>
              <p className="mt-5 text-sm font-medium sm:text-base">{D.cta.body}</p>
              <ul className="mt-6 max-w-xs">
                {D.cta.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 border-b border-border py-2 text-sm font-medium last:border-0">
                    <CheckCircle2 className="h-5 w-5 fill-[#1a6b3d] text-white" />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-6 inline-flex items-center gap-2 rounded-lg border-b-2 border-r-2 border-[#1a6b3d] bg-[#123f28] px-4 py-2.5 text-sm font-bold text-white">
                <span className="font-extrabold text-blue-400">G</span> {D.cta.rating}
                <span className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </span>
                <span className="font-normal text-white/70">({D.cta.reviewCount})</span>
              </p>
            </div>
            <FormCard heading={D.cta.formHeading}>
              <LandscapeForm
                layout="card"
                services={D.formServices}
                budgets={D.formBudgets}
                button={D.hero.formButton}
                note={D.hero.formNote}
                source="Landscaping — CTA"
              />
            </FormCard>
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREAS ===== */}
      <section id="areas" className="px-6 pb-20 pt-8 lg:px-10">
        <div className="mx-auto max-w-[1300px]">
          <p className="flex items-center gap-4 font-serif text-lg italic text-foreground/90">
            {D.areas.eyebrow}
            <span className="h-px flex-1 bg-[#1a6b3d]" />
          </p>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <iframe
              title={`${D.brand} on Google Maps`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(D.brand + " " + D.address)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full rounded-xl border border-[#1a6b3d]/60"
            />
            <div>
              <Title>{D.areas.title}</Title>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">{D.areas.body}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {D.cities.map((c) => (
                  <a
                    key={c}
                    href="#estimate"
                    className="rounded-full border-b-2 border-r-2 border-[#1a6b3d] px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#1a6b3d] hover:text-white"
                  >
                    {c}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <HireFooter />
    </div>
  );
}
