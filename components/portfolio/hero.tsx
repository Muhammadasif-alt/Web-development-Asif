"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

/* The headline subtitle cycles through these */
const ROLES = [
  "WordPress sites.",
  "Shopify stores.",
  "Web applications.",
  "Landing pages.",
  "SEO-ready sites.",
];

/* Right-side browser frame cycles through real live projects.
   Screenshots are generated live from each site via WordPress mShots. */
const shotUrl = (url: string) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=750`;

const SHOTS = [
  { url: "https://dehleezstudio.com", src: shotUrl("https://dehleezstudio.com"), title: "Dehleez Studio", tag: "Web Design" },
  { url: "https://divan-factory-outlet.myshopify.com/", src: shotUrl("https://divan-factory-outlet.myshopify.com/"), title: "Divan Factory Outlet", tag: "Shopify" },
  { url: "https://www.azcarparts.co.uk/", src: shotUrl("https://www.azcarparts.co.uk/"), title: "AZ Car Parts", tag: "E-commerce" },
  { url: "https://jobsinusa.us", src: shotUrl("https://jobsinusa.us"), title: "Jobs in USA", tag: "Job Portal" },
];

const STATS: [string, string][] = [
  ["50+", "Projects shipped"],
  ["5+", "Years experience"],
  ["100%", "Client focus"],
];

export function Hero() {
  const [word, setWord] = useState(0);
  const [shot, setShot] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWord((w) => (w + 1) % ROLES.length), 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setShot((s) => (s + 1) % SHOTS.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://picsum.photos/seed/asif-hero-bg/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      {/* ambient glow */}

      <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-12 px-6 pb-24 pt-36 lg:min-h-screen lg:grid-cols-2 lg:gap-16 lg:pb-28 lg:pt-40">
        {/* LEFT — copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-4 py-1.5 text-xs font-medium text-brand">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
            Available for new projects
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            I design &amp; build
            <br />
            <span
              key={word}
              className="inline-block animate-in fade-in slide-in-from-bottom-3 text-brand duration-500"
            >
              {ROLES[word]}
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Hi, I&apos;m Asif — a freelance web developer. I turn ideas into fast,
            SEO-ready websites and stores that actually convert visitors into clients.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <a href="#work">View my work</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-transparent text-foreground hover:bg-accent hover:text-foreground"
            >
              <a href="#contact">Get in touch</a>
            </Button>
          </div>

          <div className="mt-12 flex gap-10">
            {STATS.map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-bold text-foreground">{n}</div>
                <div className="mt-1 text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — browser frame with rotating project shots */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur">
            {/* browser chrome */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-muted-foreground/40" />
              <span className="h-3 w-3 rounded-full bg-muted-foreground/40" />
              <span className="h-3 w-3 rounded-full bg-muted-foreground/40" />
              <span className="ml-3 truncate rounded-md bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">
                {SHOTS[shot].url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
            </div>

            {/* rotating image */}
            <div className="relative aspect-[16/10]">
              {SHOTS.map((s, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={s.src}
                  alt={s.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    i === shot ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/85 to-transparent p-4">
                <a
                  href={SHOTS[shot].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cap"
                >
                  <div className="text-sm font-semibold text-foreground group-hover/cap:text-brand">
                    {SHOTS[shot].title}
                  </div>
                  <div className="text-xs text-zinc-300">{SHOTS[shot].tag}</div>
                </a>
                <div className="flex items-center gap-1.5">
                  {SHOTS.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Show project ${i + 1}`}
                      onClick={() => setShot(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === shot ? "w-5 bg-brand" : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
