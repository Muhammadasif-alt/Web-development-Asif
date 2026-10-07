import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PROJECTS, projectShot } from "@/lib/projects-data";

const shot = (url: string) => projectShot(url);

export function Projects() {
  /* Show a curated subset on the home page; full list lives on /projects. */
  const featured = PROJECTS.slice(0, 6);

  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-8 bg-brand" />
              Selected Work
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Recent projects I&apos;m proud of
            </h2>
            <p className="mt-4 text-muted-foreground">
              A selection of live websites and stores I&apos;ve built — click any to visit the real
              site.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand/50 hover:text-brand"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card/50 transition-colors hover:border-brand/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot(p.url)}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg border border-border bg-background/80 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <div className="p-5">
                <div className="font-mono text-xs uppercase tracking-[0.15em] text-brand">{p.tag}</div>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
