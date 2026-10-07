import type { Metadata } from "next";
import { ServiceDetailPage, type ServiceDetail } from "@/components/portfolio/service-detail";

const DATA: ServiceDetail = {
  slug: "mobile-apps",
  name: "Mobile App Development",
  meta: {
    title: "Mobile App Development | React Native Developer | Asif.dev",
    description:
      "Cross-platform mobile app development with React Native. One codebase for iOS and Android, connected to your existing web app or store. Fixed quote in 24 hours.",
  },
  hero: {
    small: "Service",
    title: "Mobile App Development",
    taglineTitle: "One codebase, iOS and Android",
    taglineText:
      "Cross-platform apps built with React Native — native feel, half the build cost of two separate apps, and one team to talk to.",
  },
  intro: {
    heading: "Your product in your customer's pocket",
    body:
      "Building separately for iOS and Android means paying twice and shipping twice as slowly. React Native lets one codebase serve both stores with a genuinely native feel — the same approach behind apps you already use every day. For most businesses that is the right trade: faster to market, cheaper to maintain, and one developer to call when something needs changing.\n\nBecause I also build the web side, your app can share the same API, database, and admin panel as your web platform instead of duplicating logic in two places. Push notifications, offline support, camera and location access, in-app payments, and store submission are all part of the job, not extras bolted on at the end.",
  },
  included: [
    {
      title: "Cross-platform builds",
      desc: "One React Native codebase that ships to both the App Store and Google Play with a native feel.",
    },
    {
      title: "Shared backend with your web app",
      desc: "The same API, database, and admin panel behind both, so data and logic never drift apart.",
    },
    {
      title: "Push notifications",
      desc: "Targeted and scheduled notifications that bring users back without annoying them into uninstalling.",
    },
    {
      title: "Offline-first support",
      desc: "Local caching and sync so the app keeps working on a bad connection and catches up later.",
    },
    {
      title: "Device features",
      desc: "Camera, location, biometrics, file uploads, and deep links wired up properly.",
    },
    {
      title: "In-app payments",
      desc: "Stripe or native store billing for subscriptions and one-off purchases, set up to pass review.",
    },
    {
      title: "App Store & Play submission",
      desc: "Store listings, screenshots, review guidelines, and the resubmissions when something gets flagged.",
    },
    {
      title: "Progressive Web Apps",
      desc: "When a full store app is overkill, an installable PWA gets you most of the way for a fraction of the cost.",
    },
  ],
  benefits: [
    {
      title: "Half the build, both platforms",
      desc: "One codebase instead of separate Swift and Kotlin teams — a fraction of the cost and the timeline.",
    },
    {
      title: "One developer, web and mobile",
      desc: "Your site, your app, and the API behind them handled by the same person. No integration finger-pointing.",
    },
    {
      title: "Updates without a rewrite",
      desc: "A shared codebase means a fix ships to iOS and Android at once, not twice with a lag between them.",
    },
    {
      title: "Honest advice on scope",
      desc: "If a responsive web app or a PWA would serve you better than a store app, I will say so before you spend.",
    },
  ],
  process: [
    {
      title: "Discovery and scope",
      desc: "We define what users must be able to do on a phone, and what genuinely belongs on the web instead.",
    },
    {
      title: "Flows and API design",
      desc: "I map the screens and the API contract, so the app and any existing web platform stay in sync.",
    },
    {
      title: "Build in phases",
      desc: "Core flows first, shipped to your phone through TestFlight or an internal build so you can use it early.",
    },
    {
      title: "Device testing",
      desc: "Real-device testing across screen sizes and OS versions, plus performance and offline behaviour.",
    },
    {
      title: "Store launch",
      desc: "Listings, assets, submission, and the back-and-forth with review — then handover and monitoring.",
    },
  ],
  tech: [
    "React Native",
    "Expo",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "REST APIs",
    "Firebase",
    "Push Notifications",
    "Stripe",
    "App Store Connect",
    "Google Play Console",
    "PWA",
  ],
  packages: [
    {
      name: "MVP App",
      price: "From $1,999",
      period: "one-time",
      tagline: "Get your core idea onto real phones.",
      features: [
        "Up to 6 screens",
        "Login and user accounts",
        "Connected to one API or backend",
        "iOS and Android from one codebase",
        "Store submission included",
      ],
      featured: false,
      cta: "Get started",
    },
    {
      name: "Full App",
      price: "From $4,499",
      period: "one-time",
      tagline: "A complete product with payments and notifications.",
      features: [
        "Unlimited screens and user roles",
        "Push notifications",
        "In-app payments or subscriptions",
        "Offline support and sync",
        "Admin panel to manage it all",
        "Both stores, listings included",
      ],
      featured: true,
      cta: "Talk to me",
    },
    {
      name: "Web + Mobile",
      price: "Custom",
      period: "quote",
      tagline: "One platform, one backend, web and app together.",
      features: [
        "Shared API and database",
        "Web dashboard plus mobile app",
        "Single admin for both",
        "Analytics and reporting",
        "Ongoing retainer available",
        "Fixed quote after discovery",
      ],
      featured: false,
      cta: "Get a quote",
    },
  ],
  faqs: [
    {
      q: "Do I need two apps for iOS and Android?",
      a: "No. I build with React Native, which produces genuinely native apps for both platforms from a single codebase. You pay for one build instead of two, and a fix ships to both stores at the same time.",
    },
    {
      q: "Will a React Native app feel as good as a native one?",
      a: "For the vast majority of business apps, yes — the UI uses real native components, not a webview. The exception is heavy 3D, complex video processing, or hardware-intensive work. If your idea falls in that bucket I will tell you up front rather than take the job.",
    },
    {
      q: "Do I actually need a mobile app, or would a website do?",
      a: "Honest answer: many businesses do not need a store app. If your users visit occasionally, a fast responsive site or an installable PWA does the job for far less. An app earns its keep when you need push notifications, offline use, device hardware, or genuinely repeat daily use.",
    },
    {
      q: "Can the app connect to my existing website or store?",
      a: "Yes. Because I build the web side too, the app can share the same API, database, and admin panel as your existing platform — including WordPress, WooCommerce, or Shopify data through their APIs.",
    },
    {
      q: "How long does a mobile app take?",
      a: "An MVP is usually 5–8 weeks, a full app with payments and notifications 10–14 weeks. Store review adds a few days to a week on top. You get a phased timeline before we start.",
    },
    {
      q: "Do you handle App Store and Play Store submission?",
      a: "Yes, including listings, screenshots, privacy declarations, and the resubmissions when a reviewer flags something. You keep ownership of both developer accounts.",
    },
  ],
  cta: {
    heading: "Got an app idea? Let's check it's worth building first",
    body: "Tell me what your users need to do on their phone. I will tell you honestly whether it needs an app, a PWA, or just a better mobile site — then quote the fastest route.",
  },
};

export const metadata: Metadata = {
  title: DATA.meta.title,
  description: DATA.meta.description,
  alternates: { canonical: "/services/mobile-apps" },
  openGraph: { title: DATA.meta.title, description: DATA.meta.description, images: ["/og.jpg"] },
};

export default function MobileAppsPage() {
  return <ServiceDetailPage data={DATA} />;
}
