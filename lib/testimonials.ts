/**
 * Client testimonials for the home page carousel.
 *
 * Only real, client-approved feedback belongs here. Entries marked `sample`
 * are layout placeholders: they show in `next dev` so the design can be
 * reviewed, but the whole section is hidden in production while any sample
 * remains, so an invented review can never go live.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Short project label shown in the chip, e.g. "Peel Master · 2025". */
  project: string;
  /** What was delivered, shown under the chip. */
  delivered: string;
  /** Optional headshot in /public; initials are shown when missing. */
  photo?: string;
  sample?: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Sample review — replace with real client feedback. The new site loads fast, ranks for our main services, and enquiries started coming in within the first month.",
    name: "Client Name",
    role: "Owner",
    company: "Company Name",
    project: "Project · 2025",
    delivered: "Business website & local SEO",
    sample: true,
  },
  {
    quote:
      "Sample review — replace with real client feedback. Clear communication, fixed quote, and the store was live on the date we agreed.",
    name: "Client Name",
    role: "Founder",
    company: "Company Name",
    project: "Project · 2025",
    delivered: "Shopify store & checkout tuning",
    sample: true,
  },
  {
    quote:
      "Sample review — replace with real client feedback. He rebuilt our dashboard from scratch and our team now finishes in minutes what used to take hours.",
    name: "Client Name",
    role: "Operations Lead",
    company: "Company Name",
    project: "Project · 2024",
    delivered: "MERN web app & admin dashboard",
    sample: true,
  },
];
