"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShieldCheck, Star, BadgeCheck, Sparkles } from "lucide-react";
import type { Testimonial } from "@/lib/testimonials";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

/* One review at a time, glass card, auto-advances until the visitor takes over. */
export function Testimonials({ items }: { items: Testimonial[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = items[i];

  useEffect(() => {
    if (paused || items.length < 2) return;
    const id = setInterval(() => setI((n) => (n + 1) % items.length), 7000);
    return () => clearInterval(id);
  }, [paused, items.length]);

  const go = (n: number) => {
    setPaused(true);
    setI((n + items.length) % items.length);
  };

  return (
    <section className="dark relative overflow-hidden bg-black px-6 py-20 text-foreground lg:px-10 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,107,61,0.18),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d]">
            <span className="h-2 w-2 rounded-full bg-[#1a6b3d]" />
            Testimonials
          </p>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            What clients say
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Direct feedback from the founders and business owners I have built websites, stores and
            web apps for.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border bg-gradient-to-br from-white/[0.04] to-transparent p-6 backdrop-blur-sm sm:p-10 lg:p-12">
          {/* top row — rating + arrows */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-white text-white" />
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.08] px-3 py-1 font-mono text-[11px] text-white/80">
                <ShieldCheck className="h-3.5 w-3.5" />
                Verified Client
              </span>
              {t.sample && (
                <span className="rounded-full bg-amber-400/15 px-3 py-1 font-mono text-[11px] text-amber-300">
                  Sample — not live
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(i - 1)}
                aria-label="Previous testimonial"
                className="grid h-10 w-10 place-items-center rounded-full border text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => go(i + 1)}
                aria-label="Next testimonial"
                className="grid h-10 w-10 place-items-center rounded-full border text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* quote */}
          <blockquote
            key={i}
            className="mt-8 min-h-[9rem] animate-in fade-in text-2xl font-semibold leading-snug tracking-tight text-white duration-500 sm:text-3xl"
          >
            “{t.quote}”
          </blockquote>

          {/* author + project */}
          <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              {t.photo ? (
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-xl object-cover"
                />
              ) : (
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-[#1a6b3d] to-[#1a6b3d] text-lg font-extrabold text-white">
                  {initials(t.name)}
                </span>
              )}
              <div>
                <div className="flex items-center gap-1.5 font-semibold text-white">
                  {t.name}
                  <BadgeCheck className="h-4 w-4 text-white/70" />
                </div>
                <div className="text-sm text-white/55">
                  {t.role} · <span className="font-semibold text-white/85">{t.company}</span>
                </div>
              </div>
            </div>
            <div className="sm:text-right">
              <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs text-white/80">
                <Sparkles className="h-3.5 w-3.5 text-[#1a6b3d]" />
                {t.project}
              </span>
              <div className="mt-2 font-mono text-[11px] text-white/45">Delivered: {t.delivered}</div>
            </div>
          </div>

          {/* dots */}
          <div className="mt-10 flex justify-center gap-2">
            {items.map((_, d) => (
              <button
                key={d}
                type="button"
                onClick={() => go(d)}
                aria-label={`Show testimonial ${d + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  d === i ? "w-8 bg-white" : "w-1.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
