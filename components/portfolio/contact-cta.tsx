import { ContactForm } from "@/components/portfolio/contact-form";

export function ContactCta() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
            Let&apos;s work together
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-muted-foreground">
            Fill in the form below and I&apos;ll get back to you within 24 hours — no obligation,
            just an honest plan.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card/50 p-6 sm:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
