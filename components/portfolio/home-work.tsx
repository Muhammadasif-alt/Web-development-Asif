"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS, projectShot, type Project, type ProjectCategory } from "@/lib/projects-data";

/**
 * Work shown by the kind of build a visitor came for, not as one undifferentiated
 * pile. Someone looking for a SaaS dashboard should not have to scroll past
 * fifteen brochure sites to decide I can do it.
 */
const GROUPS: { label: string; blurb: string; categories: ProjectCategory[] }[] = [
  {
    label: "Websites & SEO",
    blurb: "WordPress business sites engineered to rank and bring in leads.",
    categories: ["Web Development", "SEO and Growth"],
  },
  {
    label: "E-commerce",
    blurb: "Shopify and WooCommerce stores built to load fast and convert.",
    categories: ["E-commerce"],
  },
  {
    label: "Web Apps",
    blurb: "Dashboards, portals, and platforms built on the MERN stack and Next.js.",
    categories: ["Web Apps"],
  },
];

const LIMIT = 6;

export function HomeWork() {
  const [active, setActive] = useState(0);
  const group = GROUPS[active];
  const shown: Project[] = PROJECTS.filter((p) => group.categories.includes(p.category)).slice(
    0,
    LIMIT
  );

  return (
    <div>
      {/* tabs */}
      <div className="flex flex-wrap gap-2.5">
        {GROUPS.map((g, i) => {
          const on = i === active;
          return (
            <button
              key={g.label}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={on}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                on
                  ? "border-[#1a6b3d] bg-[#1a6b3d] text-white"
                  : "border-border bg-card text-muted-foreground hover:border-[#1a6b3d]/50 hover:text-foreground"
              }`}
            >
              {g.label}
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{group.blurb}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <a
            key={p.url}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-[var(--panel-2)] to-[var(--panel)] p-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1a6b3d]/60"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={projectShot(p.url)}
                alt={`${p.title} — built by Asif`}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 items-end justify-between gap-4 px-3 pb-2 pt-5">
              <div>
                <h3 className="text-lg font-extrabold leading-tight">{p.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-[#1a6b3d]/30 bg-[#1a6b3d]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#1a6b3d]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-foreground transition-colors group-hover:border-[#1a6b3d] group-hover:bg-[#1a6b3d]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </a>
        ))}

        {/* Fewer public case studies exist for app work than for sites, so the gap
            gets an honest invitation rather than filler cards. */}
        {shown.length < 3 && (
          <Link
            href="/contact"
            className="group flex min-h-[260px] flex-col justify-between rounded-3xl border border-dashed border-[#1a6b3d]/40 bg-[#1a6b3d]/[0.04] p-7 transition-colors hover:border-[#1a6b3d] hover:bg-[#1a6b3d]/10"
          >
            <div>
              <h3 className="text-lg font-extrabold leading-tight text-foreground">
                More app builds under NDA
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Admin panels, internal tools, and SaaS dashboards I cannot publish. Ask and I will
                walk you through them on a call.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a6b3d]">
              Request a walkthrough
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
