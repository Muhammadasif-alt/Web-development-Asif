import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { SOCIALS } from "@/lib/site";
import { BrandLogo } from "./brand-logo";

const SOCIAL_ICONS: Record<string, IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
};

export function HireFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[#1a6b3d]/30 bg-[#0a1f14] px-6 py-14 text-white dark:bg-black lg:px-10">
      {/* light theme: deep brand green with a glow and faint grid; dark theme stays black */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[#1a6b3d]/45 blur-3xl dark:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)] dark:hidden"
      />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* brand */}
          <div className="max-w-sm">
            <Link href="/" aria-label="Web Development By Asif — home" className="inline-block">
              <BrandLogo onDark className="h-10 text-base" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Freelance web developer building fast, SEO-ready websites and stores that turn
              visitors into clients.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-white/70 transition-colors hover:border-transparent hover:bg-[#1a6b3d] hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-white/50">Explore</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[
                  ["Home", "/"],
                  ["About", "/about"],
                  ["Projects", "/projects"],
                  ["Services", "/services"],
                  ["Blog", "/blog"],
                  ["Contact", "/contact"],
                ].map(([l, h]) => (
                  <li key={l}>
                    <Link href={h} className="text-white/70 transition-colors hover:text-white">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-white/50">Services</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[
                  ["Web Development", "/services/web-development"],
                  ["App Development", "/services/app-development"],
                  ["UI/UX Design", "/services/ui-ux-design"],
                  ["SEO", "/services/marketing"],
                  ["Social Media & Ads", "/services/social-media-ads"],
                  ["Maintenance & Support", "/services/support-maintenance"],
                  ["Website Rescue", "/services/website-rescue"],
                ].map(([l, h]) => (
                  <li key={l}>
                    <Link href={h} className="text-white/70 transition-colors hover:text-white">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-white/50">Industries</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[
                  ["Landscaping", "/industries/landscaping"],
                  ["Construction", "/industries/construction"],
                  ["Real Estate", "/industries/real-estate"],
                  ["E-commerce", "/industries/ecommerce"],
                  ["Home Renovation", "/industries/home-renovation"],
                  ["Roofing", "/industries/roofing"],
                ].map(([l, h]) => (
                  <li key={l}>
                    <Link href={h} className="text-white/70 transition-colors hover:text-white">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-white/50">Get in touch</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/65">
                <li>
                  <a href="mailto:raoasifriyasat@gmail.com" className="flex items-center gap-2.5 transition-colors hover:text-white">
                    <Mail className="h-4 w-4 shrink-0 text-white/40" />
                    raoasifriyasat@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+923088663440" className="flex items-center gap-2.5 transition-colors hover:text-white">
                    <Phone className="h-4 w-4 shrink-0 text-white/40" />
                    03088663440
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 shrink-0 text-white/40" />
                  Available worldwide — remote
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© 2026 Asif — Web Development. All rights reserved.</p>
          <p>Development by Asif.</p>
        </div>
      </div>
    </footer>
  );
}
