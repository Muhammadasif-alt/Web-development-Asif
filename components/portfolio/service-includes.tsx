import Link from "next/link";
import {
  ArrowRight,
  Target,
  Search,
  Settings2,
  FileText,
  MapPin,
  ClipboardList,
  Link2,
  BarChart3,
  Layers,
  ShieldCheck,
  Zap,
  Boxes,
} from "lucide-react";

export type IncludeItem = { title: string; desc: string };

type Props = {
  /** Heading, split so the tail can carry the brand colour. */
  title: string;
  titleAccent?: string;
  intro?: string;
  items: IncludeItem[];
  /** Where each card's link points. Defaults to the contact page. */
  itemHref?: string;
  cta?: { label: string; href: string };
  bg?: string;
};

/* Icons by position — the copy differs per service, the card shape does not. */
const ICONS = [
  Target,
  Search,
  Settings2,
  FileText,
  MapPin,
  ClipboardList,
  Link2,
  BarChart3,
  Layers,
  ShieldCheck,
  Zap,
  Boxes,
];

/**
 * "What's included" card grid: four across on desktop, each card an icon tile
 * over a title, a short description, and a link into the enquiry flow.
 */
export function ServiceIncludes({
  title,
  titleAccent,
  intro,
  items,
  itemHref = "/contact",
  cta,
  bg = "bg-[var(--panel)]",
}: Props) {
  return (
    <section className={`px-6 py-20 text-foreground lg:px-10 lg:py-24 ${bg}`}>
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <article
                key={it.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-[#1a6b3d]/45 hover:bg-[#1a6b3d]/[0.06]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-[#1a6b3d]/25 bg-[#1a6b3d]/12 text-[#1a6b3d]">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-base font-bold text-foreground">{it.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                <Link
                  href={itemHref}
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#1a6b3d]/40 px-4 py-2 text-xs font-bold text-[#1a6b3d] dark:text-[#1a6b3d] transition-colors hover:border-transparent hover:bg-gradient-to-r hover:from-[#1a6b3d] hover:to-[#1a6b3d] hover:text-white"
                >
                  Click here
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </article>
            );
          })}
        </div>

        {cta && (
          <div className="mt-14 text-center">
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
