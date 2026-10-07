import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { SERVICE_LIST } from "@/lib/services-data";
import { BrandLogo } from "./brand-logo";

const EMAIL = "raoasifriyasat@gmail.com";
const PHONE = "03088663440";
const PHONE_HREF = "+923088663440";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Muhammadasif-alt",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ranaasifriyasat",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.51C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://www.facebook.com/AsifRao440",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.04l12.04 15.64Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    icon: <Mail className="h-4 w-4" />,
  },
];

const NAV: [string, string][] = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/#services"],
  ["Projects", "/projects"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-[1440px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Asif — Web Development, home" className="inline-flex">
              <BrandLogo className="h-9 text-[15px]" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Freelance web developer building fast, SEO-ready websites, stores, and web apps that
              turn visitors into clients.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* navigate */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">Navigate</h3>
            <ul className="mt-5 space-y-3">
              {NAV.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-muted-foreground transition-colors hover:text-brand">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">Services</h3>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {SERVICE_LIST.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 transition-colors hover:text-brand">
                  <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_HREF}`} className="flex items-center gap-2.5 transition-colors hover:text-brand">
                  <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
                Available worldwide — remote
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-brand" />
                Open for new projects
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Asif — Web Development. All rights reserved.</p>
          <p>Development by Asif.</p>
        </div>
      </div>
    </footer>
  );
}
