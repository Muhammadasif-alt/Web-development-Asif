import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { HireHero } from "@/components/portfolio/hire-hero";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { getSortedPosts, POSTS_PER_PAGE } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Web Development & SEO Tips by Asif",
  description:
    "Practical articles on web development, SEO, speed optimisation, WordPress, Shopify, and Next.js. Real advice to build faster, better-ranking websites.",
  alternates: { canonical: "/blog" },
  openGraph: {
    images: ["/og.jpg"],
    title: "Blog | Web Development & SEO Tips by Asif",
    description:
      "Practical articles on web development, SEO, speed optimisation, WordPress, Shopify, and Next.js.",
  },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d]">
      <span className="h-2 w-2 rounded-full bg-[#1a6b3d]" />
      {children}
    </p>
  );
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const posts = getSortedPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));

  const { page } = await searchParams;
  const requested = parseInt(page ?? "1", 10);
  const current = Math.min(Math.max(1, Number.isNaN(requested) ? 1 : requested), totalPages);

  const start = (current - 1) * POSTS_PER_PAGE;
  const shown = posts.slice(start, start + POSTS_PER_PAGE);

  const pageHref = (p: number) => (p <= 1 ? "/blog" : `/blog?page=${p}`);

  return (
    <>
      <HireHero
        bgImage="/desk-code.png"
        small="Insights & tips"
        title="The Blog"
        taglineTitle="Build smarter sites."
        taglineText="Practical, no-nonsense articles on web development, SEO, and performance, written from real client work."
        primaryCta={{ label: "Start your project", href: "/contact" }}
        secondaryCta={{ label: "View services", href: "/services" }}
      />

      <main className="bg-background text-foreground">
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Latest articles</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Advice you can actually use
              </h2>
              <p className="mt-4 text-muted-foreground">
                Straight talk on building fast, SEO-ready websites that bring in real business.
              </p>
            </div>

            {/* grid */}
            <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1a6b3d]/60"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.cover}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2.5 font-mono text-xs text-muted-foreground">
                      <span className="font-semibold text-[#1a6b3d]">{p.category}</span>
                      <span>•</span>
                      <span>{p.date}</span>
                      <span>•</span>
                      <span>{p.read}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold leading-snug text-foreground">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#1a6b3d]">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* pagination */}
            {totalPages > 1 && (
              <nav
                aria-label="Blog pagination"
                className="mt-14 flex items-center justify-center gap-2"
              >
                {current > 1 ? (
                  <Link
                    href={pageHref(current - 1)}
                    className="inline-flex h-11 items-center gap-1.5 rounded-full border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:border-[#1a6b3d]/60"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Prev
                  </Link>
                ) : (
                  <span className="inline-flex h-11 cursor-not-allowed items-center gap-1.5 rounded-full border border-border px-5 text-sm font-semibold text-muted-foreground">
                    <ArrowLeft className="h-4 w-4" />
                    Prev
                  </span>
                )}

                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <Link
                      key={n}
                      href={pageHref(n)}
                      aria-current={n === current ? "page" : undefined}
                      className={`grid h-11 w-11 place-items-center rounded-full text-sm font-bold transition-colors ${
                        n === current
                          ? "bg-[#1a6b3d] text-white"
                          : "border border-border bg-card text-muted-foreground hover:border-[#1a6b3d]/60 hover:text-foreground"
                      }`}
                    >
                      {n}
                    </Link>
                  ))}
                </div>

                {current < totalPages ? (
                  <Link
                    href={pageHref(current + 1)}
                    className="inline-flex h-11 items-center gap-1.5 rounded-full border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:border-[#1a6b3d]/60"
                  >
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <span className="inline-flex h-11 cursor-not-allowed items-center gap-1.5 rounded-full border border-border px-5 text-sm font-semibold text-muted-foreground">
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </nav>
            )}

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Page {current} of {totalPages}
            </p>
          </div>
        </section>
      </main>
      <HireFooter />
    </>
  );
}
