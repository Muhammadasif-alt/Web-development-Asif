"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS, projectShot } from "@/lib/projects-data";

const LIMIT = 6;

/**
 * Six recent builds as large image cards in a drag-to-scroll strip.
 * Mouse users drag (or use the arrows); touch users swipe natively.
 */
export function HomeWork() {
  const shown = PROJECTS.slice(0, LIMIT);
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });
  const [dragging, setDragging] = useState(false);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? el.clientWidth) + 24), behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !track.current) return;
    drag.current = { down: true, startX: e.clientX, startScroll: track.current.scrollLeft, moved: false };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.down || !track.current) return;
    const dx = e.clientX - d.startX;
    if (!d.moved && Math.abs(dx) > 5) {
      d.moved = true;
      setDragging(true);
    }
    if (d.moved) track.current.scrollLeft = d.startScroll - dx;
  };

  const endDrag = () => {
    drag.current.down = false;
    // let the click handler see `moved` before it resets
    setTimeout(() => {
      drag.current.moved = false;
      setDragging(false);
    }, 0);
  };

  return (
    <div className="relative">
      <div
        ref={track}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={(e) => {
          if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
        onDragStart={(e) => e.preventDefault()}
        className={`flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          dragging ? "cursor-grabbing select-none" : "cursor-grab snap-x snap-mandatory"
        }`}
      >
        {shown.map((p, i) => (
          <a
            key={p.url}
            data-card
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[4/3] w-[86%] shrink-0 snap-start overflow-hidden rounded-3xl border bg-neutral-950 sm:w-[62%] lg:w-[calc((100%-1.5rem)/2)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={projectShot(p.url)}
              alt={`${p.title} — built by Asif`}
              loading="lazy"
              draggable={false}
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

      {/* arrows */}
      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous projects"
          className="grid h-11 w-11 place-items-center rounded-full border text-foreground transition-colors hover:bg-foreground/10"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next projects"
          className="grid h-11 w-11 place-items-center rounded-full border text-foreground transition-colors hover:bg-foreground/10"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
        <span className="ml-2 font-mono text-xs text-muted-foreground">Drag to explore</span>
      </div>
    </div>
  );
}
