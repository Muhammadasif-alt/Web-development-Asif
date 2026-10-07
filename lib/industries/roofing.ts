import type { Industry } from "../industries-data";

const P = "/Roofing";

/** Content for the roofing demo page (components/portfolio/roofing-page.tsx). */
export const ROOFING = {
  brand: "Pro Roofing",
  phone: "(602) 555-0142",
  address: "Phoenix, AZ",
  /* The forms on these demo pages enquire about the portfolio's own services. */
  formServices: ["Web Development", "Web App Development", "Mobile App Development", "E-commerce & Automation", "Marketing & SEO", "Support & Maintenance"],
  hero: {
    script: "Pro Roofing",
    title: "Reliable Roofing & Repairs Across Arizona",
    text: "Pro Roofing brings proven craftsmanship to homes and businesses across the Valley. We handle tile, shingle, flat roof, repairs, and monsoon storm damage, with honest advice, no pressure, and a free inspection on every job.",
    cta: "Get a Free Quote",
    image: `${P}/014b6b37-23db-42e3-a27d-ee8ed33e82e6.png`,
    formHeading: "Get a Free Quote",
    formButton: "Get a Free Quote",
  },
  story: {
    eyebrow: "Our Story",
    heading: "Where Quality Meets",
    accent: "Protection",
    paras: [
      "Our story did not begin with roofing. It began with a passion for improving homes and businesses and delivering an exceptional customer experience.",
      "Long before roofing, our team built successful companies focused on outdoor living, indoor remodeling, and commercial construction. Through that work we earned the trust of homeowners and business owners by delivering quality craftsmanship, transparent communication, and outstanding results.",
      "That history is what makes us different. We did not enter the roofing industry looking for another service to offer. We entered it because we saw a chance to bring a higher standard of professionalism, accountability, and craftsmanship to one of the most important investments a property owner will ever make.",
    ],
    cta: "Learn Our Story",
    image: `${P}/28095212-96ec-4777-a8c7-f021fd306675.png`,
  },
  ticker: ["Licensed, Bonded & Insured", "Guaranteed Results", "Quality Work", "Best Material", "Free Inspections"],
  services: {
    eyebrow: "From Vision to Reality",
    heading: "Roofing Services",
    accent: "Built for Arizona",
    items: [
      { title: "Tile Roofing", img: `${P}/99d64f82-f568-4515-ac54-0fd0a5b202bf.png`, desc: "Tile replacement in clay and concrete, with premium underlayment systems built to handle Arizona heat and UV." },
      { title: "Shingle Roofing", img: `${P}/a4a3a373-4083-4db3-9dc0-bf26b34c4976.png`, desc: "Architectural and luxury shingle replacement and repair, installed to last through monsoon season and beyond." },
      { title: "Metal & Commercial Roofing", img: `${P}/cb1cd367-3d7b-4ad8-9ecb-66af0ea0ceb2.png`, desc: "Standing-seam metal, coatings, and restoration for flat roofs, plus multi-family, HOA, and commercial properties." },
    ],
  },
  why: {
    eyebrow: "From Vision to Reality",
    heading: "The Pro",
    accent: "Difference",
    text: "Not just a roofing company. A team built on years of earned trust, premium craftsmanship, and whole-property thinking.",
    image: `${P}/85f7fce1-6da5-46ce-a304-a2367c3289f2.png`,
    items: [
      { title: "Proven Track Record", desc: "Built on the success of established outdoor living, indoor remodeling, and commercial construction companies. Not a new company trying to prove itself." },
      { title: "Customer-First Approach", desc: "Clear communication, honest recommendations, and zero high-pressure sales tactics from first call to final walkthrough." },
      { title: "Arizona Roofing Expertise", desc: "We understand Arizona's unique challenges: intense UV, monsoon storms, extreme heat, and aging roofing materials." },
      { title: "Premium Materials", desc: "Industry-leading roofing systems built for durability, performance, and long-term protection in the Arizona climate." },
    ],
  },
  process: {
    eyebrow: "Plan. Build. Enjoy",
    heading: "Our Proven",
    accent: "Process",
    text: "A proven 5-step journey from first inspection to lasting protection.",
    steps: [
      { title: "Comprehensive Inspection", desc: "We start with a free, thorough roof evaluation to understand the true condition of your roof before anything else." },
      { title: "Honest Recommendations", desc: "We give you a clear, honest recommendation based on what your roof actually needs, with no high-pressure sales tactics." },
      { title: "Detailed Proposal", desc: "You receive a detailed proposal that lays out the scope, materials, and pricing so you know exactly what to expect." },
      { title: "Professional Installation", desc: "Our crew completes the work with premium materials and professional project management from start to finish." },
      { title: "Final Quality Review", desc: "We walk the finished project with you and complete a final quality review to make sure everything meets our standard." },
    ],
  },
  faq: {
    eyebrow: "Common Questions",
    heading: "Frequently Asked",
    accent: "Questions",
    card: { title: "Have More Questions? Let's Talk.", text: "Our team responds quickly. Reach out and we will give you straight answers, no pressure, no runaround.", button: "Contact Us" },
  },
  areas: {
    eyebrow: "Territories Covered",
    heading: "Serving the Phoenix Metro and",
    accent: "East Valley",
    cities: ["Scottsdale", "Phoenix", "Gilbert", "Chandler", "Fountain Hills", "Queen Creek", "Tempe", "Maricopa", "Tucson", "Oro Valley", "Mesa", "Marana"],
    text: "If you do not see your community listed, reach out. We proudly serve the greater Phoenix metro area and surrounding communities throughout Maricopa County.",
    button: "Contact Us",
  },
};

