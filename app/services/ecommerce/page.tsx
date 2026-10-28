import type { Metadata } from "next";
import { ServiceDetailPage, type ServiceDetail } from "@/components/portfolio/service-detail";

const DATA: ServiceDetail = {
  slug: "ecommerce",
  name: "E-commerce and Automation",
  meta: {
    title: "E-commerce and Automation",
    description:
      "Shopify development and WooCommerce stores that convert, plus CRM automation and Zapier workflows that follow up with leads while you sleep. Sell more, do less.",
  },
  hero: {
    small: "Service",
    title: "E-commerce and Automation",
    taglineTitle: "Sell more and let the busywork run itself.",
    taglineText:
      "I build fast Shopify and WooCommerce stores that are easy to manage and built to convert. Then I wire up the CRM automation and Zapier workflows that follow up with every lead and customer for you.",
  },
  intro: {
    heading: "Stores that convert, systems that run themselves",
    body:
      "Whether you are launching a new store or fixing one that does not convert, I do e-commerce development that is fast, easy to manage, and built to sell. I work in both Shopify development and WooCommerce, so you get the right platform for your business instead of a one-size-fits-all template.\n\nA store is only half the job. I connect the tools that follow up with leads and customers automatically, from CRM automation to sales funnels to Zapier and Make workflows. That means abandoned carts get recovered, new leads get nurtured, and you spend less time on manual work.",
  },
  included: [
    {
      title: "Shopify and WooCommerce store builds",
      desc: "A clean, fast store on the platform that fits how you actually run your business.",
    },
    {
      title: "Product, checkout, and payment setup",
      desc: "Products, variants, taxes, shipping, and secure payments configured and tested end to end.",
    },
    {
      title: "Landing pages and sales funnels",
      desc: "Focused pages that guide visitors from click to purchase with fewer drop-offs.",
    },
    {
      title: "CRM and GHL automation",
      desc: "Your leads and customers organized, tagged, and worked automatically inside your CRM.",
    },
    {
      title: "Zapier and Make workflows",
      desc: "Your apps talk to each other so data flows without you copying and pasting.",
    },
    {
      title: "Lead capture and follow-up automation",
      desc: "Every enquiry gets captured and followed up, so no warm lead goes cold.",
    },
    {
      title: "Abandoned cart and email flows",
      desc: "Automated emails that win back shoppers who left and keep buyers coming back.",
    },
  ],
  benefits: [
    {
      title: "More sales, less manual work",
      desc: "A store built to convert and automation that handles the follow-up you used to do by hand.",
    },
    {
      title: "A follow-up system that never sleeps",
      desc: "Leads get nurtured and carts get recovered around the clock, even when you are offline.",
    },
    {
      title: "A store you can actually manage",
      desc: "Clear admin, simple product updates, and no need to call a developer for small changes.",
    },
    {
      title: "Fast, reliable, and built to scale",
      desc: "Quick load times and solid Core Web Vitals so speed never costs you a sale.",
    },
  ],
  process: [
    {
      title: "Discovery and platform pick",
      desc: "We talk through your products, goals, and tools, then choose Shopify or WooCommerce accordingly.",
    },
    {
      title: "Store build and design",
      desc: "I build a fast, on-brand store with products, checkout, payments, and mobile all dialed in.",
    },
    {
      title: "Funnels and landing pages",
      desc: "I add the sales funnels and landing pages that turn traffic into orders.",
    },
    {
      title: "Automation setup",
      desc: "I wire up CRM automation, Zapier or Make workflows, and abandoned cart and email flows.",
    },
    {
      title: "Test and launch",
      desc: "We test every path from click to purchase to follow-up, then go live with confidence.",
    },
    {
      title: "Handover and support",
      desc: "You get a walkthrough, docs, and me on call for questions after launch.",
    },
  ],
  tech: [
    "Shopify",
    "WooCommerce",
    "WordPress",
    "Liquid",
    "Stripe",
    "PayPal",
    "Zapier",
    "Make",
    "GoHighLevel",
    "Klaviyo",
    "Mailchimp",
    "Google Analytics",
  ],
  packages: [
    {
      name: "Starter Store",
      price: "From $799",
      period: "one-time",
      tagline: "Get selling fast with a clean, solid store.",
      features: [
        "Shopify or WooCommerce store build",
        "Up to 20 products set up",
        "Checkout and payment configuration",
        "Mobile-responsive design",
        "Basic lead capture form",
      ],
      featured: false,
      cta: "Get started",
    },
    {
      name: "Growth Store",
      price: "From $1,499",
      period: "one-time",
      tagline: "A store that converts plus automation that follows up.",
      features: [
        "Everything in Starter",
        "Landing page and sales funnel",
        "CRM and GHL automation setup",
        "Abandoned cart and email flows",
        "Zapier or Make workflow integration",
        "Speed and Core Web Vitals tuning",
      ],
      featured: true,
      cta: "Talk to me",
    },
    {
      name: "Custom",
      price: "Custom",
      period: "quote",
      tagline: "For bigger stores and deeper automation.",
      features: [
        "Custom store or migration",
        "Advanced multi-step sales funnels",
        "Full CRM automation build-out",
        "Multiple app integrations",
        "Custom email and SMS flows",
        "Fixed quote, no surprises",
      ],
      featured: false,
      cta: "Get a quote",
    },
  ],
  faqs: [
    {
      q: "Should I use Shopify or WooCommerce?",
      a: "It depends on your business. Shopify development is great for a fast, hosted store with less upkeep, while WooCommerce gives you more control and fits well if you already run WordPress. I will recommend the right one after we talk through your products and goals.",
    },
    {
      q: "Can you fix a store that is not converting?",
      a: "Yes. A lot of my e-commerce development work is fixing stores that get traffic but not sales. I audit speed, checkout, product pages, and funnels, then fix the leaks that cost you orders.",
    },
    {
      q: "What exactly can you automate?",
      a: "Lead capture, follow-up sequences, CRM automation, abandoned cart recovery, and email flows. Using Zapier and Make I can connect your store, CRM, email tool, and other apps so the busywork runs without you.",
    },
    {
      q: "How long does a build take?",
      a: "A Starter store is usually about one to two weeks, and a Growth store with sales funnels and automation is typically two to four weeks. I give you a clear timeline with your fixed quote before we start.",
    },
    {
      q: "Do you work with clients outside your timezone?",
      a: "Yes. I work with store owners across the US, UK, UAE, and Pakistan, reply within 24 hours, and quote everything up front so there are no surprises.",
    },
    {
      q: "What happens after launch?",
      a: "You get a walkthrough and docs so you can manage the store yourself, plus me on call for questions. If you want ongoing changes or new automations, we can set up a support arrangement.",
    },
  ],
  cta: {
    heading: "Ready to sell more with less busywork?",
    body:
      "Tell me about your store and what you want to automate. I will reply within 24 hours with a fixed quote and a clear plan to get you a store that converts and follow-up that runs while you sleep.",
  },
};

export const metadata: Metadata = {
  title: DATA.meta.title,
  description: DATA.meta.description,
  alternates: { canonical: "/services/ecommerce" },
  openGraph: { title: DATA.meta.title, description: DATA.meta.description, images: ["/og.jpg"] },
};

export default function Page() {
  return <ServiceDetailPage data={DATA} />;
}
