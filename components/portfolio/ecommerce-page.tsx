import Image from "next/image";
import { ArrowRight, BadgeCheck, BedDouble, Building2, Check, Headphones, ShieldCheck, Star, Truck } from "lucide-react";
import { HireNav } from "@/components/portfolio/hire-nav";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { ProductCarousel } from "@/components/portfolio/product-carousel";
import { ShowcaseForm } from "@/components/portfolio/showcase-form";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema, breadcrumbSchema, businessSchema } from "@/lib/schema";
import { ECOMMERCE as D } from "@/lib/industries/ecommerce-page";
import type { Industry } from "@/lib/industries-data";

const PERK_ICONS = [Truck, ShieldCheck, BadgeCheck, Headphones];
const STAT_ICONS = [Building2, BedDouble, ShieldCheck, Check];

const GREEN = "bg-[#1a6b3d]";
const btnSolid = `inline-flex items-center gap-2 rounded-md ${GREEN} px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90`;
const btnLine =
  "inline-flex items-center gap-2 rounded-md border border-[#1a6b3d] px-6 py-3 text-sm font-bold text-[#1a6b3d] transition-colors hover:bg-[#1a6b3d] hover:text-white dark:border-[#1a6b3d] dark:text-[#1a6b3d] dark:hover:bg-[#1a6b3d] dark:hover:text-[#0b1f15]";

