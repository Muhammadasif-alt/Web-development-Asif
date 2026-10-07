"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Product = { title: string; img: string; price: string; was: string; save: string };

const arrow =
  "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-[#1a6b3d] hover:text-white";

/** Product slider: three cards in view on desktop, scrolled with two round arrow buttons. */
export function ProductCarousel({ heading, badge, items }: { heading: string; badge: string; items: Product[] }) {
  const track = useRef<HTMLDivElement>(null);

  const slide = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{heading}</h2>
        <div className="flex gap-3">
          <button type="button" onClick={() => slide(-1)} aria-label="Previous products" className={arrow}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => slide(1)} aria-label="Next products" className={arrow}>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={track}
        className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((p) => (
          <article
            key={p.title}
            className="w-[80%] shrink-0 snap-start overflow-hidden rounded-xl border border-border bg-card sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
          >
            <p className="bg-[#1a6b3d] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">{badge}</p>
            <div className="relative aspect-[4/3] bg-muted">
              <Image src={p.img} alt={p.title} fill sizes="(min-width:1024px) 33vw, 80vw" className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="line-clamp-2 h-[3.25rem] text-base font-semibold leading-[1.625rem]">{p.title}</h3>
              <div className="mt-3 rounded-lg bg-muted p-3">
                <p className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-red-500">{p.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{p.was}</span>
                </p>
                <span className="mt-3 inline-block rounded-full bg-[#1a6b3d] px-4 py-1.5 text-xs font-bold text-white">Save {p.save}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
