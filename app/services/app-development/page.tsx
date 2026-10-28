import type { Metadata } from "next";
import { ServiceDetailPage, type ServiceDetail } from "@/components/portfolio/service-detail";

const DATA: ServiceDetail = {
  slug: "app-development",
  name: "App Development",
  meta: {
    title: "App Development | Web & Mobile Apps",
    description:
      "Web and mobile app development from scope to release — dashboards, SaaS platforms, client portals, and iOS and Android apps built with MERN, Next.js, Laravel, and React Native.",
  },
  hero: {
    small: "Service",
    title: "App Development",
    taglineTitle: "Web and mobile apps, planned before a line of code",
    taglineText:
      "From a customer portal to a full SaaS platform or a mobile app in the stores — I map the user journeys, design the screens, build it, and release it.",
  },
  intro: {
    heading: "Apps that fit how your business actually works",
    body: "Off-the-shelf tools get you most of the way, then stop at the part that makes your business different. That is where a custom app pays for itself. I build web apps — dashboards, portals, booking and inventory systems, SaaS products — and mobile apps for iOS and Android, with the scope, user journeys and data model written down before development starts, so you know exactly what you are getting.\n\nFor web apps I work with MERN, Next.js and Laravel; for mobile, React Native, so one codebase serves both stores. Everything is delivered in phases you can see and test, with a clear handover at the end.",
  },
  included: [
    { title: "Scope and user journeys", desc: "Who uses the app, what they need to do, and the screens that get them there — agreed before code." },
    { title: "Custom web applications", desc: "Dashboards, client portals, booking and inventory systems built on MERN, Next.js or Laravel." },
    { title: "Mobile apps for iOS and Android", desc: "React Native apps from one codebase, with push notifications and offline-friendly screens." },
    { title: "SaaS platforms", desc: "Multi-user products with roles, subscriptions and billing, ready to grow with your customers." },
    { title: "APIs and integrations", desc: "Connect payments, CRMs, accounting and third-party services so data flows without manual work." },
    { title: "Admin panels and reporting", desc: "Manage users, content and orders, and see the numbers that matter in one place." },
    { title: "App store release", desc: "Store listings, screenshots, review guidelines and the resubmissions when something gets flagged." },
    { title: "Phased delivery and handover", desc: "Working builds you can test along the way, then documentation so your team can keep going." },
  ],
  benefits: [
    { title: "Built around your workflow", desc: "" },
    { title: "Web and mobile from one developer", desc: "" },
    { title: "You own the code", desc: "" },
    { title: "Shipped in visible phases", desc: "" },
  ],
  process: [
    { title: "Discovery and scope", desc: "We map users, features and data, and you get a written scope with a fixed quote." },
    { title: "Flows and screens", desc: "User journeys and key screens designed and agreed before development starts." },
    { title: "Build in phases", desc: "Core features first, delivered to a test link or test build you can try as we go." },
    { title: "Test and release", desc: "Cross-device testing, security checks, then launch on the web or in the app stores." },
    { title: "Support and growth", desc: "Fixes, improvements and new features as real users start to use the app." },
  ],
  tech: ["React", "Next.js", "Node.js", "Laravel", "React Native", "MongoDB", "PostgreSQL", "Stripe"],
  packages: [
    {
      name: "Web App MVP",
      price: "From $1,499",
      period: "one-time",
      tagline: "The core idea in front of real users.",
      features: ["Single-role app with auth", "Up to 5 core screens", "Database design and setup", "Responsive admin UI", "Deployment and handover"],
      featured: false,
      cta: "Get started",
    },
    {
      name: "Mobile App MVP",
      price: "From $1,999",
      period: "one-time",
      tagline: "An iOS and Android app from one codebase.",
      features: ["React Native app", "Core screens and navigation", "Login and user accounts", "Push notifications", "App store submission"],
      featured: true,
      cta: "Talk to me",
    },
    {
      name: "Custom Platform",
      price: "Custom",
      period: "quote",
      tagline: "Web and mobile together, or a full SaaS product.",
      features: ["Multi-role permissions", "Subscriptions and billing", "Third-party integrations", "Web and mobile apps", "Fixed quote after discovery"],
      featured: false,
      cta: "Get a quote",
    },
  ],
  faqs: [
    { q: "Do you build web apps, mobile apps, or both?", a: "Both. Web apps are built with MERN, Next.js or Laravel, and mobile apps with React Native, so one codebase covers iOS and Android. Many projects use both, sharing the same back end." },
    { q: "How long does an app take?", a: "An MVP is usually 4–8 weeks depending on scope, and a fuller product is delivered in phases over a few months. You get a clear timeline with the quote." },
    { q: "Will I own the code?", a: "Yes. The code, the accounts and the app store listings are yours, and you get documentation at handover." },
    { q: "Can you take over an app someone else started?", a: "Yes. I start with a review of the existing code so you know what is solid, what needs fixing, and what it will cost before anything changes." },
    { q: "Do you help with the app stores?", a: "Yes — listings, screenshots, privacy details and the back-and-forth with Apple and Google review until the app is approved." },
  ],
  cta: {
    heading: "Have an app idea or a process that needs software?",
    body: "Tell me what you want to build and who it is for. I will reply within 24 hours with a plan, a timeline and a fixed quote.",
  },
};

export const metadata: Metadata = {
  title: DATA.meta.title,
  description: DATA.meta.description,
  alternates: { canonical: "/services/app-development" },
  openGraph: { title: DATA.meta.title, description: DATA.meta.description, images: ["/og.jpg"] },
};

export default function Page() {
  return <ServiceDetailPage data={DATA} />;
}
