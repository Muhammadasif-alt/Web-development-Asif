"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/portfolio/select";

const SERVICE_OPTIONS = [
  "Web Development",
  "Marketing & SEO",
  "E-commerce & Automation",
  "Support & Maintenance",
  "Other / Not sure",
];

const EMAIL = "raoasifriyasat@gmail.com";

const BUDGETS = [
  "Less than $500",
  "$500 – $1,000",
  "$1,000 – $5,000",
  "$5,000+",
  "Not sure yet",
];

const fieldClass =
  "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm text-foreground outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50";

const labelClass = "mb-1.5 block text-xs font-medium text-muted-foreground";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [work, setWork] = useState("");
  const [budget, setBudget] = useState("");
  const [workErr, setWorkErr] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!work) {
      setWorkErr(true);
      return;
    }
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const phone = String(fd.get("phone") || "");
    const message = String(fd.get("message") || "");

    const subject = `New project enquiry${work ? ` — ${work}` : ""}`;
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Service needed: ${work}\n` +
      `Budget: ${budget}\n\n` +
      `Project details:\n${message}`;

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Name <span className="text-brand">*</span>
          </label>
          <Input id="cf-name" name="name" required placeholder="Your name" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Email <span className="text-brand">*</span>
          </label>
          <Input id="cf-email" name="email" type="email" required placeholder="you@example.com" autoComplete="email" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-phone" className={labelClass}>
            Phone
          </label>
          <Input id="cf-phone" name="phone" type="tel" placeholder="+92 308 8663440" autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="cf-work" className={labelClass}>
            What do you need? <span className="text-brand">*</span>
          </label>
          <Select
            id="cf-work"
            value={work}
            onChange={(v) => {
              setWork(v);
              setWorkErr(false);
            }}
            options={SERVICE_OPTIONS}
            placeholder="Select a service…"
            invalid={workErr}
          />
          {workErr && (
            <p className="mt-1.5 text-xs text-destructive">Please pick what you need.</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="cf-budget" className={labelClass}>
          Budget
        </label>
        <Select
          id="cf-budget"
          value={budget}
          onChange={setBudget}
          options={BUDGETS}
          placeholder="Select a budget range…"
        />
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          Project description <span className="text-brand">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project — what you need, timeline, and anything important."
          className="flex w-full rounded-md border border-input bg-transparent px-3 py-2.5 text-sm text-foreground outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
        />
      </div>

      <Button type="submit" size="lg" className="w-full rounded-full sm:w-auto">
        Send message <Send className="ml-1.5 h-4 w-4" />
      </Button>

      {sent && (
        <p className="flex items-center gap-2 text-sm text-brand">
          <Check className="h-4 w-4" />
          Thanks! Your email app should open — just hit send and I&apos;ll reply within 24 hours.
        </p>
      )}
    </form>
  );
}
