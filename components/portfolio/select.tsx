"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  id?: string;
  invalid?: boolean;
};

/* Theme-aware custom dropdown (replaces native <select> so the popup
   matches the site colors in both dark and light mode). */
export function Select({ value, onChange, options, placeholder, id, invalid }: SelectProps) {
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
        id={id}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex h-11 w-full items-center justify-between gap-2 rounded-xl border bg-neutral-50 px-4 text-sm outline-none transition-[color,box-shadow,border-color] focus-visible:ring-4 focus-visible:ring-[#1a6b3d]/15 dark:bg-white/[0.04] ${
          invalid
            ? "border-destructive/70"
            : "border-neutral-200 focus-visible:border-[#1a6b3d] dark:border-white/10"
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
          className="absolute z-50 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-border bg-popover p-1.5"
        >
          {options.map((opt) => {
            const selected = opt === value;
            return (
              <button
                key={opt}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-accent ${
                  selected ? "font-medium text-brand" : "text-foreground"
                }`}
              >
                <span className="truncate">{opt}</span>
                {selected && <Check className="h-4 w-4 shrink-0 text-brand" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
