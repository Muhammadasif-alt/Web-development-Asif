"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, projectShot, type ProjectCategory } from "@/lib/projects-data";

const shot = (url: string) => projectShot(url);

const TABS: ("All" | ProjectCategory)[] = [
  "All",
  "Web Development",
  "E-commerce",
  "Web Apps",
  "SEO and Growth",
];

export function ProjectsFilter() {
  const [active, setActive] = useState<(typeof TABS)[number]>("All");

  const shown = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div>
      {/* filter tabs */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {TABS.map((t) => {
          const on = t === active;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setActive(t)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                on
                  ? "border-[#1a6b3d] bg-[#1a6b3d] text-white"
                  : "border-border bg-card text-muted-foreground hover:border-[#1a6b3d]/50 hover:text-foreground"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Tap a category to see the projects that fit what you need.
      </p>

      {/* grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <a
            key={p.url}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1a6b3d]/60"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shot(p.url)}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg border border-border bg-black/70 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <span className="w-fit rounded-full bg-[#1a6b3d]/12 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1a6b3d]">
                {p.category}
              </span>
              <h3 className="mt-3 text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-card px-2 py-1 text-[11px] text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1a6b3d]">
                View live site
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
