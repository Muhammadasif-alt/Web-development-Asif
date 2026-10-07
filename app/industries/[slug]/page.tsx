import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandscapingPage } from "@/components/portfolio/landscaping-page";
import { EcommercePage } from "@/components/portfolio/ecommerce-page";
import { RoofingPage } from "@/components/portfolio/roofing-page";
import { ShowcasePage } from "@/components/portfolio/showcase-page";
import { IndustryPage } from "@/components/portfolio/industry-page";
import { INDUSTRIES, getIndustry } from "@/lib/industries-data";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getIndustry(slug);
  if (!data) return {};

  return {
    title: data.meta.title,
    description: data.meta.description,
    alternates: { canonical: `/industries/${data.slug}` },
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      images: ["/og.jpg"],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getIndustry(slug);
  if (!data) notFound();

  if (data.slug === "landscaping") return <LandscapingPage data={data} />;

  if (data.slug === "roofing") return <RoofingPage data={data} />;

  if (data.slug === "ecommerce") return <EcommercePage data={data} />;

  if (data.showcase) return <ShowcasePage data={data} />;

  return <IndustryPage data={data} />;
}
