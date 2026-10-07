export type LocationData = {
  slug: string;
  country: string;
  region: string; // for schema areaServed
  currency: string;
  meta: { title: string; description: string };
  keywords: string[];
  hero: { small: string; title: string; taglineTitle: string; taglineText: string };
  /** intro.body may contain \n\n to split into paragraphs */
  intro: { heading: string; body: string };
  points: { title: string; desc: string }[];
  localNote: string;
  faqs: { q: string; a: string }[];
  cta: { heading: string; body: string };
};

export const LOCATIONS: LocationData[] = [
];

export const getLocation = (slug: string) => LOCATIONS.find((l) => l.slug === slug);
