import type { Metadata } from "next";
import { ServiceDetailPage, type ServiceDetail } from "@/components/portfolio/service-detail";

const DATA: ServiceDetail = {
  slug: "marketing",
  name: "Marketing and SEO",
  meta: {
    title: "SEO Services and Marketing",
    description:
      "Technical SEO, on-page SEO, local SEO, Meta ads, and social media management that get you found on Google and turn clicks into real leads.",
  },
  hero: {
    small: "Service",
    title: "SEO & Marketing",
    taglineTitle: "Get found on Google, get real leads",
    taglineText:
      "A beautiful site is useless if no one finds it. I make sure yours shows up when your customers search, then keeps pulling in organic traffic without paying for every click.",
  },
  intro: {
    heading: "SEO services that bring leads, not just rankings",
    body: "Most sites lose out on Google for reasons you can actually fix. I run technical SEO audits, do the on-page SEO work, and build content that all points at one goal: rankings that bring you leads. No jargon, no vanity numbers, just a site that shows up when it matters.\n\nWhen you want faster results, I pair organic work with Meta ads and social media management so you are reaching customers on Google, Facebook, and Instagram at the same time. I work with clients across the US, UK, UAE, and Pakistan, reply within 24 hours, and quote a fixed price up front.",
  },
  included: [
    {
      title: "Technical SEO audits and fixes",
      desc: "I find and fix the crawl, index, and structure issues holding your rankings back.",
    },
    {
      title: "On-page SEO and content",
      desc: "Titles, headings, and copy optimised around the terms your customers actually search.",
    },
    {
      title: "Local SEO and Google Business Profile",
      desc: "Show up in map results and local searches so nearby customers find you first.",
    },
    {
      title: "Schema and structured data",
      desc: "Rich results markup that helps Google understand your pages and show more in search.",
    },
    {
      title: "Core Web Vitals and speed",
      desc: "Sub-second load times and clean vitals that both users and Google reward.",
    },
    {
      title: "Meta ads for lead gen",
      desc: "Facebook and Instagram campaigns built to bring in leads, not just clicks.",
    },
    {
      title: "Social media management",
      desc: "Consistent content and posting that keeps your brand active and visible.",
    },
    {
      title: "Monthly reporting in plain English",
      desc: "Clear reports you can actually read, showing what changed and what it means.",
    },
  ],
  benefits: [
    {
      title: "Higher rankings",
      desc: "Your pages climb for the terms that bring buyers, not just curious browsers.",
    },
    {
      title: "More organic traffic",
      desc: "Steady visitors from Google without paying for every single click.",
    },
    {
      title: "More leads",
      desc: "Traffic that turns into calls, forms, and enquiries you can grow on.",
    },
    {
      title: "Reports you understand",
      desc: "Plain-English updates so you always know what you are paying for.",
    },
  ],
  process: [
    {
      title: "Audit and research",
      desc: "I audit your site and research the keywords and competitors that matter in your market.",
    },
    {
      title: "Technical fixes",
      desc: "I clear crawl, speed, and structure issues so Google can properly read your site.",
    },
    {
      title: "On-page and content",
      desc: "I optimise your key pages and content around the terms your customers search.",
    },
    {
      title: "Local and off-page",
      desc: "I set up local SEO, Google Business Profile, and the signals that build authority.",
    },
    {
      title: "Paid and social boost",
      desc: "Where it helps, I add Meta ads and social content to speed up results.",
    },
    {
      title: "Report and refine",
      desc: "Every month I report progress in plain English and adjust the plan for next month.",
    },
  ],
  tech: [
    "Google Search Console",
    "Google Analytics 4",
    "Google Business Profile",
    "Ahrefs",
    "Semrush",
    "Screaming Frog",
    "Schema.org",
    "PageSpeed Insights",
    "Core Web Vitals",
    "Meta Ads Manager",
    "Meta Business Suite",
    "Looker Studio",
  ],
  packages: [
    {
      name: "Starter SEO",
      price: "From $299",
      period: "/mo",
      tagline: "Get the foundations right and start climbing.",
      features: [
        "Technical SEO audit and fixes",
        "On-page SEO for key pages",
        "Local SEO and Google Business Profile",
        "Core Web Vitals improvements",
        "Monthly plain-English report",
      ],
      featured: false,
      cta: "Get started",
    },
    {
      name: "Growth",
      price: "From $599",
      period: "/mo",
      tagline: "Organic plus paid to grow leads faster.",
      features: [
        "Everything in Starter SEO",
        "Ongoing on-page and content work",
        "Schema and structured data",
        "Meta ads for lead generation",
        "Social media management",
        "Monthly strategy call",
      ],
      featured: true,
      cta: "Get started",
    },
    {
      name: "Custom",
      price: "Custom",
      period: "quote",
      tagline: "A tailored plan for bigger goals and markets.",
      features: [
        "Full custom SEO strategy",
        "Multi-location or multi-market local SEO",
        "Advanced content and link building",
        "Scaled Meta ads and social campaigns",
        "Dedicated reporting dashboard",
        "Priority support",
      ],
      featured: false,
      cta: "Talk to me",
    },
  ],
  faqs: [
    {
      q: "How long until I see SEO results?",
      a: "Technical SEO and speed fixes can show gains in weeks, but real ranking and traffic growth usually takes three to six months. SEO is a compounding game, and I keep you updated every month so you can see it building.",
    },
    {
      q: "What is the difference between technical, on-page, and local SEO?",
      a: "Technical SEO fixes how Google crawls and reads your site. On-page SEO optimises your content and pages for the right terms. Local SEO helps you show up in map and nearby searches. Most of my plans use all three together.",
    },
    {
      q: "Do you do Meta ads and social media too?",
      a: "Yes. Alongside SEO services I run Meta ads on Facebook and Instagram for lead generation and handle social media management, so you can grow through both organic and paid channels.",
    },
    {
      q: "Will I be able to understand the reports?",
      a: "That is the whole point. Every month you get a plain-English report showing rankings, traffic, and leads, with no jargon and a clear note on what I changed and why.",
    },
    {
      q: "Do I need a new website first?",
      a: "Not always. I can improve the SEO of your current site. If the site has serious speed or structure problems, I will tell you honestly and quote the fix up front, no surprises.",
    },
    {
      q: "Do you work with clients outside your area?",
      a: "Yes. I work remotely with clients across the US, UK, UAE, and Pakistan, reply within 24 hours, and give a fixed quote before any work starts.",
    },
  ],
  cta: {
    heading: "Ready to get found on Google?",
    body: "If you have a site but it is not showing up or not bringing in leads, let's fix that. Tell me about your business and I will reply within 24 hours with a clear plan and a fixed quote.",
  },
};

export const metadata: Metadata = {
  title: DATA.meta.title,
  description: DATA.meta.description,
  alternates: { canonical: "/services/marketing" },
  openGraph: { title: DATA.meta.title, description: DATA.meta.description, images: ["/og.jpg"] },
};

export default function Page() {
  return <ServiceDetailPage data={DATA} />;
}
