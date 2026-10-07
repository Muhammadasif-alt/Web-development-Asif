import Link from "next/link";
import { Check, ArrowRight, AlertCircle, TrendingUp, ShieldAlert } from "lucide-react";
import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { Button } from "@/components/ui/button";
import { serviceImage, type Service } from "@/lib/services-data";

export function ServicePage({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <>
      <Navbar />
      <main>
        {/* hero with background image */}
        <section className="relative flex min-h-[62vh] items-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={serviceImage(service.slug, 1920, 1080)}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
          <div className="relative mx-auto w-full max-w-5xl px-6 pt-32 pb-16 lg:pt-40">
            <nav className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
              <span>/</span>
              <Link href="/#services" className="transition-colors hover:text-foreground">Services</Link>
              <span>/</span>
              <span className="text-brand">{service.name}</span>
            </nav>

            <div className="mt-8 flex items-start gap-5">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-brand/30 bg-brand/10 text-brand">
                <Icon className="h-8 w-8" strokeWidth={1.75} />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                  {service.name}
                </h1>
                <p className="mt-3 text-lg text-muted-foreground">{service.tagline}</p>
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">{service.intro}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/#contact">Start a project</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-transparent text-foreground hover:bg-accent hover:text-foreground"
              >
                <Link href="/#services">All services</Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-20 px-6 py-20">
          {/* what I deliver */}
          <Block icon={<Check className="h-5 w-5" />} eyebrow="What you get" title="What I deliver">
            <ul className="grid gap-4 sm:grid-cols-2">
              {service.deliver.map((d) => (
                <li key={d} className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span className="text-sm leading-relaxed text-foreground/80">{d}</span>
                </li>
              ))}
            </ul>
          </Block>

          {/* common errors I fix */}
          <Block icon={<AlertCircle className="h-5 w-5" />} eyebrow="Problem solving" title="Common errors I fix">
            <div className="grid gap-4 sm:grid-cols-2">
              {service.errors.map((e) => (
                <div key={e.title} className="rounded-xl border border-border bg-card/50 p-5">
                  <div className="flex items-center gap-2.5 text-foreground">
                    <AlertCircle className="h-4 w-4 shrink-0 text-brand" />
                    <h3 className="font-semibold">{e.title}</h3>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{e.fix}</p>
                </div>
              ))}
            </div>
          </Block>

          {/* how I make it rank / perform */}
          <Block icon={<TrendingUp className="h-5 w-5" />} eyebrow="Get to the top" title="How I make it rank & perform">
            <ol className="space-y-3">
              {service.ranking.map((r, i) => (
                <li key={r} className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand/10 font-mono text-xs text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/80">{r}</span>
                </li>
              ))}
            </ol>
          </Block>

          {/* weak points */}
          <Block icon={<ShieldAlert className="h-5 w-5" />} eyebrow="Honest take" title="Weak points I watch for">
            <div className="space-y-4">
              {service.weakPoints.map((w) => (
                <div key={w.point} className="rounded-xl border border-border bg-card/50 p-5 sm:flex sm:items-center sm:gap-6">
                  <div className="flex items-center gap-2.5 text-foreground/80 sm:w-1/3">
                    <ShieldAlert className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="font-medium">{w.point}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-0 sm:flex-1">
                    <span className="font-mono text-xs uppercase tracking-wider text-brand">Fix → </span>
                    {w.fix}
                  </p>
                </div>
              ))}
            </div>
          </Block>

          {/* tech */}
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-brand">Stack & tools</span>
            <div className="mt-4 flex flex-wrap gap-3">
              {service.tech.map((t) => (
                <span key={t} className="rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm text-foreground/80">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-border bg-card/50 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Need {service.name.toLowerCase()}?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Tell me about your project and I&apos;ll get back to you within 24 hours.
            </p>
            <Button asChild size="lg" className="mt-7 rounded-full">
              <Link href="/#contact">
                Let&apos;s talk <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Block({
  icon,
  eyebrow,
  title,
  children,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-brand">
          {icon}
          {eyebrow}
        </span>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
