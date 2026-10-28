"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { BrandLogo } from "./brand-logo";
import { ThemeToggle } from "./theme-toggle";

const SERVICES = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "App Development", href: "/services/app-development" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "SEO", href: "/services/marketing" },
  { label: "Social Media & Ads", href: "/services/social-media-ads" },
  { label: "Maintenance & Support", href: "/services/support-maintenance" },
  { label: "Website Rescue & Launch", href: "/services/website-rescue" },
];

const LINKS: { label: string; href: string; items?: { label: string; href: string }[] }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", items: SERVICES },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

/*
 * The bar is always white with dark ink, whatever the theme or the section it sits in.
 * Classes below avoid `dark:` variants on purpose — the nav often renders inside a
 * section locked to `.dark`, and those variants would flip it back to white-on-white.
 */
const link = "inline-flex items-center gap-1 rounded-full px-4 py-2 transition-colors";
const linkActive = "bg-[#1a6b3d] text-white";
const linkIdle = "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950";

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
    <nav className="relative isolate flex items-center justify-between py-4">
      {/* full-bleed white bar behind the contained nav */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 border-b border-neutral-200 bg-white"
      />

      <Link href="/" onClick={close} aria-label="Web Development By Asif — home" className="shrink-0">
        <BrandLogo onLight className="h-9 text-[15px] sm:h-10 sm:text-base" />
      </Link>

      {/* desktop links */}
      <div className="hidden items-center gap-1 text-sm font-semibold md:flex">
        {LINKS.map((l) =>
          l.items ? (
            <div key={l.label} className="group relative">
              <Link href={l.href} className={`${link} ${isActive(l.href) ? linkActive : linkIdle}`}>
                {l.label}
                <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </Link>
              {/* dropdown */}
              <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-neutral-200 bg-white p-2 shadow-xl shadow-black/10">
                  {l.items.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-[#1a6b3d]/10 hover:text-[#1a6b3d]"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Link key={l.label} href={l.href} className={`${link} ${isActive(l.href) ? linkActive : linkIdle}`}>
              {l.label}
            </Link>
          )
        )}
      </div>

      {/* desktop: theme switch + CTA */}
      <div className="hidden items-center gap-3 md:flex">
        <ThemeToggle onLight />
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] py-2 pl-5 pr-2 text-sm font-bold text-white"
        >
          Start a project
          <span className="grid h-7 w-7 place-items-center rounded-full bg-black/85 text-white ring-1 ring-white/15">
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>

      {/* mobile: theme switch + menu */}
      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle onLight />
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-full bg-neutral-100 text-neutral-800 transition-colors hover:bg-neutral-200"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* mobile panel */}
      {open && (
        <div className="absolute inset-x-0 top-full z-50 mt-2 origin-top rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl shadow-black/10 md:hidden">
          <div className="flex flex-col">
            {LINKS.map((l) =>
              l.items ? (
                <div key={l.label}>
                  <button
                    type="button"
                    onClick={() => setOpenMenu((m) => (m === l.label ? null : l.label))}
                    aria-expanded={openMenu === l.label}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-neutral-800 transition-colors hover:bg-neutral-100"
                  >
                    {l.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openMenu === l.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openMenu === l.label && (
                    <div className="ml-3 flex flex-col border-l border-neutral-200 pl-3">
                      {l.items.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={close}
                          className="rounded-lg px-3 py-2.5 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950"
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
                  className={`rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                    isActive(l.href) ? "bg-[#1a6b3d]/10 text-[#1a6b3d]" : "text-neutral-800 hover:bg-neutral-100"
                  }`}
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
              Start a project
              <span className="grid h-7 w-7 place-items-center rounded-full bg-black/85 text-white">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
