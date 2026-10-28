import type { Metadata } from "next";
import { ServiceDetailPage, type ServiceDetail } from "@/components/portfolio/service-detail";

const DATA: ServiceDetail = {
  slug: "website-rescue",
  name: "Website Rescue and Launch",
  meta: {
    title: "Website Rescue, Restore & Launch Help",
    description:
      "Website down, expired, or stuck? I restore sites from backup after domain or hosting expiry, fix WordPress 503 and plugin errors, and plan and deploy sites you built yourself or with AI. Fast replies.",
  },
  hero: {
    small: "Service",
    title: "Website Rescue & Launch",
    taglineTitle: "Down, stuck, or not live yet? I'll sort it.",
    taglineText:
      "Your site went offline after the domain or hosting expired, a plugin broke WordPress, or you built something yourself and cannot get it live. Send me what you have and I will get it working.",
  },
  intro: {
    heading: "Most website emergencies are simpler than they look",
    body: "A lot of the calls I get start the same way: \"my website is gone.\" Sometimes the domain or hosting expired and the site disappeared. Sometimes a plugin update took a WordPress site down with a 503 or a white screen. And more and more often, someone has built a site or app themselves — with a page builder or with AI tools like ChatGPT or Claude — and it works on their laptop but they have no idea how to plan the hosting, connect the domain, and deploy it properly.\n\nNone of these need a full rebuild. They need someone who knows where to look. I restore sites from backups, renew and reconnect domains, fix plugin and server errors, move sites between hosts like Hostinger and cPanel providers, and take self-built projects from \"works on my machine\" to live, secure, and fast. Small changes and improvements on existing sites are welcome too.",
  },
  included: [
    {
      title: "Restore after domain or hosting expiry",
      desc: "Bring a site back from a hosting or plugin backup, reconnect the domain, and get it live again — on the old host or a new one.",
    },
    {
      title: "WordPress 503, white screen and plugin errors",
      desc: "Find the plugin, theme or PHP version that broke the site, fix it safely, and stop it happening again.",
    },
    {
      title: "Launch help for self-built sites",
      desc: "Built it yourself on WordPress, Wix-style builders or custom code? I handle domain, DNS, SSL, email and go-live.",
    },
    {
      title: "Plan and deploy AI-written projects",
      desc: "Wrote your app with ChatGPT or Claude? I review it, plan the hosting and database, deploy it, and fix what breaks in production.",
    },
    {
      title: "Hosting moves without downtime",
      desc: "Migrate to Hostinger, a VPS or Vercel with files, database, email and SSL moved over and nothing lost.",
    },
    {
      title: "Small changes and improvements",
      desc: "Text and image updates, a new section, a broken form, speed fixes — quick jobs on existing sites, quoted upfront.",
    },
    {
      title: "Bug fixes in custom code",
      desc: "Broken features in React, Next.js, Node, PHP or Laravel fixed — whether a developer or an AI tool wrote the code.",
    },
    {
      title: "Code cleanup and security check",
      desc: "Exposed API keys removed, risky queries and missing validation fixed, and messy code tidied so it is safe to build on.",
    },
  ],
  benefits: [
    {
      title: "Back online fast",
      desc: "Most restores and error fixes are a matter of hours, not weeks, once I have access and a backup.",
    },
    {
      title: "Nothing rebuilt that doesn't need to be",
      desc: "I fix and recover what you already have instead of selling you a new website you did not ask for.",
    },
    {
      title: "Your project, actually live",
      desc: "Self-built and AI-built projects go out with a real domain, SSL, backups and a setup you can maintain.",
    },
    {
      title: "Plain explanations",
      desc: "You find out what broke, why, and what was done — in plain language, not a wall of jargon.",
    },
  ],
  process: [
    {
      title: "Tell me what happened",
      desc: "Send a message with your domain and what you see. Share any backups, hosting login or code you have.",
    },
    {
      title: "Quick diagnosis",
      desc: "I check the domain, hosting, files and error logs, then tell you what is wrong and the fixed price to sort it.",
    },
    {
      title: "Restore or fix",
      desc: "I restore the backup, fix the error, or set up hosting and deploy — working on a copy first where possible.",
    },
    {
      title: "Test and go live",
      desc: "Pages, forms, SSL, email and mobile are checked before the site is switched back on for your visitors.",
    },
    {
      title: "Keep it safe",
      desc: "Automatic backups and update advice so it does not happen again — with care plans if you want it handled.",
    },
  ],
  tech: [
    "WordPress",
    "PHP",
    "Laravel",
    "MySQL",
    "Next.js",
    "Node.js",
    "Hostinger",
    "cPanel",
    "Vercel",
    "Cloudflare",
    "DNS & SSL",
    "Git",
  ],
  packages: [
    {
      name: "Quick Fix",
      price: "Fixed quote",
      period: "",
      tagline: "One error or a handful of small changes.",
      features: [
        "WordPress 503 or plugin error fix",
        "Small text, image or layout changes",
        "Broken form or link fixes",
        "Price agreed before work starts",
      ],
      featured: false,
      cta: "Get a quote",
    },
    {
      name: "Rescue & Restore",
      price: "Fixed quote",
      period: "",
      tagline: "Your site is down and needs bringing back.",
      features: [
        "Restore from hosting or plugin backup",
        "Domain renewal and DNS reconnection",
        "Move to new hosting if needed",
        "SSL, email and forms checked",
        "Backups set up so it doesn't repeat",
      ],
      featured: true,
      cta: "Get my site back",
    },
    {
      name: "Launch & Deploy",
      price: "Fixed quote",
      period: "",
      tagline: "You built it — I get it live properly.",
      features: [
        "Code review of self-built or AI-built projects",
        "Hosting, database and deployment plan",
        "Domain, DNS, SSL and email setup",
        "Fix production bugs found on launch",
        "Handover notes so you can keep going",
      ],
      featured: false,
      cta: "Plan my launch",
    },
  ],
  faqs: [
    {
      q: "My domain or hosting expired and the site is gone. Can it be brought back?",
      a: "Usually, yes. Most registrars give a grace period to renew an expired domain, and many hosts keep backups for a while after an account lapses. If you or a plugin like UpdraftPlus made backups, even better. I check what still exists, renew or reconnect what is needed, and restore the most recent copy.",
    },
    {
      q: "What if I don't have a backup?",
      a: "It depends on what survived. If the hosting account still exists, the files and database may still be there. If not, I can sometimes recover pages from caches and archives, though that is a partial rebuild rather than a restore. I will tell you honestly what is possible before you pay anything.",
    },
    {
      q: "My WordPress site shows a 503 error. What causes it?",
      a: "Most often a plugin or theme that conflicts after an update, a PHP version change, or the site running out of server resources. I find the cause from the error logs, disable or replace the faulty part safely, and get the site back up.",
    },
    {
      q: "I built my app with ChatGPT or Claude. Can you deploy it?",
      a: "Yes, this is one of the most common requests I get now. I review the code, fix anything that will not survive production — secrets in the code, missing environment settings, database setup — then plan the right hosting, deploy it, and connect your domain with SSL.",
    },
    {
      q: "Do you only work with Hostinger?",
      a: "No. I work with Hostinger, cPanel hosts, VPS servers, Vercel and most common providers. If your current host is the problem, I can move you somewhere better without losing data.",
    },
    {
      q: "Do you take on small changes, not just emergencies?",
      a: "Yes. Small edits and improvements on existing sites are welcome — content updates, a new section, a broken form, speed fixes. You get a fixed quote before I start.",
    },
  ],
  cta: {
    heading: "Website down or stuck before launch?",
    body: "Send me your domain and a short note about what happened. I will reply within 24 hours with what is wrong and a fixed price to fix it.",
  },
};

export const metadata: Metadata = {
  title: DATA.meta.title,
  description: DATA.meta.description,
  alternates: { canonical: "/services/website-rescue" },
  openGraph: { title: DATA.meta.title, description: DATA.meta.description, images: ["/og.jpg"] },
};

export default function Page() {
  return <ServiceDetailPage data={DATA} />;
}
