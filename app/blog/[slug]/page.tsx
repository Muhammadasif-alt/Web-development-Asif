import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { HireNav } from "@/components/portfolio/hire-nav";
import { HireFooter } from "@/components/portfolio/hire-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";
import {
  POSTS,
  getPostBySlug,
  getRelatedPosts,
  type Block,
} from "@/lib/blog-data";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found | Asif.dev" };
  return {
    title: `${post.title} | Asif.dev`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.dateISO,
      images: [{ url: post.cover }],
    },
  };
}

function ContentBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          {block.text}
        </h2>
      );
    case "p":
      return <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{block.text}</p>;
    case "ul":
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((it) => (
            <li key={it} className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1a6b3d]" />
              {it}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-8 rounded-2xl border-l-4 border-[#1a6b3d] bg-[#1a6b3d]/5 px-6 py-5 text-lg font-medium italic leading-relaxed text-foreground dark:text-white/90">
          {block.text}
        </blockquote>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      {/* ===== ARTICLE HEADER (brand hero band) ===== */}
      <header
        className="relative overflow-hidden text-foreground"
        style={{
          background:
            "radial-gradient(125% 125% at 68% 32%, #c8e659 0%, #12502d 46%, #164a2e 100%)",
        }}
      >
        <Image
          src="/desk-calm.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[var(--panel-2)]/72" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10">
          <HireNav />
          <div className="mx-auto max-w-3xl py-16 text-center lg:py-24">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
            <span className="mt-6 inline-block rounded-full bg-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-foreground backdrop-blur-sm">
              {post.category}
            </span>
            <h1 className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.dateISO}>{post.date}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.read}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="bg-background text-foreground">
        {/* ===== COVER ===== */}
        <div className="mx-auto max-w-4xl px-6">
          <div className="-mt-10 overflow-hidden rounded-3xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.cover} alt={post.title} className="aspect-[16/9] w-full object-cover" />
          </div>
        </div>

        {/* ===== BODY ===== */}
        <article className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
          <p className="text-lg font-medium leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <div className="mt-2">
            {post.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </div>

          {/* inline CTA */}
          <div className="mt-14 rounded-3xl border border-[#1a6b3d]/30 bg-gradient-to-b from-[var(--panel-2)] to-[var(--panel)] p-8 text-center sm:p-10">
            <h3 className="text-2xl font-extrabold tracking-tight">Got a project in mind?</h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              Tell me what you are building and I will reply within 24 hours with a clear plan and a
              fixed quote.
            </p>
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#15703a] to-[#4cb45a] px-7 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              Start your project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </article>

        {/* ===== RELATED ===== */}
        {related.length > 0 && (
          <section className="px-6 py-16 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-[1440px]">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Keep reading
              </h2>
              <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
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
            </div>
          </section>
        )}
      </main>
      <HireFooter />
    </>
  );
}
