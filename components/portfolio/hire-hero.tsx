import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HireNav } from "@/components/portfolio/hire-nav";
import { HeroLeadForm } from "@/components/portfolio/hero-lead-form";

type Cta = { label: string; href: string };

type Props = {
  /** small line above the big heading */
  small: string;
  /** the big hero heading */
  title: string;
  /** optional bold tagline under the heading */
  taglineTitle?: string;
  /** optional supporting line under the tagline */
  taglineText?: string;
  /** optional primary (filled) button */
  primaryCta?: Cta;
  /** optional secondary (outline) button */
  secondaryCta?: Cta;
  /**
   * Background photo for the hero. Falls back to the brand gradient alone when
   * omitted — the home page uses its own video instead of this component.
   */
  bgImage?: string;
  /** Short proof points listed under the tagline, each with a tick. */
  bullets?: string[];
  /**
   * Drops the lead-capture card into the right half of the hero. Pages that
   * already own the conversation (home, contact, blog) leave this off.
   */
  form?: { heading?: string; subheading?: string; source?: string; cta?: string };
  /** Tail of the heading, shown in the brand colour. Defaults to the last two words. */
  titleAccent?: string;
};

/* Shared page hero: brand gradient over an optional workspace photo. */
export function HireHero({
  small,
  title,
  taglineTitle,
  taglineText,
  primaryCta,
  secondaryCta,
  bgImage,
  bullets,
  form,
  titleAccent,
}: Props) {
  /* Two-tone heading: the tail carries the brand colour. Pages can name the
     accent explicitly; otherwise the last two words take it. */
  const words = title.trim().split(/\s+/);
  const tailCount = Math.min(2, Math.max(1, words.length - 1));
  const head = titleAccent ? title : words.slice(0, words.length - tailCount).join(" ");
  const tail = titleAccent ?? words.slice(words.length - tailCount).join(" ");

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Light ground by day. The workspace photo belongs to the night theme —
          on a light page it would only fight the copy. */}
      <div className="absolute inset-0 bg-white dark:bg-black" />

      {bgImage && (
        <div className="absolute inset-x-0 bottom-0 top-24 lg:top-28">
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* By day the photo is washed almost white so it reads as texture,
              not as a picture competing with the copy. By night it carries. */}
          <div className="absolute inset-0 bg-white/[0.55] dark:bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent dark:hidden" />
          {/* soften the seam where the photo begins */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent dark:from-black" />
        </div>
      )}

      {/* left-to-right darkening so the copy always keeps contrast */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background:
            "linear-gradient(to right, rgba(4,18,11,0.88) 0%, rgba(4,18,11,0.58) 44%, rgba(4,18,11,0.20) 74%, transparent 100%)",
        }}
      />
      {/* subtle bottom + top shading */}
      <div className="absolute inset-x-0 bottom-0 hidden h-56 bg-gradient-to-t from-black/45 to-transparent dark:block" />
      <div className="absolute inset-x-0 top-0 hidden h-28 bg-gradient-to-b from-black/25 to-transparent dark:block" />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* NAV */}
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <HireNav />
        </div>

        {/* HERO BODY — copy left; the form, when present, takes the right half */}
        <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 lg:px-10">
        <div
          className={
            form
              ? "flex flex-1 flex-col items-center gap-12 py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-24"
              : "flex flex-1 flex-col justify-center py-16 lg:max-w-[680px] lg:py-24 xl:max-w-[820px]"
          }
        >
        <div className={form ? "w-full lg:flex-1" : "contents"}>
          {/* Same badge pill the home hero uses, so every page opens the same way. */}
          <p className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[#1a6b3d]/30 bg-[#1a6b3d]/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#1a6b3d] dark:border-[#86e0a3]/35 dark:bg-[#86e0a3]/10 dark:text-[#86e0a3]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1a6b3d] dark:bg-[#c8e659]" />
            {small}
          </p>
          <h1 className="mt-7 font-extrabold leading-[0.95] tracking-tight text-neutral-950 dark:text-white text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem]">
            {head}{head && " "}
            <span className="text-[#1a6b3d] dark:text-[#86e0a3]">{tail}</span>
          </h1>

          {(taglineTitle || taglineText || primaryCta || secondaryCta) && (
            <div className="mt-8 max-w-md">
              {taglineTitle && (
                <h2 className="text-2xl font-bold leading-snug text-neutral-900 dark:text-white sm:text-3xl">
                  {taglineTitle}
                </h2>
              )}
              {taglineText && (
                <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600 dark:text-white/85 sm:text-base">
                  {taglineText}
                </p>
              )}

              {(primaryCta || secondaryCta) && (
                <div className="mt-7 flex flex-wrap gap-3">
                  {primaryCta && (
                    <Link
                      href={primaryCta.href}
                      className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#15703a] to-[#4cb45a] px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
                    >
                      {primaryCta.label}
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-white/25 text-white">
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  )}
                  {secondaryCta && (
                    <Link
                      href={secondaryCta.href}
                      className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/70 px-6 py-3 text-sm font-bold text-neutral-900 transition-colors hover:bg-white dark:border-white/40 dark:bg-transparent dark:text-white dark:hover:bg-white/10"
                    >
                      {secondaryCta.label}
                    </Link>
                  )}
                </div>
              )}
            </div>
          )}

          {bullets && bullets.length > 0 && (
            <ul className="mt-7 space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-white/85 sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1a6b3d]" />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>

          {form && (
            <div className="w-full lg:w-[600px] lg:shrink-0">
              <HeroLeadForm {...form} />
            </div>
          )}
        </div>
        </div>
      </div>
    </section>
  );
}
