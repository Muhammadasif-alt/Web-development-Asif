"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, projectShot } from "@/lib/projects-data";

const LIMIT = 6;
/* page scroll (in viewport heights) spent on each card step */
const STEP_VH = 55;

/**
 * Six recent builds as large image cards. The section pins while the visitor
 * scrolls, and every stretch of scroll slides exactly one more card in —
 * scrolling back up slides them back out.
 */
export function HomeWork({ header }: { header: React.ReactNode }) {
  const shown = PROJECTS.slice(0, LIMIT);
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [steps, setSteps] = useState(shown.length);

  // How many cards fit decides how many steps there are.
  useEffect(() => {
    const measure = () => {
      const t = track.current;
      const card = t?.querySelector<HTMLElement>("[data-card]");
      if (!t || !card) return;
      const stride = card.offsetWidth + 24;
      const visible = Math.max(1, Math.floor((t.parentElement!.clientWidth + 24) / stride));
      setSteps(Math.max(1, shown.length - visible + 1));
      setOffset(stride);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [shown.length]);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = outer.current;
        if (!el) return;
        const scrollable = el.offsetHeight - window.innerHeight;
        const progress = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / Math.max(1, scrollable)));
        setIndex(Math.min(steps - 1, Math.floor(progress * steps)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [steps]);

  return (
    <div ref={outer} style={{ height: `calc(100vh + ${(steps - 1) * STEP_VH}vh)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-10">
        {header}

        <div className="mt-10">
          <div
            ref={track}
            className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${index * offset}px)` }}
          >
            {shown.map((p, i) => (
              <a
                key={p.url}
                data-card
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/3] max-h-[62vh] w-[86%] shrink-0 overflow-hidden rounded-3xl border bg-neutral-950 sm:w-[62%] lg:w-[calc((100%-1.5rem)/2)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={projectShot(p.url)}
                  alt={`${p.title} — built by Asif`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black from-30% via-black/75 to-black/0" />

                <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border bg-black/40 text-white backdrop-blur-sm transition-colors group-hover:bg-[#1a6b3d]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div
                    className="font-mono text-5xl font-extrabold leading-none text-transparent sm:text-6xl"
                    style={{ WebkitTextStroke: "1.5px #4cd38a" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/85 backdrop-blur-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* progress */}
          <div className="mt-6 flex items-center gap-4">
            <span className="font-mono text-xs text-muted-foreground">
              {String(index + 1).padStart(2, "0")} / {String(steps).padStart(2, "0")}
            </span>
            <div className="h-px flex-1 max-w-xs bg-border">
              <div
                className="h-px bg-[#4cd38a] transition-all duration-700"
                style={{ width: `${((index + 1) / steps) * 100}%` }}
              />
            </div>
            <span className="font-mono text-xs text-muted-foreground">Scroll to explore</span>
          </div>
        </div>
      </div>
    </div>
  );
}
