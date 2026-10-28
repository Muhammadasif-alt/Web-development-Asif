import type { Metadata } from "next";
import { ServiceDetailPage, type ServiceDetail } from "@/components/portfolio/service-detail";

const DATA: ServiceDetail = {
  slug: "support-maintenance",
  name: "Support and Maintenance",
  meta: {
    title: "Website Support and Maintenance",
    description: "Website maintenance and support plans that keep your site fast, secure, and online. Speed optimization, Core Web Vitals, backups, and 24h replies. Stay worry-free.",
  },
  hero: {
    small: "Service",
    title: "Support & Care",
    taglineTitle: "Your site, handled",
    taglineText: "I keep your website fast, secure, and always online so you never have to think about it. When something breaks, you have someone to call and a reply within 24 hours.",
  },
  intro: {
    heading: "A website is never a one-time job",
    body: "Your site needs updates, backups, and someone who actually picks up when something breaks. Plugins go out of date, security holes appear, and speed quietly slips over time. Left alone, small problems turn into downtime, lost customers, and expensive rebuilds.\n\nMy website maintenance and support plans keep your site healthy month after month. I handle the updates, the backups, the security, and the speed optimization so you can focus on running the business instead of worrying about your website.",
  },
  included: [
    {
      title: "Flexible monthly care plans",
      desc: "Pick the level of website support that fits your site, and scale up or down as you grow.",
    },
    {
      title: "Speed and Core Web Vitals tuning",
      desc: "Ongoing speed optimization to keep load times sub-second and your Core Web Vitals in the green.",
    },
    {
      title: "Security, backups, and updates",
      desc: "Plugin and core updates, hardened security, and regular backups so nothing gets lost or hacked.",
    },
    {
      title: "Bug fixes and small changes",
      desc: "Broken links, layout glitches, and quick content edits handled without you lifting a finger.",
    },
    {
      title: "Uptime monitoring",
      desc: "I watch your site around the clock and act fast if it ever goes down, often before you notice.",
    },
    {
      title: "Priority support with 24h replies",
      desc: "One person to email who knows your site, with a real reply within 24 hours, every time.",
    },
  ],
  benefits: [
    {
      title: "Peace of mind",
      desc: "You stop worrying about your website. Updates, backups, and security are simply taken care of.",
    },
    {
      title: "A site that stays fast",
      desc: "Ongoing speed optimization keeps load times low and your Core Web Vitals healthy long term.",
    },
    {
      title: "Protected and recoverable",
      desc: "Regular backups and hardened security mean a bad update or attack never becomes a disaster.",
    },
    {
      title: "Someone to call",
      desc: "When something breaks, you have a trusted developer on hand with 24h replies, not a ticket queue.",
    },
  ],
  process: [
    {
      title: "Free site health check",
      desc: "I audit your speed, security, backups, and Core Web Vitals to see exactly where your site stands.",
    },
    {
      title: "Pick your plan",
      desc: "We choose the care plan that matches your site and your budget, with a clear fixed monthly quote.",
    },
    {
      title: "Setup and hardening",
      desc: "I add monitoring, secure the site, set up automated backups, and fix any urgent issues up front.",
    },
    {
      title: "Ongoing care",
      desc: "Every month I handle updates, speed tuning, backups, and any fixes or small changes you need.",
    },
    {
      title: "Report and stay in touch",
      desc: "You get plain updates on what was done, plus priority support with 24h replies whenever you need me.",
    },
  ],
  tech: [
    "WordPress",
    "PHP",
    "MySQL",
    "Next.js",
    "Cloudflare",
    "UptimeRobot",
    "Google PageSpeed",
    "Core Web Vitals",
    "Lighthouse",
    "Wordfence",
    "Git",
    "cPanel",
  ],
  packages: [
    {
      name: "Essential",
      price: "From $99",
      period: "/mo",
      tagline: "Keep the lights on and the basics covered.",
      features: [
        "Monthly plugin and core updates",
        "Weekly backups",
        "Uptime monitoring",
        "Security checks",
        "Email support, 24h replies",
      ],
      featured: false,
      cta: "Get started",
    },
    {
      name: "Growth",
      price: "From $199",
      period: "/mo",
      tagline: "Care plus ongoing speed and content help.",
      features: [
        "Everything in Essential",
        "Daily backups",
        "Speed and Core Web Vitals tuning",
        "Bug fixes and small content changes",
        "Priority support, 24h replies",
        "Monthly health report",
      ],
      featured: true,
      cta: "Talk to me",
    },
    {
      name: "Pro",
      price: "From $399",
      period: "/mo",
      tagline: "Hands-off care for busy, high-traffic sites.",
      features: [
        "Everything in Growth",
        "Real-time uptime monitoring",
        "Advanced security hardening",
        "Ongoing speed optimization",
        "More monthly change hours",
        "Same-day priority replies",
      ],
      featured: false,
      cta: "Talk to me",
    },
  ],
  faqs: [
    {
      q: "What does a website maintenance plan actually cover?",
      a: "It covers the ongoing work a live site needs, updates, backups, security, uptime monitoring, and speed optimization, plus bug fixes and small content changes. The exact mix depends on the plan you choose.",
    },
    {
      q: "Do you work on WordPress and custom sites?",
      a: "Yes. I maintain WordPress sites and custom-built sites alike. During the free health check I confirm your setup and tailor the website support plan to fit it.",
    },
    {
      q: "How fast will you reply if something breaks?",
      a: "You get priority support with replies within 24 hours, and same-day on the Pro plan. With uptime monitoring in place, I often catch problems before you even notice them.",
    },
    {
      q: "Can maintenance really improve my site speed?",
      a: "Yes. Sites slow down over time as content, plugins, and images pile up. My plans include ongoing speed optimization and Core Web Vitals tuning to keep load times fast and search rankings healthy.",
    },
    {
      q: "What happens to my backups if my site gets hacked?",
      a: "I keep regular off-site backups, so if security is ever breached or an update goes wrong, I can restore a clean version quickly instead of rebuilding from scratch.",
    },
    {
      q: "Is there a long contract?",
      a: "No lock-in. Care plans are month to month with a fixed quote, so you can adjust or pause as your needs change.",
    },
  ],
  cta: {
    heading: "Stop worrying about your website",
    body: "Let me handle the updates, backups, security, and speed so you can focus on the business. Start with a free site health check and a fixed monthly quote, with a reply within 24 hours.",
  },
};

export const metadata: Metadata = {
  title: DATA.meta.title,
  description: DATA.meta.description,
  alternates: { canonical: "/services/support-maintenance" },
  openGraph: { title: DATA.meta.title, description: DATA.meta.description, images: ["/og.jpg"] },
};

export default function Page() {
  return <ServiceDetailPage data={DATA} />;
}
