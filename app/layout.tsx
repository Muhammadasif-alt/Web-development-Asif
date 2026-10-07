import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  // Makes every canonical, OG, and twitter URL on the site absolute.
  metadataBase: new URL(SITE.url),
  title: {
    default: "Freelance Web Developer & SEO Specialist | Asif.dev",
    template: "%s | Asif.dev",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.personName, url: SITE.url }],
  creator: SITE.personName,
  publisher: SITE.personName,
  keywords: [
    "freelance web developer",
    "SEO specialist",
    "WordPress developer",
    "Shopify developer",
    "Next.js developer",
    "web development services",
    "speed optimisation",
    "e-commerce development",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
    url: SITE.url,
    title: "Freelance Web Developer & SEO Specialist | Asif.dev",
    description: SITE.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: SITE.jobTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Web Developer & SEO Specialist | Asif.dev",
    description: SITE.description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

/**
 * Resolve the theme before first paint. Day is the default a first-time visitor
 * lands on; a saved choice overrides it. Running this in <head> avoids the
 * flash of the wrong theme a useEffect would produce.
 */
const themeScript = `(function(){try{var t=localStorage.getItem('theme')||'light';document.documentElement.classList.toggle('dark',t==='dark');}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
