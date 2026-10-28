import Link from "next/link";
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
  /** Ignored: inner-page heroes use the brand background instead of a photo. */
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
      {/* Brand ground, same family as the home hero: a soft green wash with a faint grid
          by day, near-black shading into deep green by night. No photo behind the copy. */}
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
        className="pointer-events-none absolute -bottom-56 -left-40 h-[520px] w-[520px] rounded-full bg-[#1a6b3d]/10 blur-3xl dark:bg-[#1a6b3d]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(26,107,61,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(26,107,61,0.08)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_85%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)]"
      />

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
          <p className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[#1a6b3d]/30 bg-[#1a6b3d]/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#1a6b3d] dark:border-[#1a6b3d]/60 dark:bg-[#1a6b3d]/15 dark:text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1a6b3d] dark:bg-[#1a6b3d]" />
            {small}
          </p>
          <h1 className="mt-7 font-extrabold leading-[0.95] tracking-tight text-neutral-950 dark:text-white text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem]">
            {head}{head && " "}
            <span className="text-[#1a6b3d] dark:text-[#1a6b3d]">{tail}</span>
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
                      className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
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
