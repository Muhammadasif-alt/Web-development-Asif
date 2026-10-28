export type ProjectCategory =
  | "Web Development"
  | "E-commerce"
  | "Web Apps"
  | "SEO and Growth";

export type Project = {
  url: string;
  title: string;
  tag: string;
  desc: string;
  category: ProjectCategory;
  stack: string[];
};

/* Real live projects. Verified live; temporary/platform subdomains and dead sites removed. */
export const PROJECTS: Project[] = [
  { url: "https://discovertimes.com", title: "Discover Times", tag: "Home Decor", desc: "Home decoration studio website with room-by-room services, portfolio, and consultation booking.", category: "Web Development", stack: ["Laravel", "PHP"] },
  { url: "https://ideadigital.services/", title: "Idea Digital", tag: "SEO Agency", desc: "SEO agency website with services, process, and lead generation for US businesses.", category: "SEO and Growth", stack: ["WordPress", "Elementor", "SEO"] },
  { url: "https://www.sajaddigitalservices.com/", title: "Sajad Digital Services", tag: "Digital Agency", desc: "Digital services agency website for career guidance, job assistance, and overseas opportunities.", category: "Web Development", stack: ["Next.js", "React"] },
  { url: "https://dehleezstudio.com", title: "Dehleez Studio", tag: "Web Design", desc: "Creative studio website with a clean, modern brand presence.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://hmgardening.com", title: "H&M Gardening", tag: "Landscaping", desc: "Landscaping and gardening services website for a Palos Park, IL business.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://ridgerocklandscaping.com", title: "Ridge Rock Landscaping", tag: "Landscaping", desc: "Premium outdoor living and landscaping company website.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://pureperfectionlandscaping.com", title: "Pure Perfection Landscaping", tag: "Landscaping", desc: "Landscaping and outdoor services website built to generate leads.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://ryzeoutdoorcreations.com/", title: "Ryze Outdoor Creations", tag: "Landscaping", desc: "Outdoor living and hardscaping company website.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://jonnyshardscaping.com", title: "Jonny's Hardscaping", tag: "Landscaping", desc: "Landscaping and hardscaping services website.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://ksjcontracting.com", title: "KSJ Contracting", tag: "Construction", desc: "Contracting and construction company website.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://flabuilders.com", title: "FLA Builders", tag: "Construction", desc: "Construction and builders company website.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://nonairesumes.com", title: "NonAI Resumes", tag: "Business Site", desc: "Conversion-focused website for a human-written resume service.", category: "Web Development", stack: ["WordPress", "PHP"] },
  { url: "https://cincomosqueteros.co", title: "Cinco Mosqueteros", tag: "Business Site", desc: "Brand and business website with a clean, modern design.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://papiandlillys.com", title: "Papi and Lilly's", tag: "Brand Site", desc: "Lifestyle brand website with a bold, friendly identity.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://podlaz.com", title: "Podlaz", tag: "Business Site", desc: "Modern business website built for speed and clarity.", category: "Web Development", stack: ["WordPress"] },
  { url: "https://crowncontractbeds.co.uk", title: "Crown Contract Beds", tag: "WordPress", desc: "Contract beds supplier website.", category: "Web Development", stack: ["WordPress", "PHP"] },
  { url: "https://primecontractbeds.co.uk", title: "Prime Contract Beds", tag: "WordPress", desc: "Trade and contract beds website.", category: "Web Development", stack: ["WordPress", "PHP"] },
  { url: "https://www.azcarparts.co.uk/", title: "AZ Car Parts", tag: "E-commerce", desc: "Online car parts store with search and catalogue.", category: "E-commerce", stack: ["WooCommerce", "WordPress"] },
  { url: "https://adelinewaterson.co.uk/", title: "Adeline Waterson", tag: "E-commerce", desc: "Fashion and lifestyle online store.", category: "E-commerce", stack: ["Shopify", "Liquid"] },
  { url: "https://winksleep.co.uk", title: "Wink Sleep", tag: "E-commerce", desc: "Mattress and sleep products online store.", category: "E-commerce", stack: ["WooCommerce", "WordPress"] },
  { url: "https://mychildsroom.co.uk", title: "My Child's Room", tag: "E-commerce", desc: "Children's furniture and nursery store.", category: "E-commerce", stack: ["WooCommerce", "WordPress"] },
  { url: "https://baby-fair.co.uk", title: "Baby Fair", tag: "E-commerce", desc: "Baby products and nursery essentials store.", category: "E-commerce", stack: ["WooCommerce", "WordPress"] },
  { url: "https://jobsinusa.us", title: "Jobs in USA", tag: "Job Portal", desc: "Job listing and recruitment platform.", category: "Web Apps", stack: ["Next.js", "MERN"] },
  { url: "https://jobgader.com", title: "JobGader", tag: "Job Portal", desc: "Jobs, internships and scholarships portal for students and graduates across 16 countries.", category: "Web Apps", stack: ["Next.js", "MERN"] },
  { url: "https://emecgrp.com", title: "EMEC Group", tag: "Construction", desc: "Construction, mechanical and electrical group website with quick quote requests.", category: "Web Development", stack: ["WordPress", "Elementor"] },

  /* Singapore: team building, workshops, and retail */
  { url: "https://www.teamlabs.sg", title: "TeamLabs", tag: "Team Building", desc: "Team bonding and corporate activities company website in Singapore.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://www.craftlabs.sg", title: "Craft Labs", tag: "Team Building", desc: "Team bonding and craft activities company website in Singapore.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://epicworkshops.com.sg", title: "Epic Workshops", tag: "Workshops", desc: "Team building workshops company with an online booking store.", category: "E-commerce", stack: ["WooCommerce", "WordPress"] },
  { url: "https://www.ecoponics.com.sg", title: "Ecoponics", tag: "Education", desc: "Science and environmental sustainability workshops with online booking.", category: "E-commerce", stack: ["WooCommerce", "WordPress"] },
  { url: "https://craft-everything.com", title: "Craft Everything", tag: "Craft Studio", desc: "Craft studio and workshops website with a bright, playful design.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://triokids.com.sg", title: "TrioKids", tag: "E-commerce", desc: "Art, craft, and toy store for kids with a full online catalogue.", category: "E-commerce", stack: ["WooCommerce", "WordPress"] },

  /* Finance, accounting, and advisory */
  { url: "https://accountingbizsales.com", title: "Accounting Biz Sales", tag: "Business Brokerage", desc: "Marketplace site for accounting businesses and tax practices for sale.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://interfaceaccountants.co.uk", title: "Interface Accountants", tag: "Accountancy", desc: "Chartered accountancy firm website with services and client resources.", category: "Web Development", stack: ["WordPress", "WooCommerce"] },
  { url: "https://koffexaccounting.com", title: "Koffex Accounting", tag: "Accounting", desc: "Accounting firm website built for small business clients.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://wbsadvisory.com", title: "WBS Advisory", tag: "Consulting", desc: "Business plan and feasibility study consultancy website in Dubai.", category: "Web Development", stack: ["WordPress", "Elementor"] },

  /* Healthcare and services */
  { url: "https://www.panasiasurg.com", title: "Pan Asia Surgery", tag: "Healthcare", desc: "Surgery clinic website with specialists, procedures, and appointments.", category: "Web Development", stack: ["Web Design"] },
  { url: "https://dubaidoctorathome.com", title: "Doctor At Home Dubai", tag: "Healthcare", desc: "At-home doctor consultation service website with booking enquiries.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://optiquederby.co.uk", title: "Optique Derby", tag: "Opticians", desc: "Opticians practice website with services and appointment booking.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://peelmaster.ae", title: "Peel Master", tag: "Car Detailing", desc: "Car detailing and paint protection services website in Dubai.", category: "Web Development", stack: ["Next.js", "React"] },

  /* Retail, property, and education */
  { url: "https://www.althahanifurniture.com", title: "Al Thahani Furniture", tag: "E-commerce", desc: "Second-hand furniture store in Abu Dhabi with an online catalogue.", category: "E-commerce", stack: ["WooCommerce", "WordPress"] },
  { url: "https://www.dhabahawalpur.com", title: "DHA Bahawalpur", tag: "Real Estate", desc: "Housing authority website with project details and resident information.", category: "Web Development", stack: ["Web Design"] },
  { url: "https://learnersacademy.com.pk", title: "Learners Academy", tag: "Education", desc: "Online IGCSE, O and A Level tuition academy website.", category: "Web Development", stack: ["Web Design"] },

  /* Marketing agencies */
  { url: "https://pulsebeat.com.au", title: "Pulse Beat", tag: "Digital Marketing", desc: "Digital marketing agency website in Sydney with services and lead capture.", category: "SEO and Growth", stack: ["WordPress", "Elementor"] },
];

/* Stable filename for a project's locally stored screenshot. */
export const shotSlug = (url: string) =>
  url
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/.*$/, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");

/* Local, pre-generated screenshot. Reliable and fast, never a blank remote render. */
export const projectShot = (url: string) => `/shots/${shotSlug(url)}.webp`;
