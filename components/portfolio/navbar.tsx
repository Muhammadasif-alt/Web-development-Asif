"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";
import { SERVICE_LIST } from "@/lib/services-data";
import { BrandLogo } from "./brand-logo";

const LINKS: [string, string][] = [
  ["Home", "/"],
  ["About", "/about"],
];

const LINKS_AFTER: [string, string][] = [
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Asif — Web Development, home" className="flex items-center">
          <BrandLogo className="h-8 text-sm" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div className="group relative">
            <Link
              href="/#services"
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="grid w-[560px] grid-cols-2 gap-1 rounded-2xl border border-border bg-popover p-3">
                {SERVICE_LIST.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent"
                    >
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-brand/25 bg-brand/10 text-brand">
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-foreground">{s.name}</span>
                        <span className="block truncate text-xs text-muted-foreground">{s.tagline}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {LINKS_AFTER.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild className="rounded-full">
            <Link href="/contact">Start a project</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
