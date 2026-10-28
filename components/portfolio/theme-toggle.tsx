"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

/** `onLight` keeps the button dark-on-white for the always-white navbar. */
export function ThemeToggle({ onLight = false }: { onLight?: boolean }) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light / dark theme"
      className={`grid h-10 w-10 place-items-center rounded-full transition-colors ${
        onLight
          ? "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
          : "bg-neutral-900/8 text-neutral-800 backdrop-blur-sm hover:bg-neutral-900/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
      }`}
    >
      {/* render a stable icon until mounted to avoid hydration mismatch */}
      {mounted && !dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}
