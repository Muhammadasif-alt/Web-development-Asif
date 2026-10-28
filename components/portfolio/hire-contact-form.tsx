"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Check, ChevronDown } from "lucide-react";

const EMAIL = "raoasifriyasat@gmail.com";

const SERVICES = [
  "Web Development",
  "Meta Ads",
  "SEO / Marketing",
  "E-commerce / Shopify",
  "Speed Optimization",
  "Maintenance & Support",
  "Website Rescue / Go-Live Help",
  "Other / Not sure",
];

const BUDGETS = [
  "Less than $500",
  "$500 – $1,000",
  "$1,000 – $5,000",
  "$5,000+",
  "Not sure yet",
];

const fieldClass =
  "h-12 w-full rounded-xl border border-border bg-card px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-[#1a6b3d]";

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  invalid?: boolean;
};

/* Custom brand-themed dropdown (replaces native <select>). */
function OrangeSelect({ value, onChange, options, placeholder, invalid }: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex h-12 w-full items-center justify-between gap-2 rounded-xl border bg-card px-4 text-sm outline-none transition-colors ${
          invalid ? "border-red-500/70" : "border-border focus:border-[#1a6b3d]"
        } ${value ? "text-foreground" : "text-muted-foreground"}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute z-50 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-border bg-card p-1.5"
        >
          {options.map((opt) => {
            const selected = opt === value;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-[#1a6b3d]/15 ${
                  selected ? "font-semibold text-[#1a6b3d]" : "text-muted-foreground"
                }`}
              >
                <span className="truncate">{opt}</span>
                {selected && <Check className="h-4 w-4 shrink-0 text-[#1a6b3d]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function HireContactForm() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [serviceErr, setServiceErr] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!service) {
      setServiceErr(true);
      return;
    }
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const phone = String(fd.get("phone") || "");
    const message = String(fd.get("message") || "");

    const subject = `New project enquiry — ${service}`;
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Service needed: ${service}\n` +
      `Budget: ${budget}\n\n` +
      `Project details:\n${message}`;

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Name" autoComplete="name" className={fieldClass} />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          autoComplete="email"
          className={fieldClass}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="phone"
          type="tel"
          placeholder="Phone number"
          autoComplete="tel"
          className={fieldClass}
        />
        <div>
          <OrangeSelect
            value={service}
            onChange={(v) => {
              setService(v);
              setServiceErr(false);
            }}
            options={SERVICES}
            placeholder="Service needed"
            invalid={serviceErr}
          />
          {serviceErr && <p className="mt-1.5 text-xs text-red-400">Please pick a service.</p>}
        </div>
      </div>

      <OrangeSelect value={budget} onChange={setBudget} options={BUDGETS} placeholder="Budget" />

      <textarea
        name="message"
        required
        rows={5}
        placeholder="Tell me about your project — what you need, timeline, and anything important."
        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-[#1a6b3d]"
      />

      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1a6b3d] to-[#1a6b3d] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90 sm:w-auto"
      >
        Send message
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      {sent && (
        <p className="flex items-center gap-2 text-sm text-[#1a6b3d] dark:text-[#1a6b3d]">
          <Check className="h-4 w-4" />
          Your email app should open — just hit send and I&apos;ll reply within 24 hours.
        </p>
      )}
    </form>
  );
}
