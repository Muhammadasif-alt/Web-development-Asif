import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICE_GROUPS, SERVICES } from "@/lib/services-data";

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-14 max-w-2xl">
          <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-brand">
            <span className="h-px w-8 bg-brand" />
            What I Do
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Everything you need, under one roof
          </h2>
          <p className="mt-4 text-muted-foreground">
            From the first line of code to ongoing support — grouped into three simple areas. Pick a
            service to see exactly what I deliver.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_GROUPS.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={group.key}
                className="flex h-full flex-col rounded-2xl border border-border bg-card/50 p-6 sm:p-7"
              >
                {/* header */}
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                    <GroupIcon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{group.subtitle}</p>
                  </div>
                </div>

                {/* service rows */}
                <ul className="mt-6 divide-y divide-border border-t border-border">
                  {group.items.map((item) => {
                    const name = item.name ?? (item.slug ? SERVICES[item.slug].name : "");
                    const href = item.href ?? (item.slug ? `/services/${item.slug}` : group.href ?? "/services");
                    return (
                      <li key={name}>
                        <Link
                          href={href}
                          className="group flex items-center justify-between gap-3 py-3.5 text-sm transition-colors"
                        >
                          <span className="font-medium text-foreground transition-colors group-hover:text-brand">
                            {name}
                          </span>
                          <span
                            className={
                              item.featured
                                ? "shrink-0 rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold text-primary-foreground"
                                : "shrink-0 rounded-full border border-border bg-background/40 px-2.5 py-1 text-[11px] text-muted-foreground"
                            }
                          >
                            {item.badge}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* footer link */}
                <Link
                  href={group.href ?? `/services#${group.key}`}
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand transition-all hover:gap-3"
                >
                  <ArrowRight className="h-4 w-4" />
                  {group.cta}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
