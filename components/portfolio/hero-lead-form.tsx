"use client";

import { useState } from "react";
import { ArrowRight, BriefcaseBusiness, Check, Clock3 } from "lucide-react";
import { Select } from "@/components/portfolio/select";

const EMAIL = "raoasifriyasat@gmail.com";

const BUDGETS = [
  "Less than $500",
  "$500 – $1,000",
  "$1,000 – $5,000",
  "$5,000+",
  "Not sure yet",
];

/* Shared field look: soft filled inputs that light up with a green ring on focus. */
const base =
  "w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-900 outline-none transition-[border-color,box-shadow,background-color] placeholder:text-neutral-400 focus:border-[#1a6b3d] focus:bg-white focus:ring-4 focus:ring-[#1a6b3d]/15 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-white/35 dark:focus:bg-white/[0.07]";
const field = `${base} h-11`;

const label = "block text-xs font-semibold text-neutral-700 dark:text-white/70";

type Props = {
  /** Shown in the card header — name the offer for the page it sits on. */
  heading?: string;
  subheading?: string;
  /** Written into the mail subject so enquiries are traceable to a page. */
  source?: string;
  cta?: string;
};

/**
 * Compact lead capture for the hero. Submits by opening the visitor's mail
 * client, matching how the main contact form works — the site has no backend,
 * so a mailto keeps the enquiry deliverable instead of silently dropping it.
 */
export function HeroLeadForm({
  heading = "Get Your Free Quote",
  subheading = "Tell me the goal and I will come back with a plan and a fixed price.",
  source = "Website",
  cta = "Get Custom Proposal",
}: Props) {
  const [budget, setBudget] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body =
      `Name: ${fd.get("name") || ""}\n` +
      `Email: ${fd.get("email") || ""}\n` +
      `Company: ${fd.get("company") || ""}\n` +
      `Budget: ${budget || "Not specified"}\n` +
      `Enquiry from: ${source}\n\n` +
      `Goals:\n${fd.get("goals") || ""}`;

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `New enquiry — ${source}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-[1.75rem] border bg-white p-6 shadow-2xl shadow-[#1a6b3d]/15 dark:bg-[#0b0f0d] dark:shadow-black/50 sm:p-8">
      {/* soft brand glow in the card's top corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#1a6b3d]/12 blur-3xl dark:bg-[#1a6b3d]/30"
      />
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#1a6b3d] text-white shadow-lg shadow-[#1a6b3d]/30">
            <BriefcaseBusiness className="h-6 w-6" strokeWidth={2} />
          </span>
          <div>
            <h2 className="text-lg font-extrabold leading-tight text-neutral-950 dark:text-white sm:text-xl">{heading}</h2>
            <p className="mt-1 text-xs leading-relaxed text-neutral-600 dark:text-white/60">{subheading}</p>
          </div>
        </div>
        <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-[#1a6b3d]/10 px-3 py-1 text-[11px] font-bold text-[#1a6b3d] dark:bg-white/10 dark:text-white sm:inline-flex">
          <Clock3 className="h-3.5 w-3.5" />
          24h reply
        </span>
      </div>

      {sent ? (
        <div className="relative mt-6 flex items-start gap-3 rounded-xl bg-[#1a6b3d]/10 p-4">
          <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#1a6b3d]" />
          <p className="text-sm text-neutral-700 dark:text-white/80">
            Your mail app should have opened with the details filled in. Send it and I will reply
            within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative mt-7 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="hf-name" className={label}>
              Full Name
            </label>
            <input
              id="hf-name"
              name="name"
              required
              autoComplete="name"
              placeholder="Your full name"
              className={`${field} mt-1.5`}
            />
          </div>

          <div>
            <label htmlFor="hf-email" className={label}>
              Email Address
            </label>
            <input
              id="hf-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className={`${field} mt-1.5`}
            />
          </div>
          </div>

          <div>
            <label htmlFor="hf-company" className={label}>
              Company
            </label>
            <input
              id="hf-company"
              name="company"
              autoComplete="organization"
              placeholder="Company (optional)"
              className={`${field} mt-1.5`}
            />
          </div>

          <div>
            <label htmlFor="hf-budget" className={label}>
              Budget Range
            </label>
            <div className="mt-1.5">
              <Select
                id="hf-budget"
                value={budget}
                onChange={setBudget}
                options={BUDGETS}
                placeholder="Select budget range…"
              />
            </div>
          </div>

          <div>
            <label htmlFor="hf-goals" className={label}>
              Goals
            </label>
            <textarea
              id="hf-goals"
              name="goals"
              rows={3}
              required
              placeholder="Tell me about your project…"
              className={`${base} mt-1.5 resize-y py-3`}
            />
          </div>

          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
          >
            {cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-neutral-500 dark:text-white/45">
            {["Free quote", "No spam", "Reply within 24h"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1">
                <Check className="h-3 w-3 text-[#1a6b3d]" strokeWidth={3} />
                {t}
              </span>
            ))}
          </p>
        </form>
      )}
    </div>
  );
}
