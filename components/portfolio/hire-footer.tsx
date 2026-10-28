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
    <footer className="relative overflow-hidden border-t border-[#1a6b3d]/30 bg-black px-6 py-14 text-white lg:px-10">
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
                    className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-white/60 transition-colors hover:border-[#1a6b3d] hover:bg-[#1a6b3d]/10 hover:text-white"
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
              <h4 className="font-mono text-xs uppercase tracking-wider text-white/40">Explore</h4>
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
                    <Link href={h} className="text-white/65 transition-colors hover:text-[#1a6b3d]">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-white/40">Services</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[
                  ["Web Apps", "/services/web-apps"],
                  ["Mobile Apps", "/services/mobile-apps"],
                  ["E-commerce", "/services/ecommerce"],
                  ["Web Development", "/services/web-development"],
                  ["Marketing & SEO", "/services/marketing"],
                  ["Support", "/services/support-maintenance"],
                  ["Website Rescue", "/services/website-rescue"],
                ].map(([l, h]) => (
                  <li key={l}>
                    <Link href={h} className="text-white/65 transition-colors hover:text-[#1a6b3d]">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-white/40">Industries</h4>
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
                    <Link href={h} className="text-white/65 transition-colors hover:text-[#1a6b3d]">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-white/40">Get in touch</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/65">
                <li>
                  <a href="mailto:raoasifriyasat@gmail.com" className="flex items-center gap-2.5 transition-colors hover:text-[#1a6b3d]">
                    <Mail className="h-4 w-4 shrink-0 text-white/40" />
                    raoasifriyasat@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+923088663440" className="flex items-center gap-2.5 transition-colors hover:text-[#1a6b3d]">
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
