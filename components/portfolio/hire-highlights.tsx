"use client";

import { useState } from "react";
import { Rocket, Layers, Search, MessageSquare, type LucideIcon } from "lucide-react";
import "./hire-highlights.css";

type Item = {
  icon: LucideIcon;
  num: string;
  title: string;
  desc: string;
  img: string;
};

/* About-focused flip cards — the values behind every build. */
const ITEMS: Item[] = [
  {
    icon: Rocket,
    num: "01",
    title: "Self-Taught & Driven",
    desc: "I taught myself to code in 2018 out of curiosity — and I've been shipping real projects ever since.",
    img: "https://picsum.photos/seed/asif-about-driven/600/420",
  },
  {
    icon: Layers,
    num: "02",
    title: "Full-Stack Range",
    desc: "From WordPress and Shopify to Laravel, Python, and Next.js — I pick the right tool for your goals.",
    img: "https://picsum.photos/seed/asif-about-stack/600/420",
  },
  {
    icon: Search,
    num: "03",
    title: "SEO in My DNA",
    desc: "Clean structure, schema, and Core Web Vitals are part of how I build — SEO is never an add-on.",
    img: "https://picsum.photos/seed/asif-about-seo/600/420",
  },
  {
    icon: MessageSquare,
    num: "04",
    title: "Clear Communication",
    desc: "No jargon, no black boxes — just honest timelines, regular updates, and measurable results.",
    img: "https://picsum.photos/seed/asif-about-comms/600/420",
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
    <div className={`hwf-card${flipped ? " flipped" : ""}`} onClick={handleClick}>
      <div className="hwf-inner">
        {/* FRONT */}
        <div className="hwf-face hwf-front">
          <span
            className="hwf-bg"
            style={{ ["--hwf-img" as string]: `url(${item.img})` }}
            aria-hidden
          />
          <div className="hwf-top">
            <div className="hwf-ico">
              <Icon strokeWidth={2} />
            </div>
            <span className="hwf-num">/ {item.num}</span>
          </div>
          <div>
            <h3>{item.title}</h3>
            <span className="hwf-hint">Hover to read →</span>
          </div>
        </div>

        {/* BACK */}
        <div className="hwf-face hwf-back">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

export function HireHighlights() {
  return (
    <section className="relative overflow-hidden bg-[var(--panel)] px-6 py-20 text-foreground lg:px-10 lg:py-28">
      <div className="relative mx-auto max-w-[1440px]">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[#1a6b3d]">
            <span className="h-px w-8 bg-[#1a6b3d]" />
            What Drives Me
            <span className="h-px w-8 bg-[#1a6b3d]" />
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            The values behind every build
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hover any card to see what shapes the way I work.
          </p>
        </div>

        <div className="hwf-grid">
          {ITEMS.map((item) => (
            <Card key={item.num} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
