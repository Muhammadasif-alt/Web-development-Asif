/**
 * Central site config. Set NEXT_PUBLIC_SITE_URL in Vercel once a custom
 * domain is connected; everything else (canonicals, sitemap, JSON-LD, OG)
 * follows from here.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://next-portfilo-wine.vercel.app"
).replace(/\/$/, "");

export const SITE = {
  url: SITE_URL,
  name: "Asif.dev",
  personName: "Rao Asif Riyasat",
  jobTitle: "Full-Stack Web Developer",
  email: "raoasifriyasat@gmail.com",
  phone: "+923088663440",
  description:
    "Full-stack developer building web apps, online stores, and business sites. MERN stack, WordPress, and Shopify — fast, SEO-ready builds that convert and scale. Freelance, worldwide, replies in 24h.",
  ogImage: `${SITE_URL}/og.jpg`,
} as const;

/** Public profiles. Rendered in the footer and emitted as schema `sameAs`. */
export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Muhammadasif-alt" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ranaasifriyasat" },
  { label: "Facebook", href: "https://www.facebook.com/AsifRao440" },
  { label: "Instagram", href: "https://www.instagram.com/raodeveloper/" },
] as const;

export const SOCIAL_URLS = SOCIALS.map((s) => s.href);

export const abs = (path: string) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
