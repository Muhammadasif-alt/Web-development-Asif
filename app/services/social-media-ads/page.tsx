import type { Metadata } from "next";
import { ServiceDetailPage, type ServiceDetail } from "@/components/portfolio/service-detail";

const DATA: ServiceDetail = {
  slug: "social-media-ads",
  name: "Social Media and Ads",
  meta: {
    title: "Social Media Marketing & Meta Ads",
    description:
      "Facebook and Instagram ads and social media built around a real offer — creative, targeting, landing pages and honest tracking from the first spend, focused on leads and sales.",
  },
  hero: {
    small: "Service",
    title: "Social Media & Ads",
    taglineTitle: "Paid and social that bring in leads, not just likes",
    taglineText:
      "Meta ads on Facebook and Instagram, social content, and the landing pages behind them — set up to track what every dirham, dollar or rupee actually brings back.",
  },
  intro: {
    heading: "Ads work when the offer, the audience and the page line up",
    body: "Most ad spend is wasted for one of three reasons: the offer is unclear, the audience is wrong, or the click lands on a page that does not convert. I work on all three together — a clear offer, targeting built around who actually buys, creative that stops the scroll, and a landing page made for that one campaign — with tracking in place from the first spend so you can see cost per lead, not just reach.\n\nAlongside paid campaigns I can plan and manage your social content, so your profiles look active and trustworthy when people check you out after seeing an ad.",
  },
  included: [
    { title: "Campaign strategy and offer", desc: "Who to reach, what to offer them, and what a good cost per lead looks like for you." },
    { title: "Meta ads setup", desc: "Facebook and Instagram campaigns, audiences and budgets set up properly in Ads Manager." },
    { title: "Ad creative and copy", desc: "Image and short video ad concepts and copy written to stop the scroll and get the click." },
    { title: "Landing pages that convert", desc: "A focused page for each campaign, built to turn ad clicks into enquiries or sales." },
    { title: "Pixel and conversion tracking", desc: "Meta pixel, conversions and events set up so results are measured, not guessed." },
    { title: "Retargeting", desc: "Bring back visitors who looked but did not enquire, with ads matched to what they saw." },
    { title: "Social content management", desc: "Planned posts for your profiles so they look active when new customers check you out." },
    { title: "Honest monthly reporting", desc: "Spend, leads, cost per lead and what we are changing next — in plain language." },
  ],
  benefits: [
    { title: "Tracked from the first spend", desc: "" },
    { title: "Ads and landing page together", desc: "" },
    { title: "Focused on leads and sales", desc: "" },
    { title: "Plain-language reporting", desc: "" },
  ],
  process: [
    { title: "Audit and offer", desc: "We look at your current ads, audience and offer, and agree what success looks like." },
    { title: "Tracking and pages", desc: "Pixel, conversions and a landing page set up before any budget is spent." },
    { title: "Creative and launch", desc: "Ad concepts and copy approved, then campaigns launched with sensible test budgets." },
    { title: "Optimise", desc: "Weekly adjustments to audiences, creative and budgets based on real results." },
    { title: "Report and scale", desc: "Monthly reporting, and more budget behind what is clearly working." },
  ],
  tech: ["Meta Ads Manager", "Meta Pixel", "Conversions API", "Google Analytics", "Canva", "Landing pages"],
  packages: [
    {
      name: "Ads Setup",
      price: "Fixed quote",
      period: "",
      tagline: "Campaigns and tracking set up the right way.",
      features: ["Account and pixel setup", "Audience and campaign structure", "Ad copy and creative concepts", "Conversion tracking", "Launch and first-week review"],
      featured: false,
      cta: "Get a quote",
    },
    {
      name: "Ads Management",
      price: "Fixed quote",
      period: "/mo",
      tagline: "Ongoing campaigns optimised every week.",
      features: ["Everything in Ads Setup", "Weekly optimisation", "New creative each month", "Retargeting campaigns", "Monthly report and call"],
      featured: true,
      cta: "Talk to me",
    },
    {
      name: "Ads + Social",
      price: "Custom",
      period: "quote",
      tagline: "Paid campaigns plus managed social content.",
      features: ["Everything in Ads Management", "Planned social posts", "Landing page for each campaign", "Fixed quote after audit"],
      featured: false,
      cta: "Get a quote",
    },
  ],
  faqs: [
    { q: "Which platforms do you run ads on?", a: "Mainly Meta — Facebook and Instagram — which suit most service businesses and stores. If another platform fits your audience better, I will tell you." },
    { q: "Is the ad budget included in your fee?", a: "No. Your ad spend is paid directly to Meta from your own account, so you always see exactly what was spent. My fee covers setup, creative, management and reporting." },
    { q: "How quickly will I see results?", a: "Campaigns usually need a short testing period to find the audiences and creative that work. You will see early data within the first weeks and clearer results after that." },
    { q: "Do you make the ad creative?", a: "Yes — ad concepts, copy and simple image and video creative. If you have product photos or videos, even better; real content usually outperforms stock." },
  ],
  cta: {
    heading: "Want ads that bring in real leads?",
    body: "Tell me what you sell and who you want to reach. I will reply within 24 hours with how I would set up your campaigns and a fixed quote.",
  },
};

export const metadata: Metadata = {
  title: DATA.meta.title,
  description: DATA.meta.description,
  alternates: { canonical: "/services/social-media-ads" },
  openGraph: { title: DATA.meta.title, description: DATA.meta.description, images: ["/og.jpg"] },
};

export default function Page() {
  return <ServiceDetailPage data={DATA} />;
}
