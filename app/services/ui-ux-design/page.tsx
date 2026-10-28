import type { Metadata } from "next";
import { ServiceDetailPage, type ServiceDetail } from "@/components/portfolio/service-detail";

const DATA: ServiceDetail = {
  slug: "ui-ux-design",
  name: "UI/UX Design",
  meta: {
    title: "UI/UX Design | Websites & App Interfaces",
    description:
      "UI/UX design for websites and apps — user flows, wireframes, clickable prototypes and design systems that make your product easy to use and ready to build.",
  },
  hero: {
    small: "Service",
    title: "UI/UX Design",
    taglineTitle: "Interfaces that make your product obvious to use",
    taglineText:
      "User flows, wireframes, prototypes and polished screens — designed around what your users need to do, and handed over ready to build.",
  },
  intro: {
    heading: "Good design starts with what people need to do",
    body: "Most confusing websites and apps were designed screen by screen, without anyone mapping what users are actually trying to achieve. I start there: who is using it, what they need to get done, and where they get stuck today. From that come the user flows and wireframes, then clickable prototypes you can test before a line of code is written, and finally polished screens and a small design system that keeps every page consistent.\n\nBecause I also build websites and apps, the designs are made to be built — realistic, responsive, and handed over in a form developers can use without guesswork.",
  },
  included: [
    { title: "User research and goals", desc: "Who your users are, what they need to do, and where the current experience loses them." },
    { title: "User flows", desc: "The paths people take from landing to sign-up, purchase or enquiry, mapped step by step." },
    { title: "Wireframes", desc: "Low-detail layouts that settle structure and content before visual design begins." },
    { title: "Clickable prototypes", desc: "Interactive prototypes in Figma you can click through and test with real users." },
    { title: "Visual UI design", desc: "Polished screens for desktop and mobile in your brand, with clear hierarchy and spacing." },
    { title: "Design systems", desc: "Reusable colours, type, buttons and components so every page stays consistent." },
    { title: "UX review of existing products", desc: "An honest review of your current site or app with prioritised fixes." },
    { title: "Developer-ready handover", desc: "Organised Figma files, specs and assets — or I build it myself." },
  ],
  benefits: [
    { title: "Designed around real user tasks", desc: "" },
    { title: "Tested before it is built", desc: "" },
    { title: "Consistent on every screen", desc: "" },
    { title: "Made to be built", desc: "" },
  ],
  process: [
    { title: "Discover", desc: "We talk through your users, goals and the problems in the current experience." },
    { title: "Map flows", desc: "User journeys and site or app structure agreed before any screens are drawn." },
    { title: "Wireframe and prototype", desc: "Layouts, then a clickable prototype you can test and give feedback on." },
    { title: "Visual design", desc: "Final screens for desktop and mobile, with a small design system to match." },
    { title: "Handover or build", desc: "Developer-ready files — or I take the design straight into development." },
  ],
  tech: ["Figma", "FigJam", "Prototyping", "Design systems", "Responsive design", "Accessibility"],
  packages: [
    {
      name: "UX Review",
      price: "Fixed quote",
      period: "",
      tagline: "Find out what is getting in your users' way.",
      features: ["Review of your current site or app", "Prioritised list of fixes", "Quick wins you can act on", "Walkthrough call"],
      featured: false,
      cta: "Get a quote",
    },
    {
      name: "Website or App Design",
      price: "Fixed quote",
      period: "",
      tagline: "Flows, prototype and polished screens.",
      features: ["User flows and wireframes", "Clickable Figma prototype", "Desktop and mobile screens", "Design system basics", "Developer-ready handover"],
      featured: true,
      cta: "Talk to me",
    },
    {
      name: "Design + Build",
      price: "Custom",
      period: "quote",
      tagline: "Designed and developed by the same person.",
      features: ["Everything in Website or App Design", "Development of the final design", "No handoff gaps between design and code", "Fixed quote after discovery"],
      featured: false,
      cta: "Get a quote",
    },
  ],
  faqs: [
    { q: "What tools do you design in?", a: "Figma, for wireframes, prototypes, final screens and design systems. You get access to the files." },
    { q: "Can you redesign an existing website or app?", a: "Yes. I usually start with a UX review of what you have, then redesign the parts that matter most rather than starting from zero unless that is genuinely better." },
    { q: "Do you also build the design?", a: "Yes. Because I am also a developer, I can take the design straight into development, which avoids the usual gaps between what was designed and what gets built." },
    { q: "How long does a design project take?", a: "A UX review takes a few days. A full website or app design usually takes 2–4 weeks depending on the number of screens. You get a timeline with the quote." },
  ],
  cta: {
    heading: "Want a site or app that is easy to use?",
    body: "Tell me about your product and your users. I will reply within 24 hours with how I would approach the design and a fixed quote.",
  },
};

export const metadata: Metadata = {
  title: DATA.meta.title,
  description: DATA.meta.description,
  alternates: { canonical: "/services/ui-ux-design" },
  openGraph: { title: DATA.meta.title, description: DATA.meta.description, images: ["/og.jpg"] },
};

export default function Page() {
  return <ServiceDetailPage data={DATA} />;
}
