"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { BrandLogo } from "./brand-logo";
import { ThemeToggle } from "./theme-toggle";

const SERVICES = [
  { label: "Web App Development", href: "/services/web-apps" },
  { label: "Mobile App Development", href: "/services/mobile-apps" },
  { label: "E-commerce & Automation", href: "/services/ecommerce" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Marketing & SEO", href: "/services/marketing" },
  { label: "Support & Maintenance", href: "/services/support-maintenance" },
];

const INDUSTRIES = [
  { label: "Landscaping", href: "/industries/landscaping" },
  { label: "Construction", href: "/industries/construction" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "E-commerce", href: "/industries/ecommerce" },
  { label: "Home Renovation", href: "/industries/home-renovation" },
  { label: "Roofing", href: "/industries/roofing" },
];

const LINKS: { label: string; href: string; items?: { label: string; href: string }[] }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", items: SERVICES },
  { label: "Industries", href: "/industries", items: INDUSTRIES },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

/* Selected link is a solid pill; the rest sit in glass-rimmed pills (see globals.css). */
const pill = "inline-flex items-center gap-1 rounded-full border px-4 py-1.5 transition-colors";
const pillActive =
  "border-transparent bg-neutral-950 text-white shadow-md dark:bg-white dark:text-neutral-950 dark:shadow-[0_4px_18px_rgba(255,255,255,0.18)] no-glass";
const pillIdle =
  "text-neutral-700 hover:bg-neutral-900/5 hover:text-neutral-950 dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white";

export function HireNav() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setOpenMenu(null);
  };

  return (
    <nav className="relative flex items-center justify-between py-7">
      <Link href="/" onClick={close} aria-label="Web Development By Asif — home" className="shrink-0">
        <BrandLogo className="h-9 text-[15px] sm:h-10 sm:text-base" />
      </Link>

      {/* desktop links */}
      <div className="hidden items-center gap-2 text-sm font-medium md:flex">
        {LINKS.map((l) =>
          l.items ? (
            <div key={l.label} className="group relative">
              <Link
                href={l.href}
                className={`${pill} ${isActive(l.href) ? pillActive : pillIdle}`}
              >
                {l.label}
                <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </Link>
              {/* dropdown */}
              <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-neutral-200 bg-white p-2 dark:border-white/10 dark:bg-[#141414]">
                  {l.items.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block rounded-lg px-3 py-2.5 text-sm text-neutral-700 transition-colors hover:bg-[#1a6b3d]/12 hover:text-[#1a6b3d] dark:text-white/80"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Link
              key={l.label}
              href={l.href}
              className={`${pill} ${isActive(l.href) ? pillActive : pillIdle}`}
            >
              {l.label}
            </Link>
          )
        )}
      </div>

      {/* desktop: theme switch + CTA */}
      <div className="hidden items-center gap-3 md:flex">
        <ThemeToggle />
        <Link
        href="/contact"
        className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] py-2 pl-5 pr-2 text-sm font-bold text-white"
      >
        Get in touch
        <span className="grid h-8 w-8 place-items-center rounded-full bg-black/85 text-white ring-1 ring-white/15">
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
        </Link>
      </div>

      {/* mobile: theme switch + menu */}
      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="grid h-11 w-11 place-items-center rounded-full bg-neutral-900/8 text-neutral-800 backdrop-blur-sm transition-colors hover:bg-neutral-900/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* mobile panel */}
      {open && (
        <div className="absolute inset-x-0 top-full z-50 mt-2 origin-top rounded-2xl border border-neutral-200 bg-white/97 p-4 backdrop-blur-md dark:border-white/15 dark:bg-[#0d0d0d]/97 md:hidden">
          <div className="flex flex-col">
            {LINKS.map((l) =>
              l.items ? (
                <div key={l.label}>
                  <button
                    type="button"
                    onClick={() => setOpenMenu((m) => (m === l.label ? null : l.label))}
                    aria-expanded={openMenu === l.label}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-neutral-800 transition-colors hover:bg-neutral-900/5 dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    {l.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openMenu === l.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openMenu === l.label && (
                    <div className="ml-3 flex flex-col border-l border-neutral-200 pl-3 dark:border-white/15">
                      {l.items.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={close}
                          className="rounded-lg px-3 py-2.5 text-sm text-neutral-600 transition-colors hover:bg-neutral-900/5 dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={close}
                  className="rounded-lg px-4 py-3 text-base font-semibold text-neutral-800 transition-colors hover:bg-neutral-900/5 dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {l.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              onClick={close}
              className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] py-3 text-sm font-bold text-white"
            >
              Get in touch
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20 text-white dark:bg-white/20">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
