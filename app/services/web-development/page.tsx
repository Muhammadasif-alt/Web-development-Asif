import type { Metadata } from "next";
import { ServiceDetailPage, type ServiceDetail } from "@/components/portfolio/service-detail";

const DATA: ServiceDetail = {
  slug: "web-development",
  name: "Web Development",
  meta: {
    title: "Web Development Services",
    description:
      "Fast, SEO-ready web development. WordPress, Shopify, and Next.js developer building custom web apps that load fast and rank from day one. Get a fixed quote.",
  },
  hero: {
    small: "Service",
    title: "Web Development",
    taglineTitle: "Fast sites and apps, built on the right stack for your goals",
    taglineText:
      "From a simple business site to a full custom web app, I write clean, semantic code that loads fast and ranks well. No bloated page builders, no themes held together with plugins.",
  },
  intro: {
    heading: "Web development done right, from the code up",
    body:
      "Most sites are slow because they are built the easy way, one page builder stacked on top of another, a theme propped up by twenty plugins. I do not work like that. As a WordPress developer, Shopify developer, and Next.js developer, I pick the right stack for what you actually need and build it clean, so your site is quick, semantic, and ready to rank the day it goes live.\n\nWhether you want a professional business site, a WooCommerce store, or full custom web apps in Laravel or the MERN stack, you get code that is easy to maintain and built to perform. I work with clients across the US, UK, UAE, and Pakistan, reply within 24 hours, and quote a fixed price up front so there are no surprises.",
  },
  included: [
    {
      title: "WordPress and Elementor builds",
      desc: "Custom WordPress sites built lean, no plugin bloat, fully editable by you.",
    },
    {
      title: "Shopify and Liquid themes",
      desc: "Custom Shopify themes coded in Liquid, tuned for speed and conversions.",
    },
    {
      title: "Custom web apps",
      desc: "Full platforms in Laravel, Next.js, and the MERN stack, built for your exact workflow.",
    },
    {
      title: "Headless and JAMstack builds",
      desc: "Next.js with a headless CMS for lightning-fast, secure, scalable sites.",
    },
    {
      title: "WooCommerce online stores",
      desc: "Sell online with a fast, flexible store that is easy to manage day to day.",
    },
    {
      title: "Mobile apps with React Native",
      desc: "One codebase, iOS and Android, native feel without doubling the budget.",
    },
    {
      title: "Redesign and migration",
      desc: "Modernize an aging site or move platforms without losing your rankings.",
    },
    {
      title: "API and payment integrations",
      desc: "Connect the tools you already use and take payments securely out of the box.",
    },
  ],
  benefits: [
    {
      title: "Sites that load fast",
      desc: "Clean code and the right stack mean sub-second load times and strong Core Web Vitals.",
    },
    {
      title: "Ready to rank on day one",
      desc: "Semantic, SEO-ready markup so your site can rank the moment it goes live.",
    },
    {
      title: "Built for your goals",
      desc: "The right build for what you actually need, not a bloated template forced to fit.",
    },
    {
      title: "Fixed quotes, no surprises",
      desc: "A clear one-time price agreed up front, with replies within 24 hours throughout.",
    },
  ],
  process: [
    {
      title: "Discovery and quote",
      desc: "We talk through your goals, users, and features, then I send a fixed one-time quote.",
    },
    {
      title: "Stack and plan",
      desc: "I pick the right stack, WordPress, Shopify, Next.js, or Laravel, and map the build.",
    },
    {
      title: "Design and build",
      desc: "I code it clean and semantic, share progress, and keep you in the loop as it takes shape.",
    },
    {
      title: "Test and optimize",
      desc: "Cross-device testing, speed tuning, and Core Web Vitals checks before anything ships.",
    },
    {
      title: "Launch and handover",
      desc: "We go live, I hand over the keys, and I walk you through managing it yourself.",
    },
  ],
  tech: [
    "WordPress",
    "Elementor",
    "Shopify",
    "Liquid",
    "WooCommerce",
    "Next.js",
    "React",
    "Laravel",
    "Node.js",
    "MongoDB",
    "React Native",
    "Headless CMS",
  ],
  packages: [
    {
      name: "Starter",
      price: "From $499",
      period: "one-time",
      tagline: "A clean, fast professional site to get you online.",
      features: [
        "Up to 5 pages",
        "Custom WordPress or landing page build",
        "Mobile-responsive and SEO-ready",
        "Fast, semantic code",
        "Contact form and basic integrations",
      ],
      featured: false,
      cta: "Get started",
    },
    {
      name: "Growth",
      price: "From $999",
      period: "one-time",
      tagline: "A bigger site or store built to convert and rank.",
      features: [
        "Up to 12 pages or a WooCommerce/Shopify store",
        "Custom theme, no page builder bloat",
        "Payment gateway integration",
        "Speed and Core Web Vitals optimization",
        "On-page SEO setup",
        "Redesign or migration included",
      ],
      featured: true,
      cta: "Talk to me",
    },
    {
      name: "Custom",
      price: "Custom",
      period: "quote",
      tagline: "A full custom web app or platform, built to spec.",
      features: [
        "Custom web apps in Laravel, Next.js, or MERN",
        "Headless and JAMstack architecture",
        "React Native mobile app option",
        "API and third-party integrations",
        "Scalable, maintainable codebase",
        "Fixed quote after discovery",
      ],
      featured: false,
      cta: "Get a quote",
    },
  ],
  faqs: [
    {
      q: "Which platform will you build my site on?",
      a: "Whichever fits your goals. As a WordPress developer, Shopify developer, and Next.js developer, I do not push one tool on everyone. For a business site WordPress often makes sense, for a store Shopify or WooCommerce, and for custom web apps I reach for Next.js, Laravel, or the MERN stack.",
    },
    {
      q: "Will my site actually load fast?",
      a: "Yes. I write clean, semantic code instead of stacking page builders and plugins, so sites load fast, usually sub-second, and score well on Core Web Vitals. That speed also helps you rank.",
    },
    {
      q: "Can you redesign or migrate my existing site?",
      a: "I do redesigns and platform migrations regularly, and I do them carefully so you keep your existing rankings and content. We plan redirects and structure up front to protect your SEO.",
    },
    {
      q: "Do you build custom web apps, not just websites?",
      a: "Yes. Alongside standard sites I build full custom web apps in Laravel, Next.js, and the MERN stack, plus mobile apps with React Native. If you need a real platform rather than a brochure site, that is squarely what I do.",
    },
    {
      q: "How does pricing work?",
      a: "Web development is priced as a one-time build. Starter sites start around $499, larger builds and stores around $999, and full custom apps get a tailored quote after a quick discovery chat. The price is fixed up front, so no surprises.",
    },
    {
      q: "Where are you based and how do we work together?",
      a: "I work with clients worldwide, including the US, UK, UAE, and Pakistan, fully remote. You get replies within 24 hours and a fixed quote before any work starts.",
    },
  ],
  cta: {
    heading: "Let's build something fast, clean, and ready to rank",
    body: "Tell me what you need, a business site, a store, or a full custom web app, and I will send a fixed quote within 24 hours. No bloat, no surprises, just the right build for your goals.",
  },
};

export const metadata: Metadata = {
  title: DATA.meta.title,
  description: DATA.meta.description,
  alternates: { canonical: "/services/web-development" },
  openGraph: { title: DATA.meta.title, description: DATA.meta.description, images: ["/og.jpg"] },
};

export default function Page() {
  return <ServiceDetailPage data={DATA} />;
}
