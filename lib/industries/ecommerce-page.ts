const P = "/E-commerc";
const img = {
  hero: `${P}/1_18.webp`,
  black: `${P}/1_8_5813b625-24ba-467d-b63f-8064781fc47e.webp`,
  grey: `${P}/5_5_ee1acf8d-73a9-45c5-8fbc-61b42fd5ba66.webp`,
  hotel: `${P}/rovaniemi-contract-sprung-divan-bed-setguest-hotel-contract-divan-beds-6426693.webp`,
  zip: `${P}/Apollo_ZipperLinkSet_dark_grey_FS_062_bcd88ee2-959c-4909-81d7-a830c307742e.webp`,
  student: `${P}/ortho-contract-open-coil-sprung-divan-bed-set-on-wooden-legscontract-student-divan-beds-3887272.webp`,
  cream: `${P}/prime-classic-hotel-contract-1500-pocket-sprung-divan-bed-setguest-hotel-contract-divan-beds-2834950.webp`,
  link: `${P}/prime-classic-hotel-zip-link-contract-2000-pocket-sprung-divan-bed-setzip-and-link-contract-divan-beds-1065406.webp`,
};

/** Content for the e-commerce demo page (components/portfolio/ecommerce-page.tsx). */
export const ECOMMERCE = {
  brand: "Prime Contract Beds",
  formServices: ["Web Development", "Web App Development", "Mobile App Development", "E-commerce & Automation", "Marketing & SEO", "Support & Maintenance"],
  hero: {
    eyebrow: "Built for businesses. Designed for comfort.",
    title: "Quality Beds. Built for Businesses.",
    text: "Durable, comfortable and cost-effective beds for hotels, landlords, student accommodation, care homes and more.",
    primary: "Shop Beds",
    secondary: "Bulk Order Enquiry",
    image: img.hero,
    perks: ["Free Nationwide Delivery", "1 Year Warranty", "Commercial Quality", "Expert Advice & Support"],
    stats: [
      { value: "184+", label: "Businesses" },
      { value: "4396", label: "Beds" },
      { value: "UK", label: "Made" },
      { value: "100%", label: "Trusted" },
    ],
  },
  collections: {
    heading: "Shop by Collection",
    text: "Explore our full range of contract beds and bedrooms, built for every space.",
    items: [
      { title: "Hotel Contract Beds", img: img.hotel },
      { title: "Student Accommodation Beds", img: img.student },
      { title: "Divan Beds", img: img.black },
      { title: "Zip and Link Beds", img: img.link },
      { title: "Ottoman Bases", img: img.hero },
      { title: "Zip and Links Mattresses", img: img.zip },
      { title: "Mattresses", img: img.grey },
      { title: "Headboards", img: img.cream },
    ],
  },
  products: {
    heading: "Featured Products",
    badge: "Spring Sale",
    items: [
      { title: "Ortho Contract Water Resistant Coil Sprung Divan Bed Set", img: img.student, price: "£244.99", was: "£639.00", save: "£394.01" },
      { title: "Hostal Contract Open Coil Sprung Divan Bed Set", img: img.hotel, price: "£194.99", was: "£509.00", save: "£314.01" },
      { title: "Prime Classic Hotel Zip & Link Contract 2000 Pocket Sprung Divan", img: img.link, price: "£614.99", was: "£1,599.00", save: "£984.01" },
      { title: "Prime Guest Hotel Zip & Link Contract 1000 Pocket Sprung Divan", img: img.zip, price: "£579.99", was: "£1,509.00", save: "£929.01" },
      { title: "Prime Classic Hotel Contract 1500 Pocket Sprung Divan Bed Set", img: img.cream, price: "£359.99", was: "£939.00", save: "£579.01" },
    ],
  },
  about: {
    eyebrow: "About us",
    heading: "Prime Contract Beds",
    text: "At Prime Contract Beds, we bring over six years of family-owned expertise to the B2B market. Specialising in bulk orders, we offer a comprehensive range of divan bed sets, divan bases, premium mattresses, headboards and luxury beds. All our products are proudly manufactured in the UK and come with a 1 Year warranty, ensuring top-quality and reliability.",
    button: "Shop Now",
    image: img.grey,
  },
  banner: {
    tag: "On Bulk Order",
    lead: "Better",
    bold: "Sleep",
    mid: "Even Better",
    big: "Prices!",
    button: "Explore More",
    image: img.black,
  },
  reviews: {
    heading: "What Our Customers Say",
    text: "Trusted by hotels, care homes, and businesses across the UK",
    items: [
      { name: "Rebecca Wilson", role: "B&B Owner", org: "Seaside Retreat B&B", quote: "As a B&B owner, I needed reliable beds at competitive prices. Prime Contract Beds delivered on every front. The customer service team went above and beyond to meet our tight deadline." },
      { name: "David Chen", role: "Head of Procurement", org: "Metropolitan Hotels Group", quote: "We have been a repeat customer for 2 years now. The quality is consistent, delivery is always on time, and the team is responsive. Perfect partner for our growing hotel chain." },
      { name: "Sophie Williams", role: "Accommodation Manager", org: "University of Leeds", quote: "The ottoman storage beds are a game-changer for our student accommodation. Maximises space while providing comfortable sleeping solutions. Will definitely order again." },
    ],
  },
  enquiry: {
    heading: "Ready to start your online store?",
    formHeading: "Choose The Service You Need",
    cta: "Get a Free Quote",
    text: "Get a clear price, a build that launches when promised, and a store you are genuinely proud of. Tell us what you want to sell and we will take it from there.",
  },
  faq: {
    lead: "Your Questions,",
    accent: "Answered",
    image: img.hotel,
  },
};
