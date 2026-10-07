/**
 * Industry landing pages.
 *
 * The domain stays neutral and these pages carry the niche — each one is
 * written as though that trade is the only thing on offer, so a landscaper
 * never has to read past roofing copy to decide I understand their business.
 *
 * `projectTags` pulls proof straight from PROJECTS, so a new build tagged
 * "Landscaping" shows up here without touching this file.
 */
type Heading = { lead: string; accent: string };
type Item = { title: string; desc: string };

/**
 * Optional self-contained showcase layout (components/portfolio/showcase-page.tsx)
 * with its own copy, images and colours. An industry that defines it gets the full
 * image-led page; one that doesn't keeps the plain IndustryPage.
 */
export type Showcase = {
  /** Business name shown in the page header and footer. */
  brand: string;
  /** Colours for this page only. */
  theme: { accent: string; accentText: string; bg: string; ink: string; dark: string };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    text: string;
    bullets: string[];
    primaryCta: string;
    secondaryCta: string;
    formHeading: string;
  };
  /** Options for the "Select a Service" dropdown. */
  formServices: string[];
  images: {
    hero: string;
    introMain: string;
    introSmall: string;
    whyMain: string;
    whySmall: string;
    faq: string;
    cta: string;
  };
  intro: { eyebrow: string; heading: Heading; body: string[]; checks: string[]; cta: string };
  ticker: string[];
  credentials: { eyebrow: string; heading: Heading; items: Item[] };
  services: {
    eyebrow: string;
    heading: Heading;
    items: { title: string; img: string; desc?: string }[];
    aside: { title: string; body: string };
    /** "cards" renders a few large cards (image, title, text, button) instead of the image tiles. */
    variant?: "cards";
  };
  /** Optional testimonials band. Use real client reviews; the sample flag labels placeholders. */
  reviews?: {
    eyebrow: string;
    heading: Heading;
    sample?: boolean;
    items: { name: string; role: string; text: string }[];
  };
  beforeAfter: {
    heading: Heading;
    body: string;
    before: string;
    after: string;
    beforeLabel: string;
    afterLabel: string;
  };
  why: { eyebrow: string; heading: Heading; items: Item[] };
  steps: { eyebrow: string; heading: Heading; items: Item[] };
  faq: { eyebrow: string; heading: Heading };
  cta: { heading: string; body: string; formHeading: string; button: string };
};

export type Industry = {
  showcase?: Showcase;
  slug: string;
  /** Trade name used in headings and running copy. */
  name: string;
  /** What one of these customers is called, singular. */
  buyer: string;
  meta: { title: string; description: string };
  hero: {
    small: string;
    title: string;
    taglineTitle: string;
    taglineText: string;
    bullets: string[];
  };
  intro: { heading: string; body: string };
  /** What is wrong with the site they have now. */
  pains: { title: string; desc: string }[];
  /** Feeds the "What's included" card grid. */
  included: { title: string; desc: string }[];
  /** Tags in PROJECTS whose entries prove this page. */
  projectTags: string[];
  proofHeading: string;
  faqs: { q: string; a: string }[];
  cta: { heading: string; body: string };
};

import { homeRenovation } from "./industries/home-renovation";
import { roofing } from "./industries/roofing";

