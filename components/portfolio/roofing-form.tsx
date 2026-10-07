"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const EMAIL = "raoasifriyasat@gmail.com";

const field =
  "h-14 w-full rounded-full border border-border bg-background px-6 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-[#1a6b3d]";

type Props = { services: string[]; button: string; source: string; className?: string };

/** Pill-shaped quote strip for the roofing page. Opens the visitor's mail client on submit, like the other site forms. */
export function RoofingForm({ services, button, source, className = "grid gap-4 md:grid-cols-3" }: Props) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body =
      `Name: ${fd.get("name") || ""}\n` +
      `Phone: ${fd.get("phone") || ""}\n` +
      `Email: ${fd.get("email") || ""}\n` +
      `Service: ${fd.get("service") || "Not specified"}\n` +
      `Enquiry from: ${source}\n\n` +
      `Message:\n${fd.get("message") || ""}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `New quote request — ${source}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-border p-5">
        <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#1a6b3d]" />
        <p className="text-sm text-muted-foreground">
          Your mail app should have opened with the details filled in. Send it and we will reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={className}>
      <input name="name" required autoComplete="name" placeholder="Full Name" aria-label="Full Name" className={field} />
      <input name="phone" type="tel" autoComplete="tel" placeholder="Phone Number" aria-label="Phone Number" className={field} />
      <input name="email" type="email" required autoComplete="email" placeholder="Email Address" aria-label="Email Address" className={field} />
      <select name="service" defaultValue="" aria-label="Service" className={`${field} appearance-none`}>
        <option value="" disabled>
          Select a Service
        </option>
        {services.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <input name="message" placeholder="How can we help" aria-label="How can we help" className={field} />
      <button
        type="submit"
        className="h-14 rounded-full bg-[#1a6b3d] text-sm font-bold uppercase text-white transition-opacity hover:opacity-90"
      >
        {button}
      </button>
    </form>
  );
}