export function EcommercePage({ data }: { data: Industry }) {
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
      <section className="grid bg-muted/50 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-14 lg:py-16 lg:pl-[max(2.5rem,calc((100vw-1300px)/2))] lg:pr-12">
          <p className="text-xs font-bold uppercase tracking-wide text-[#1a6b3d] dark:text-[#1a6b3d] sm:text-sm">{D.hero.eyebrow}</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">{D.hero.title}</h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">{D.hero.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#collections" className={btnSolid}>
              {D.hero.primary} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#enquiry" className={btnLine}>
              {D.hero.secondary} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
            {D.hero.perks.map((p, i) => {
              const Icon = PERK_ICONS[i];
              return (
                <li key={p} className="flex flex-col items-center gap-3 border-border px-2 text-center text-sm text-muted-foreground sm:border-l first:sm:border-l-0">
                  <Icon className="h-9 w-9 text-foreground" />
                  {p}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative min-h-[420px] lg:min-h-[560px]">
          <Image src={D.hero.image} alt="Contract divan bed in a modern hotel room" fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-x-4 bottom-0 grid grid-cols-4 gap-2 rounded-t-xl border border-white/30 bg-black/45 px-3 py-5 text-center text-white backdrop-blur-sm sm:inset-x-10">
            {D.hero.stats.map((s, i) => {
              const Icon = STAT_ICONS[i];
              return (
                <div key={s.label} className="flex flex-col items-center gap-1">
                  <Icon className="h-6 w-6 text-[#1a6b3d] sm:h-8 sm:w-8" />
                  <p className="text-lg font-semibold sm:text-2xl">{s.value}</p>
                  <p className="text-[10px] uppercase tracking-wide text-white/80 sm:text-xs">{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== COLLECTIONS ===== */}
      <section id="collections" className="px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1300px]">
          <h2 className="text-center text-3xl font-extrabold tracking-tight">{D.collections.heading}</h2>
          <p className="mt-3 text-center text-sm text-muted-foreground">{D.collections.text}</p>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {D.collections.items.map((c) => (
              <a key={c.title} href="#enquiry" className="group relative block aspect-[4/3.4] overflow-hidden rounded-2xl border border-border bg-card">
                <Image src={c.img} alt={c.title} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute inset-x-0 bottom-0 bg-background/80 px-3 py-3 text-center text-sm font-semibold backdrop-blur-sm">{c.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-[1300px]">
          <ProductCarousel heading={D.products.heading} badge={D.products.badge} items={D.products.items} />
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="bg-muted/50">
        <div className="mx-auto grid max-w-[1440px] items-center lg:grid-cols-2">
          <div className="relative z-10 px-6 py-20 lg:px-10 lg:py-32">
            <div className="mx-auto max-w-xl rounded-2xl bg-card p-8 text-center shadow-xl sm:p-14 lg:-mr-24 lg:py-20 lg:max-w-none">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{D.about.eyebrow}</p>
              <h2 className="mt-1 text-2xl font-extrabold">{D.about.heading}</h2>
              <p className="mt-6 text-sm leading-loose text-muted-foreground">{D.about.text}</p>
              <a href="#collections" className={`${btnSolid} mt-8`}>
                {D.about.button}
              </a>
            </div>
          </div>
          <div className="relative min-h-[460px] lg:min-h-[760px]">
            <Image src={D.about.image} alt="Grey divan bed with panel headboard" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* ===== BULK BANNER ===== */}
      <section className="px-6 py-14 lg:px-10">
        <div className={`mx-auto grid max-w-[1300px] items-center gap-8 overflow-hidden rounded-3xl ${GREEN} p-6 text-white sm:p-10 lg:grid-cols-[1.2fr_1fr]`}>
          <div className="relative">
            <span className="absolute -top-2 left-2 z-10 -rotate-6 bg-white px-4 py-2 font-serif text-lg italic text-black shadow">{D.banner.tag}</span>
            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl rounded-bl-none">
              <Image src={D.banner.image} alt="Bulk order divan bed" fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl">
              {D.banner.lead} <b>{D.banner.bold}</b>
            </p>
            <p className="text-3xl sm:text-4xl">{D.banner.mid}</p>
            <p className="mt-1 text-6xl font-extrabold sm:text-7xl">{D.banner.big}</p>
            <a href="#enquiry" className="mt-6 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-black">
              {D.banner.button}
            </a>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-[1300px]">
          <h2 className="text-center text-3xl font-extrabold tracking-tight">{D.reviews.heading}</h2>
          <p className="mt-3 text-center text-sm text-muted-foreground">{D.reviews.text}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {D.reviews.items.map((r) => (
              <figure key={r.name} className="rounded-xl border border-border border-t-4 border-t-[#1a6b3d] bg-card p-7 shadow-sm">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 border-l-2 border-border pl-4 text-sm italic leading-relaxed text-muted-foreground">&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full ${GREEN} font-bold text-white`}>{r.name[0]}</span>
                  <span className="text-sm">
                    <b className="block">{r.name}</b>
                    <span className="block text-xs text-muted-foreground">{r.role}</span>
                    <span className="block text-xs text-[#1a6b3d] dark:text-[#1a6b3d]">{r.org}</span>
                  </span>
                </figcaption>
                <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#1a6b3d]/10 px-3 py-1 text-xs font-medium text-[#1a6b3d] dark:text-[#1a6b3d]">
                  <Check className="h-3.5 w-3.5" /> Verified Purchase
                </p>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ENQUIRY ===== */}
      <section id="enquiry" className="px-6 pb-16 lg:px-10 lg:pb-20">
        <div
          className="relative mx-auto max-w-[1440px] overflow-hidden rounded-3xl bg-black text-white shadow-2xl"
          style={{ "--sc-accent": "#1a6b3d" } as React.CSSProperties}
        >
          <Image src={D.hero.image} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
          <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-14">
            <div>
              <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-5xl">{D.enquiry.heading}</h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">{D.enquiry.text}</p>
              <a href="#enquiry" className={`${btnSolid} mt-7`}>
                {D.enquiry.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <ShowcaseForm
              variant="compact"
              heading={D.enquiry.formHeading}
              services={D.formServices}
              button="Send"
              source="E-commerce — enquiry"
            />
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mx-auto grid max-w-[1300px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center rounded-lg border border-[#1a6b3d] bg-[#1a6b3d]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#1a6b3d] dark:text-[#1a6b3d]">
              FAQs
            </span>
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {D.faq.lead} <span className="text-[#1a6b3d] dark:text-[#1a6b3d]">{D.faq.accent}</span>
            </h2>
            <div className="mt-10 space-y-3">
              {data.faqs.map((f, i) => (
                <details key={f.q} open={i === 0} className="group rounded-xl border border-border bg-card px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold sm:text-base">
                    {f.q}
                    <span className="text-xl leading-none text-[#1a6b3d] transition-transform group-open:rotate-45 dark:text-[#1a6b3d]">+</span>
                  </summary>
                  <p className="pb-1 pt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl lg:aspect-auto lg:h-full lg:min-h-[560px]">
            <Image src={D.faq.image} alt="Contract bedroom set up with divan beds" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <HireFooter />
    </div>
  );
}