export const INDUSTRIES: Industry[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "landscaping",
    name: "Landscaping",
    buyer: "landscaper",
    meta: {
      title: "Landscaping Website Design & SEO | Websites That Book Jobs",
      description:
        "Websites and SEO for landscapers, hardscapers and garden designers. Built around your before-and-after work and the quote form, so visits turn into booked jobs. Fixed quote in 24 hours.",
    },
    hero: {
      small: "For landscapers",
      title: "Landscaping Websites That Book Jobs",
      taglineTitle: "Your work sells itself. The website should let it.",
      taglineText:
        "Most landscaping sites bury the photos and hide the quote form. I build the opposite: your best transformations up front, and one obvious way to ask for a price.",
      bullets: [
        "Built around before-and-after galleries",
        "Ranks for the towns you actually serve",
        "Quote requests, not just phone numbers",
      ],
    },
    intro: {
      heading: "I have built this exact site five times over",
      body:
        "Landscaping is the trade I have built for most: gardening companies, hardscapers, and outdoor-living firms across the US. That matters, because the same problems come up every time. The photos are the product, yet they are compressed into a slideshow nobody scrolls. The service list reads like a spreadsheet. And the phone number sits in the header while the quote form hides on a contact page three clicks away.\n\nA landscaping website has one job: take somebody who just watched a neighbour's yard get transformed, show them you did work like that, and make asking for a price effortless. Everything else on the page is in service of those three steps.",
    },
    pains: [
      {
        title: "The photos are buried",
        desc: "Your best transformation is on page four of a gallery. It should be the first thing on the homepage.",
      },
      {
        title: "You rank for nothing local",
        desc: "Customers search \"landscaping near me\" and \"patio installation <town>\". If you have no page for those towns, you do not appear.",
      },
      {
        title: "The quote is hard to ask for",
        desc: "A phone number is a barrier for anyone browsing at 9pm. A short form with a photo upload is not.",
      },
      {
        title: "It falls apart on a phone",
        desc: "Nearly every one of these searches happens on a phone, standing in the garden being talked about.",
      },
    ],
    included: [
      {
        title: "Before-and-after galleries",
        desc: "The single most persuasive thing you own, presented properly and fast to load on mobile data.",
      },
      {
        title: "Service area pages",
        desc: "A real page for each town you cover, so you show up when somebody searches with their own place name.",
      },
      {
        title: "Quote form with photo upload",
        desc: "Customers send a picture of the space. You quote accurately without a site visit for every enquiry.",
      },
      {
        title: "Service pages that rank",
        desc: "Separate pages for patios, turf, retaining walls, planting and maintenance — each targeting its own search.",
      },
      {
        title: "Google Business Profile setup",
        desc: "Categories, service area, photos and a review flow — the map pack is where most landscaping leads start.",
      },
      {
        title: "Seasonal offer sections",
        desc: "Spring clean-ups, autumn work, winter maintenance — editable by you when the season turns.",
      },
      {
        title: "Reviews on the page",
        desc: "Your Google reviews pulled onto the site where they close the sale, not left where nobody looks.",
      },
      {
        title: "Speed and Core Web Vitals",
        desc: "Heavy photography that still loads in under two seconds, because slow sites lose the enquiry.",
      },
    ],
    projectTags: ["Landscaping"],
    proofHeading: "Landscaping sites I have built",
    faqs: [
      {
        q: "Do you actually work with landscapers, or is this a generic template?",
        a: "Landscaping is the trade I have built for most — gardening firms, hardscapers, and outdoor-living companies. You can see five of them further up this page. The structure below comes from what worked on those builds, not from a template.",
      },
      {
        q: "I already have a website. Can you fix it instead of rebuilding?",
        a: "Often, yes. If the site is on WordPress and reasonably built, restructuring the gallery, adding service-area pages, and fixing speed usually costs far less than a rebuild. I will tell you honestly which one your site needs before quoting.",
      },
      {
        q: "Can you get me ranking in the towns I cover?",
        a: "That is the main SEO work for a landscaper: a genuine page for each service area, a properly set up Google Business Profile, and reviews coming in steadily. It takes a few months, not a few weeks — anyone promising faster is guessing.",
      },
      {
        q: "I am not technical. Can I update it myself?",
        a: "Yes. Adding photos of a finished job and changing a seasonal offer are things you will be able to do from your phone. Anything more complicated, I handle on a care plan.",
      },
      {
        q: "How much does a landscaping website cost?",
        a: "A focused site that ranks and takes quote requests typically starts around $499, and a larger build with many service-area pages runs higher. You get one fixed number before any work starts.",
      },
    ],
    cta: {
      heading: "Let's get your work in front of the people searching for it",
      body: "Send me your current site — or just tell me the towns you cover — and I will come back with a plan and a fixed price within 24 hours.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "construction",
    name: "Construction & Contracting",
    buyer: "contractor",
    meta: {
      title: "Construction & Contractor Website Design | Sites That Win Bids",
      description:
        "Websites and SEO for builders, contractors and trades. Project galleries, trust signals, and quote forms that turn visits into enquiries. Fixed quote in 24 hours.",
    },
    hero: {
      small: "For builders & contractors",
      title: "Contractor Websites That Win Work",
      taglineTitle: "Bigger jobs go to whoever looks most credible.",
      taglineText:
        "Your prospect is comparing three builders on their phone. The one whose site shows finished projects, licences, and real reviews gets the call.",
      bullets: [
        "Project galleries with real detail",
        "Licences, insurance and accreditations up front",
        "Quote forms built for job enquiries",
      ],
    },
    intro: {
      heading: "Credibility is the whole job",
      body:
        "Nobody hands over a large construction budget to a company whose website looks abandoned. Yet most contractor sites are exactly that: a stock photo of a hard hat, a phone number, and three lines of text last updated in 2019.\n\nThe fix is not decoration. It is proof — finished projects with real photographs, the scope and the timeline, your licence and insurance stated plainly, and reviews from named clients. A prospect comparing three builders will pick the one who removed the most doubt, and that is a thing a website can do.",
    },
    pains: [
      {
        title: "No proof of finished work",
        desc: "Stock photos tell a prospect nothing. Your own completed projects tell them everything.",
      },
      {
        title: "Credentials are invisible",
        desc: "Licence, insurance, accreditations and years in business belong where a nervous buyer will see them.",
      },
      {
        title: "You are invisible in local search",
        desc: "\"Builders in <town>\" is how these jobs start. Without local pages you never enter the comparison.",
      },
      {
        title: "Enquiries go nowhere",
        desc: "A bare contact form with no detail fields means quoting blind and chasing people for basics.",
      },
    ],
    included: [
      {
        title: "Project case studies",
        desc: "Finished builds with photographs, scope, and timeline — the evidence that closes a large job.",
      },
      {
        title: "Trust signals up front",
        desc: "Licence numbers, insurance, accreditations and guarantees placed where doubt actually arises.",
      },
      {
        title: "Service area pages",
        desc: "A real page for each town or county you work in, targeting how people actually search.",
      },
      {
        title: "Detailed quote forms",
        desc: "Project type, budget range, timeline and photos captured up front, so you quote once and accurately.",
      },
      {
        title: "Service breakdown pages",
        desc: "Extensions, renovations, new builds, groundwork — each its own page and its own search.",
      },
      {
        title: "Google Business Profile setup",
        desc: "Categories, coverage area, project photos and a review process that keeps the profile alive.",
      },
      {
        title: "Reviews and testimonials",
        desc: "Named clients with real projects attached, which carries far more weight than an anonymous quote.",
      },
      {
        title: "Fast, mobile-first build",
        desc: "Read on site, in a van, on bad signal. It has to load quickly and work with one thumb.",
      },
    ],
    projectTags: ["Construction"],
    proofHeading: "Construction sites I have built",
    faqs: [
      {
        q: "Will the site work for both domestic and commercial work?",
        a: "Yes, but they need separating. Homeowners and commercial buyers want completely different proof, so they get different pages and different case studies rather than one page trying to speak to both.",
      },
      {
        q: "I have very few photos of finished work. Is that a problem?",
        a: "It is the single most valuable thing you can fix, and it costs nothing. A phone camera on your next three completed jobs — wide shot, detail shot, and the before if you have it — is enough to build the whole gallery around.",
      },
      {
        q: "Can you help me rank for my area?",
        a: "Yes. Local pages for the towns you cover, a properly set up Google Business Profile, and consistent details across the directories that matter for trades. That combination is what moves local rankings.",
      },
      {
        q: "How long does a contractor website take?",
        a: "Usually three to five weeks depending on how many services and areas you cover. You get a phased timeline before we start.",
      },
    ],
    cta: {
      heading: "Let's make your next quote an easy yes",
      body: "Tell me what you build and where you work. I will come back with a plan and a fixed price within 24 hours.",
    },
    showcase: {
      brand: "Construction & Contracting",
      theme: { accent: "#1a6b3d", accentText: "#1a6b3d", bg: "#ffffff", ink: "#111111", dark: "#0b1f15" },
      hero: {
        badge: "Construction & Contracting",
        title: "Built Right,",
        titleAccent: "Delivered On Schedule",
        text: "Commercial and residential construction run by crews who plan the work, protect the site, and keep every stakeholder informed from groundbreaking to handover.",
        bullets: ["Licensed and Insured Crews", "Safety-First Job Sites", "Fixed Scope and Clear Pricing", "On-Time Project Delivery"],
        primaryCta: "Request a Quote",
        secondaryCta: "See Our Work",
        formHeading: "Tell Me About Your Project",
      },
      formServices: ["Web Development", "Web App Development", "Mobile App Development", "E-commerce & Automation", "Marketing & SEO", "Support & Maintenance"],
      images: {
        hero: "/Constraction/Banner-bg.png",
        introMain: "/Constraction/04d1b4a9-0cb3-4d5f-80c7-cb7364b42a3c.png",
        introSmall: "/Constraction/concrete-pour.webp",
        whyMain: "/Constraction/a0fc5c19-9999-41cf-b32d-7ea48f678f2c.png",
        whySmall: "/Constraction/IS_B5r_2Q2GpYOHK-gfZgQ-BYCN-VALUES-FEMME-SOURIANTE-GROUPE-MARC-CHESNEAU.webp",
        faq: "/Constraction/young-woman-and-man-in-construction-hats-photo.jpg",
        cta: "/Constraction/diverse-female-construction-workers-in-safety-gear-concept-of-teamwork-industry-empowerment-diversity-photo.jpg",
      },
      intro: { eyebrow: "Who we are", heading: { lead: "A Construction Team That Treats Your Site", accent: "Like Its Own" }, body: ["Construction goes wrong when planning is thin and communication is worse. We scope the work carefully, sequence the trades, keep the site safe and tidy, and tell you exactly where the project stands at every stage. One accountable team from the first drawing to the final walkthrough."], checks: ["Quality Workmanship", "Clear Communication", "Reliable Project Management"], cta: "Request a Quote" },
      ticker: ["Licensed and insured", "Safety first", "Fixed-scope quotes", "Experienced crews", "On-time delivery"],
      credentials: {
        eyebrow: "Why clients trust us",
        heading: { lead: "Credentials", accent: "You Can Count On" },
        items: [
          { title: "Licensed & Insured", desc: "Full coverage on every project, with documentation ready before work begins." },
          { title: "Skilled Trade Crews", desc: "Experienced tradespeople who own the work, not rotating subcontractors." },
          { title: "Upfront Quotes", desc: "A defined scope and a written price before any ground is broken." },
          { title: "Safety Record", desc: "Site safety planned into every phase, from induction to handover." },
          { title: "Warranty Protection", desc: "Written cover on our workmanship, in plain language." },
        ],
      },
      services: {
        eyebrow: "What we do",
        heading: { lead: "Construction Services", accent: "Under One Roof" },
        variant: "cards",
        items: [
          { title: "General Contracting", img: "/Constraction/a0fc5c19-9999-41cf-b32d-7ea48f678f2c.png", desc: "End-to-end delivery of residential and commercial builds, managed by one accountable team from the first drawing to the final walkthrough, with clean sites and clear updates." },
          { title: "Site Preparation & Excavation", img: "/Constraction/excavator-site.jpg", desc: "Clearing, grading and excavation done properly, so the structure that follows has a sound base and the schedule stays intact. We work around your site conditions and keep it tidy." },
          { title: "Concrete & Structural Work", img: "/Constraction/04d1b4a9-0cb3-4d5f-80c7-cb7364b42a3c.png", desc: "Reinforcement, formwork and pours handled by experienced crews who work to specification and inspect every stage before it is signed off." },
        ],
        aside: { title: "Construction services for every stage of the build", body: "From site preparation to final handover, we plan, build and manage the work so you deal with one team instead of many." },
      },
      beforeAfter: {
        heading: { lead: "See The Project", accent: "From Ground To Structure" },
        body: "Progress is easier to trust when you can see it. We document every project from the cleared site through to the finished structure, so clients know exactly what was built and how.",
        before: "/Constraction/excavator-site.jpg",
        after: "/Constraction/a0fc5c19-9999-41cf-b32d-7ea48f678f2c.png",
        beforeLabel: "Cleared site",
        afterLabel: "Structure complete",
      },
      why: {
        heading: { lead: "More Than A Contractor.", accent: "A Partner You Can Rely On." },
        eyebrow: "Why clients choose us",
        items: [
          { title: "Hands-On Craftsmanship", desc: "Tradespeople who know the details that make a build last." },
          { title: "Clear Communication", desc: "Regular updates and honest pricing, with no surprise variations." },
          { title: "Dependable Materials", desc: "Specified for performance, durability and compliance." },
          { title: "Managed Timelines", desc: "Sequenced trades and scheduling that keep the project moving." },
        ],
      },
      steps: {
        eyebrow: "Our process",
        heading: { lead: "From First Conversation to", accent: "Final Handover" },
        items: [
          { title: "Reach Out", desc: "Send the brief or call us with the basics of your project." },
          { title: "Site Visit & Quote", desc: "We walk the site, confirm the scope and give a clear, itemised price." },
          { title: "Plan & Schedule", desc: "Drawings, permits, materials and timeline locked in before we start." },
          { title: "Build & Handover", desc: "Safe, tidy delivery with regular updates and a full walkthrough at the end." },
        ],
      },
      reviews: {
        eyebrow: "Reviews",
        heading: { lead: "What Our Clients", accent: "Say" },
        sample: true,
        items: [
          { name: "Client name", role: "Commercial client", text: "Sample review. Replace with a real client testimonial about delivery, communication and site standards." },
          { name: "Client name", role: "Residential client", text: "Sample review. Replace with a real client testimonial about the build quality and the way the crew treated the property." },
          { name: "Client name", role: "Property developer", text: "Sample review. Replace with a real client testimonial about schedule, budget and how issues were handled." },
          { name: "Client name", role: "Business owner", text: "Sample review. Replace with a real client testimonial about the quote, the process and the handover." },
        ],
      },
      faq: { eyebrow: "FAQs", heading: { lead: "Your Questions,", accent: "Answered" } },
      cta: {
        heading: "Ready to start your project?",
        body: "Tell us what you are building and when you need it done. You will get a clear scope, a fixed price and a crew that arrives when promised.",
        formHeading: "Choose The Service You Need",
        button: "Request a Quote",
      },
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "real-estate",
    name: "Real Estate",
    buyer: "agency",
    meta: {
      title: "Real Estate Website Design & SEO | Property Sites That Convert",
      description:
        "Websites for estate agents, developers and property firms. Fast listing search, lead capture, and SEO that brings in buyers and sellers. Fixed quote in 24 hours.",
    },
    hero: {
      small: "For property",
      title: "Property Websites That Capture Buyers",
      taglineTitle: "The listing is the product. Everything else gets out of the way.",
      taglineText:
        "Buyers search, filter, and compare. Sellers want a valuation. A property site that does those two things quickly beats one that looks impressive and loads slowly.",
      bullets: [
        "Search and filtering that stays fast",
        "Valuation and enquiry capture built in",
        "Development and project microsites",
      ],
    },
    intro: {
      heading: "Two audiences, one site, different jobs",
      body:
        "A property website serves two people who want opposite things. A buyer wants to search, filter, and see photos without waiting. A seller wants one thing: to find out what their property is worth. Most agency sites are built entirely for the buyer and leave the seller with a generic contact form — which is backwards, because the seller is the more valuable lead.\n\nI build both paths properly: listing search that stays fast as the portfolio grows, and a valuation route that captures the seller before they call a competitor. For developers, that extends to project sites — a housing scheme with its own plans, phases, availability and enquiry flow, as I built for DHA Bahawalpur.",
    },
    pains: [
      {
        title: "Listing search is slow",
        desc: "Heavy photography and unoptimised filters mean buyers wait, and waiting buyers go back to the portal.",
      },
      {
        title: "Sellers have no obvious path",
        desc: "The highest-value visitor on the site gets the same generic contact form as everyone else.",
      },
      {
        title: "You rank behind the portals",
        desc: "You will not beat the big portals on listings. You can beat them on area guides and local expertise.",
      },
      {
        title: "Nothing is captured",
        desc: "Visitors browse and leave with no saved search, no alert, and no reason to come back.",
      },
    ],
    included: [
      {
        title: "Fast listing search",
        desc: "Filter by price, type, bedrooms and area, staying quick as the portfolio grows.",
      },
      {
        title: "Property detail pages",
        desc: "Galleries, floor plans, maps and an enquiry form that reaches the right agent immediately.",
      },
      {
        title: "Valuation capture",
        desc: "A dedicated route for sellers — the most valuable lead on the site deserves its own path.",
      },
      {
        title: "Development microsites",
        desc: "A scheme with its own phases, plans, availability and enquiry flow, separate from the main site.",
      },
      {
        title: "Area and neighbourhood guides",
        desc: "Where you can genuinely outrank the portals — local knowledge they cannot replicate.",
      },
      {
        title: "CRM and portal integration",
        desc: "Listings synced from your existing system so nobody re-enters a property by hand.",
      },
      {
        title: "Saved searches and alerts",
        desc: "A reason for a buyer to come back, and an email address you can follow up.",
      },
      {
        title: "Schema for property listings",
        desc: "Structured data so listings can show richer results in search.",
      },
    ],
    projectTags: ["Real Estate"],
    proofHeading: "Property work",
    faqs: [
      {
        q: "Can the site pull listings from my current CRM?",
        a: "Usually yes — most agency CRMs offer a feed or an API. I connect to it so your team keeps working in the system they know and the website updates itself.",
      },
      {
        q: "Can I realistically outrank the big property portals?",
        a: "Not on listings — they have too much authority and too much inventory. You beat them on local expertise: area guides, market commentary, school and transport information, and seller-focused content. That is where the portals are weak and you are strong.",
      },
      {
        q: "Do you build sites for a single development?",
        a: "Yes. A development microsite with plans, phases, availability and its own enquiry flow works far better than burying a scheme inside a general agency site. DHA Bahawalpur is that kind of build.",
      },
      {
        q: "What about lead capture for sellers?",
        a: "It gets its own page, its own form, and its own place in the navigation. Treating a valuation request as just another contact-form message is the most common way agencies lose the better lead.",
      },
    ],
    cta: {
      heading: "Let's build the property site your listings deserve",
      body: "Tell me how many listings you carry and which CRM you use. I will come back with a plan and a fixed price within 24 hours.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "ecommerce",
    name: "E-commerce",
    buyer: "store owner",
    meta: {
      title: "E-commerce Website Design | Shopify & WooCommerce Stores That Sell",
      description:
        "Shopify and WooCommerce stores built around the checkout, then tuned until the numbers move. Migrations, speed work, and conversion optimisation. Fixed quote in 24 hours.",
    },
    hero: {
      small: "For online stores",
      title: "Stores Built Around The Checkout",
      taglineTitle: "Traffic is not the problem. The path to checkout is.",
      taglineText:
        "Most stores lose the sale between the product page and the payment screen. That path is where I spend the effort, because that is where the money is.",
      bullets: [
        "Shopify themes coded in Liquid",
        "WooCommerce builds and migrations",
        "Checkout and speed optimisation",
      ],
    },
    intro: {
      heading: "A store is judged on one number",
      body:
        "Not visits, not followers — the percentage of visitors who buy. Everything else is decoration. Most stores I am handed have plenty of traffic and a checkout that quietly loses people: five steps where two would do, shipping costs revealed at the last moment, a product page that does not answer the obvious question.\n\nI build stores in Shopify and WooCommerce, and I have migrated plenty between them. Whether it is a new store or an existing one that has stopped converting, the work is the same: make the path from landing to paid as short and as trustworthy as it can be, then keep tuning it.",
    },
    pains: [
      {
        title: "The checkout leaks",
        desc: "Every extra field and every late surprise on shipping costs you a percentage of completed orders.",
      },
      {
        title: "Product pages do not sell",
        desc: "Thin descriptions, small photos, no reviews, and no answer to the question stopping the buyer.",
      },
      {
        title: "The store is slow",
        desc: "Apps and plugins stack up until pages crawl. On mobile that is orders lost outright.",
      },
      {
        title: "No follow-up",
        desc: "Abandoned carts and past customers are the cheapest revenue you have, and most stores ignore both.",
      },
    ],
    included: [
      {
        title: "Shopify theme development",
        desc: "Custom themes coded in Liquid — not a bought theme bent out of shape with a page builder.",
      },
      {
        title: "WooCommerce builds",
        desc: "Full stores on WordPress when you want to own the platform outright and avoid per-sale fees.",
      },
      {
        title: "Platform migrations",
        desc: "Move between Shopify and WooCommerce with products, customers, orders and rankings intact.",
      },
      {
        title: "Checkout optimisation",
        desc: "Fewer steps, honest shipping costs shown early, and the payment methods your buyers expect.",
      },
      {
        title: "Product page conversion work",
        desc: "Photography, descriptions, reviews and stock signals arranged to answer objections in order.",
      },
      {
        title: "Speed and Core Web Vitals",
        desc: "App audits and image work, because a second of delay is measurable in lost orders.",
      },
      {
        title: "Abandoned cart and email flows",
        desc: "Automated follow-up that recovers orders you have already paid to acquire.",
      },
      {
        title: "Product SEO",
        desc: "Category and product structure, schema, and content that brings buyers in without paid ads.",
      },
    ],
    projectTags: ["E-commerce", "Retail"],
    proofHeading: "Stores I have built",
    faqs: [
      {
        q: "Shopify or WooCommerce — which should I pick?",
        a: "Shopify if you want it handled and are comfortable with the monthly fee and transaction cut. WooCommerce if you want to own the platform outright and have more control over cost at scale. I build both and will recommend based on your catalogue and budget, not on which I prefer.",
      },
      {
        q: "Can you move my store without losing rankings?",
        a: "Yes — that is what the redirect mapping is for. Every old URL points at its new equivalent, so the search equity carries over. Migrations done without it are where stores lose traffic, and it is entirely avoidable.",
      },
      {
        q: "My store gets traffic but very few sales. Can you fix that?",
        a: "That is usually the most profitable work available, because you are already paying for the traffic. It starts with finding where people drop off — usually the product page or the checkout — and fixing those before touching anything else.",
      },
      {
        q: "Do you handle payments, shipping and tax setup?",
        a: "Yes, all of it, including the region-specific parts. The store is handed over ready to take a real order, not ready in principle.",
      },
    ],
    cta: {
      heading: "Let's find where your store is losing the sale",
      body: "Send me your store URL. I will tell you what I would change first and quote it within 24 hours.",
    },
  },

  homeRenovation,
  roofing,
];

export const getIndustry = (slug: string) => INDUSTRIES.find((i) => i.slug === slug);
