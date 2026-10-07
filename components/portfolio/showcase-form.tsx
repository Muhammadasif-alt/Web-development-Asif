"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const EMAIL = "raoasifriyasat@gmail.com";

const field =
  "h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-[var(--sc-accent)]";

type Props = {
  heading: string;
  services: string[];
  button: string;
  source: string;
  /** "stacked" labels every field (hero card); "compact" pairs them in a grid (CTA band). */
  variant?: "stacked" | "compact";
};

/**
 * Dark estimate form for showcase pages. Submits by opening the visitor's mail
 * client, as the other site forms do — there is no backend to post to.
 */
export function ShowcaseForm({ heading, services, button, source, variant = "stacked" }: Props) {
  const [sent, setSent] = useState(false);
  const stacked = variant === "stacked";

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body =
      `Name: ${fd.get("name") || ""}\n` +
      `Email: ${fd.get("email") || ""}\n` +
      `Phone: ${fd.get("phone") || ""}\n` +
      `Service: ${fd.get("service") || "Not specified"}\n` +
      `Enquiry from: ${source}\n\n` +
      `Message:\n${fd.get("message") || ""}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `New estimate request — ${source}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const label = (id: string, text: string) =>
    stacked ? (
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {text}
      </label>
    ) : null;

  return (
    <div className="w-full rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-2xl sm:p-8">
      <h2 className="text-center text-xl font-bold leading-snug sm:text-2xl">{heading}</h2>

      {sent ? (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-border p-4">
          <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--sc-accent)]" />
          <p className="text-sm text-muted-foreground">
            Your mail app should have opened with the details filled in. Send it and we will reply within one business day.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className={stacked ? "mt-6 space-y-4" : "mt-8 space-y-6"}>
          <div className={stacked ? "grid gap-4 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2"}>
            <div>
              {label(`${variant}-name`, "Name")}
              <input id={`${variant}-name`} name="name" required autoComplete="name" placeholder="Name" className={field} />
            </div>
            <div>
              {label(`${variant}-email`, "Email")}
              <input id={`${variant}-email`} name="email" type="email" required autoComplete="email" placeholder="Email" className={field} />
            </div>
            <div className={stacked ? "sm:col-span-2" : ""}>
              {label(`${variant}-phone`, "Phone Number")}
              <input id={`${variant}-phone`} name="phone" type="tel" autoComplete="tel" placeholder="Phone Number" className={field} />
            </div>
            <div className={stacked ? "sm:col-span-2" : ""}>
              {label(`${variant}-service`, "Select a Service")}
              <select
                id={`${variant}-service`}
                name="service"
                defaultValue=""
                className={`${field} appearance-none`}
              >
                <option value="" disabled>
                  Select a Service
                </option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            {label(`${variant}-message`, "Message")}
            <textarea
              id={`${variant}-message`}
              name="message"
              rows={stacked ? 4 : 6}
              placeholder="Message"
              className={`${field} h-auto resize-y py-3`}
            />
          </div>
          <button
            type="submit"
            className="h-12 w-full rounded-xl bg-[var(--sc-accent)] text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            {button}
          </button>
        </form>
      )}
    </div>
  );
}
