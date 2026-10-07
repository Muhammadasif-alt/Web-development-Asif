"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const EMAIL = "raoasifriyasat@gmail.com";

const field =
  "h-12 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-[#1a6b3d]";

type Props = {
  services: string[];
  budgets: string[];
  button: string;
  note?: string;
  source: string;
  /** "band" lays fields out in three columns (hero strip); "card" stacks them. */
  layout: "band" | "card";
};

/** Estimate form for the landscaping page. Opens the visitor's mail client on submit, like the other site forms. */
export function LandscapeForm({ services, budgets, button, note, source, layout }: Props) {
  const [sent, setSent] = useState(false);
  const band = layout === "band";

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body =
      `Name: ${fd.get("name") || ""}\n` +
      `Email: ${fd.get("email") || ""}\n` +
      `Phone: ${fd.get("phone") || ""}\n` +
      `Project type: ${fd.get("type") || "Not specified"}\n` +
      `City: ${fd.get("city") || "Not specified"}\n` +
      `Enquiry from: ${source}\n\n` +
      `Message:\n${fd.get("message") || ""}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `New consultation request — ${source}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex items-start gap-3 rounded-xl border border-[#1a6b3d]/40 p-4 text-foreground">
        <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#1a6b3d]" />
        <p className="text-sm text-muted-foreground">
          Your mail app should have opened with the details filled in. Send it and we will reply within 24 hours.
        </p>
      </div>
    );
  }

  const select = (name: string, placeholder: string, options: string[]) => (
    <select name={name} defaultValue="" aria-label={placeholder} className={`${field} appearance-none`}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className={band ? "grid gap-4 md:grid-cols-3" : "space-y-4"}>
        <input name="name" required autoComplete="name" placeholder="Full Name" aria-label="Full Name" className={field} />
        <input name="email" type="email" required autoComplete="email" placeholder="Email Address" aria-label="Email Address" className={field} />
        <input name="phone" type="tel" autoComplete="tel" placeholder="Phone Number" aria-label="Phone Number" className={field} />
        {select("service", "Select a Service ----", services)}
        {select("budget", "Budget Range ----", budgets)}
        <textarea
          name="message"
          rows={band ? 1 : 3}
          placeholder="Tell me about your project (optional)"
          aria-label="Message"
          className={`${field} h-auto resize-y py-3`}
        />
      </div>
      <button
        type="submit"
        className="h-12 w-full rounded-lg bg-gradient-to-r from-[#15703a] to-[#4cb45a] text-sm font-bold text-white transition-transform hover:scale-[1.02]"
      >
        {button}
      </button>
      {note && <p className="text-center text-sm text-muted-foreground">{note}</p>}
    </form>
  );
}
