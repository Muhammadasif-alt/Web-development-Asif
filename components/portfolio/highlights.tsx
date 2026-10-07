"use client";

import { useState } from "react";
import { Search, Zap, Target, LifeBuoy, type LucideIcon } from "lucide-react";
import "./highlights.css";

type Item = {
  icon: LucideIcon;
  num: string;
  title: string;
  desc: string;
  img: string;
};

/* ---- EDIT YOUR "BEST" POINTS HERE ---- */
const ITEMS: Item[] = [
  {
    icon: Search,
    num: "01",
    title: "SEO-First Build",
    desc: "Every site ships with proper meta tags, schema markup, and Core Web Vitals tuned to rank on Google from day one.",
    img: "https://picsum.photos/seed/asif-why-seo/600/420",
  },
  {
    icon: Zap,
    num: "02",
    title: "Lightning Fast",
    desc: "Optimised, lightweight code and images so your pages load in under a second — on any device, anywhere.",
    img: "https://picsum.photos/seed/asif-why-fast/600/420",
  },
  {
    icon: Target,
    num: "03",
    title: "Conversion Focused",
    desc: "Layouts and copy designed to turn visitors into leads and paying customers, not just passing traffic.",
    img: "https://picsum.photos/seed/asif-why-convert/600/420",
  },
  {
    icon: LifeBuoy,
    num: "04",
    title: "Ongoing Support",
    desc: "I don't disappear after launch — updates, fixes, and improvements whenever you need them.",
    img: "https://picsum.photos/seed/asif-why-support/600/420",
  },
];

function Card({ item }: { item: Item }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = item.icon;

  const handleClick = () => {
    // tap-to-flip on touch devices (hover handles desktop)
    if (window.matchMedia("(hover: none)").matches) setFlipped((f) => !f);
  };

  return (
    <div className={`wf-card${flipped ? " flipped" : ""}`} onClick={handleClick}>
      <div className="wf-inner">
        {/* FRONT */}
        <div className="wf-face wf-front">
          <span
            className="wf-bg"
            style={{ ["--wf-img" as string]: `url(${item.img})` }}
            aria-hidden
          />
          <div className="wf-top">
            <div className="wf-ico">
              <Icon strokeWidth={2} />
            </div>
            <span className="wf-num">/ {item.num}</span>
          </div>
          <div>
            <h3>{item.title}</h3>
            <span className="wf-hint">Hover to read →</span>
          </div>
        </div>

        {/* BACK */}
        <div className="wf-face wf-back">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

export function Highlights() {
  return (
    <section id="why" className="py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-brand">
            <span className="h-px w-8 bg-brand" />
            Why Me
            <span className="h-px w-8 bg-brand" />
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Why clients keep coming back
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hover any card to see what you get when we work together.
          </p>
        </div>

        <div className="wf-grid">
          {ITEMS.map((item) => (
            <Card key={item.num} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
