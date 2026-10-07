import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export type ProcessStep = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

type Props = {
  eyebrow?: string;
  /** First heading line, in white. */
  title: string;
  /** Second heading line, in the brand accent. Omit for a single-line heading. */
  titleAccent?: string;
  intro?: string;
  steps: ProcessStep[];
  footnote?: string;
  cta?: { label: string; href: string };
  /** Section background utility — lets each page sit the band on its own ground. */
  bg?: string;
};

/**
 * Horizontal step timeline: numbered icon nodes joined by a rule, captions below.
 *
 * The rule is inset by half a column at each end so it starts and stops at the
 * centre of the first and last node instead of running past them. Below `lg`
 * the same steps stack into a vertical rail, which keeps the captions readable
 * on a phone rather than squeezing five columns into 360px.
 */
export function ProcessTimeline({
  eyebrow = "Process",
  title,
  titleAccent,
  intro,
  steps,
  footnote,
  cta,
  bg = "bg-[var(--panel-2)]",
}: Props) {
  const n = steps.length;
  const halfCol = `${50 / n}%`;

  return (
    <section className={`px-6 py-20 text-foreground lg:px-10 lg:py-24 ${bg}`}>
      <div className="mx-auto max-w-[1440px]">
        {/* heading block */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#1a6b3d]/30 bg-[#1a6b3d]/8 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#1a6b3d] dark:border-[#86e0a3]/30 dark:bg-[#86e0a3]/10 dark:text-[#86e0a3]">
            {eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className="text-[#1a6b3d]">{titleAccent}</span>
              </>
            )}
          </h2>
          {intro && (
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {intro}
            </p>
          )}
        </div>

        {/* ---------- desktop: horizontal rail ---------- */}
        <ol
          className="relative mt-16 hidden lg:grid"
          style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}
        >
          {/* the rule, stopping at the centre of the first and last node */}
          <span
            aria-hidden="true"
            className="absolute top-9 h-px bg-neutral-300 dark:bg-white/20"
            style={{ left: halfCol, right: halfCol }}
          />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.title} className="relative flex flex-col items-center px-4 text-center">
                <span className="relative">
                  <span className="grid h-[72px] w-[72px] place-items-center rounded-full bg-gradient-to-br from-[#15703a] to-[#4cb45a] text-white">
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </span>
                  {/* number badge, notched over the top-left of the node */}
                  <span className="absolute -left-1.5 -top-1 grid h-8 w-8 place-items-center rounded-full border border-border bg-[var(--panel-2)] text-sm font-bold text-foreground">
                    {i + 1}
                  </span>
                </span>

                <h3 className="mt-7 text-sm font-extrabold uppercase tracking-[0.1em] text-foreground">
                  {s.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[17rem] text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </li>
            );
          })}
        </ol>

        {/* ---------- mobile / tablet: vertical rail ---------- */}
        <ol className="mt-12 space-y-0 lg:hidden">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const last = i === n - 1;
            return (
              <li key={s.title} className="relative flex gap-5 pb-8 last:pb-0">
                {/* connector down to the next node */}
                {!last && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[31px] top-16 bottom-0 w-px bg-neutral-300 dark:bg-white/20"
                  />
                )}
                <span className="relative shrink-0">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-[#15703a] to-[#4cb45a] text-white">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <span className="absolute -left-1.5 -top-1 grid h-7 w-7 place-items-center rounded-full border border-border bg-[var(--panel-2)] text-xs font-bold text-foreground">
                    {i + 1}
                  </span>
                </span>
                <div className="pt-2">
                  <h3 className="text-sm font-extrabold uppercase tracking-[0.1em] text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>

        {(footnote || cta) && (
          <div className="mt-16 text-center">
            {footnote && <p className="text-sm text-muted-foreground sm:text-base">{footnote}</p>}
            {cta && (
              <Link
                href={cta.href}
                className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-[#15703a] to-[#4cb45a] px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105"
              >
                {cta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
