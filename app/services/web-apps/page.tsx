import type { Metadata } from "next";
import { ServiceDetailPage, type ServiceDetail } from "@/components/portfolio/service-detail";

const DATA: ServiceDetail = {
  slug: "web-apps",
  name: "Web App Development",
  meta: {
    title: "Web App Development | MERN & Next.js Developer",
    description:
      "Custom web app development on the MERN stack and Next.js. Admin dashboards, SaaS platforms, internal tools, and APIs built to scale. Fixed quote in 24 hours.",
  },
  hero: {
    small: "Service",
    title: "Web App Development",
    taglineTitle: "Custom platforms, not brochure pages",
    taglineText:
      "Dashboards, SaaS products, internal tools, and APIs built on the MERN stack and Next.js — with real auth, real data, and real business logic behind them.",
  },
  intro: {
    heading: "Software that runs your business, built to your workflow",
    body:
      "Off-the-shelf tools get you to about eighty percent, then stop. The last twenty percent — the part that matches how your business actually works — is where a custom web app pays for itself. I build that part: role-based admin panels, customer portals, booking and inventory systems, multi-tenant SaaS products with subscriptions and usage limits.\n\nThe stack is MongoDB, Express, React, and Node, with Next.js where server rendering and SEO matter. Everything ships with proper authentication, validated inputs, indexed queries, and a codebase your next developer can read. I scope in phases so you see working software early instead of waiting months for a big reveal.",
  },
  included: [
    {
      title: "Admin dashboards",
      desc: "Role-based panels with charts, filters, exports, and audit logs so your team can see and act on live data.",
    },
    {
      title: "SaaS platforms",
      desc: "Multi-tenant products with signup, subscriptions, team workspaces, and usage limits wired to Stripe.",
    },
    {
      title: "Internal tools & CRMs",
      desc: "The workflow tools that replace a tangle of spreadsheets — built around how your team already works.",
    },
    {
      title: "Booking & scheduling systems",
      desc: "Availability, payments, reminders, and calendar sync for service businesses that live and die by the diary.",
    },
    {
      title: "REST APIs & integrations",
      desc: "Clean, documented APIs plus integrations with the payment, CRM, and messaging tools you already pay for.",
    },
    {
      title: "Authentication & permissions",
      desc: "JWT or session auth with refresh flows, password resets, and granular role-based access control.",
    },
    {
      title: "Customer portals",
      desc: "Self-serve areas where your clients track orders, download invoices, and manage their own accounts.",
    },
    {
      title: "Legacy rescue & takeover",
      desc: "An audit-first handover for half-finished builds and inherited codebases, so you know what you have before spending more.",
    },
  ],
  benefits: [
    {
      title: "Built around your workflow",
      desc: "The app matches how your business runs, instead of forcing your team to work around a generic tool.",
    },
    {
      title: "Scales without a rewrite",
      desc: "Indexed queries, sane architecture, and stateless APIs so growth means adding capacity, not starting over.",
    },
    {
      title: "You own the code",
      desc: "Full repository access and documentation from day one. No lock-in, no hostage situation.",
    },
    {
      title: "Shipped in phases",
      desc: "A working slice early and often, so you can course-correct while changes are still cheap.",
    },
  ],
  process: [
    {
      title: "Discovery and scope",
      desc: "We map users, roles, and the features that actually matter for version one, then agree a fixed quote.",
    },
    {
      title: "Architecture and data model",
      desc: "I design the schema, API surface, and auth model up front so the build does not paint itself into a corner.",
    },
    {
      title: "Build in phases",
      desc: "Core flows first, on a staging URL you can click through. Feedback goes in while it is still cheap to change.",
    },
    {
      title: "Test and harden",
      desc: "Input validation, permission checks, error handling, and load testing before anything touches real users.",
    },
    {
      title: "Launch and handover",
      desc: "Deployment, monitoring, documentation, and a walkthrough so your team can run it confidently.",
    },
  ],
  tech: [
    "MongoDB",
    "Express",
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
    "REST APIs",
    "JWT Auth",
    "Stripe",
    "PostgreSQL",
    "Laravel",
    "Vercel",
  ],
  packages: [
    {
      name: "MVP",
      price: "From $1,499",
      period: "one-time",
      tagline: "Get the core idea in front of real users.",
      features: [
        "Single-role app with auth",
        "Up to 5 core screens",
        "Database design and setup",
        "Responsive admin UI",
        "Deployment and handover",
      ],
      featured: false,
      cta: "Get started",
    },
    {
      name: "Platform",
      price: "From $3,499",
      period: "one-time",
      tagline: "A full product with roles, payments, and reporting.",
      features: [
        "Multi-role permissions",
        "Dashboards, charts, and exports",
        "Stripe subscriptions or payments",
        "Third-party API integrations",
        "Email notifications and logs",
        "Staging environment included",
      ],
      featured: true,
      cta: "Talk to me",
    },
    {
      name: "Custom",
      price: "Custom",
      period: "quote",
      tagline: "Multi-tenant SaaS or a long-running product build.",
      features: [
        "Multi-tenant architecture",
        "Usage limits and billing tiers",
        "Custom API and webhook layer",
        "Performance and load testing",
        "Ongoing retainer available",
        "Fixed quote after discovery",
      ],
      featured: false,
      cta: "Get a quote",
    },
  ],
  faqs: [
    {
      q: "What counts as a web app rather than a website?",
      a: "If users log in, data changes based on what they do, and there is business logic behind the screens, it is a web app. Dashboards, booking systems, CRMs, customer portals, and SaaS products all sit here. A brochure site with a contact form does not — that is website development.",
    },
    {
      q: "Which stack do you build on?",
      a: "The MERN stack — MongoDB, Express, React, and Node — with Next.js and TypeScript where server rendering, SEO, or type safety matter. If your data is strongly relational I will recommend PostgreSQL or Laravel instead. The stack follows the problem, not the other way round.",
    },
    {
      q: "How long does a web app take to build?",
      a: "An MVP is typically 4–6 weeks. A full platform with roles, payments, and reporting usually runs 8–12 weeks. I scope in phases so you get something working and clickable early rather than waiting until the end.",
    },
    {
      q: "Can you take over an app another developer started?",
      a: "Yes, and it is common. I start with a paid audit of the codebase, then give you an honest read on whether it is worth continuing or cheaper to rebuild the weak parts. You get that answer before committing to a full engagement.",
    },
    {
      q: "Do I own the code?",
      a: "Completely. You get the repository, the documentation, and the deployment setup. Nothing is locked to me, and any competent developer can pick it up.",
    },
    {
      q: "Do you handle hosting and maintenance after launch?",
      a: "Yes. I set up hosting, monitoring, and backups at launch, and offer a monthly retainer for updates, fixes, and new features once you are live.",
    },
  ],
  cta: {
    heading: "Have an app idea or a process that needs software?",
    body: "Tell me what your users need to do and I will map the fastest route to a working version — with a fixed quote inside 24 hours. No jargon, no retainer trap.",
  },
};

export const metadata: Metadata = {
  title: DATA.meta.title,
  description: DATA.meta.description,
  alternates: { canonical: "/services/web-apps" },
  openGraph: { title: DATA.meta.title, description: DATA.meta.description, images: ["/og.jpg"] },
};

export default function WebAppsPage() {
  return <ServiceDetailPage data={DATA} />;
}