export const roofing: Industry = {
  slug: "roofing",
  name: "Roofing",
  buyer: "roofer",
  meta: {
    title: "Roofing Contractor Website Design | Sites That Book Inspections",
    description:
      "Websites and SEO for roofing contractors. Service pages, storm-damage landing pages and quote forms that turn searches into free-inspection bookings.",
  },
  faqs: [
    { q: "Do I need to arrange anything before my roof inspection?", a: "No. We handle everything from the initial complimentary evaluation through permitting, installation, and final quality review. Your only job is to call us." },
    { q: "Do you work with insurance for storm damage?", a: "Yes. We document the damage, explain what your policy is likely to cover, and work with your adjuster so the claim reflects the real scope of the repair." },
    { q: "Do you offer financing options?", a: "We can walk you through financing options during your free estimate so a full replacement does not have to be paid for all at once." },
    { q: "What areas do you serve?", a: "We serve the greater Phoenix metro area, the East Valley, and surrounding communities throughout Maricopa County. If you do not see your community listed, reach out." },
    { q: "Do you handle both residential and commercial roofing?", a: "Yes. Our crews work on single-family homes, multi-family and HOA properties, and commercial flat roofs, using the right system for each building." },
  ],
  hero: {
    small: "For roofing contractors",
    title: "Roofing Websites That Book Inspections",
    taglineTitle: "The roofer who looks most trustworthy gets the call.",
    taglineText:
      "After a storm, your prospect is comparing roofers on their phone. The site that shows real jobs, clear services and an easy quote form wins the inspection.",
    bullets: ["Service pages for every roof type", "Storm-damage landing pages", "Quote forms built for inspections"],
  },
  intro: {
    heading: "Trust is the whole sale",
    body: "A roof is one of the biggest repairs a homeowner pays for. Your website has to answer who you are, what you do and how to book, in seconds.",
  },
  pains: [],
  included: [
    { title: "Tile roofing", desc: "" },
    { title: "Shingle roofing", desc: "" },
    { title: "Metal roofing", desc: "" },
    { title: "Flat & commercial roofing", desc: "" },
    { title: "Storm damage repair", desc: "" },
    { title: "Roof inspections", desc: "" },
  ],
  projectTags: [],
  proofHeading: "",
  cta: {
    heading: "Ready to get more roofing enquiries?",
    body: "Send me your current site and the areas you cover. I will come back with a plan and a fixed price within 24 hours.",
  },
};
