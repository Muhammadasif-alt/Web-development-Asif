"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Props = { before: string; after: string; beforeLabel: string; afterLabel: string; accent?: string; aspect?: string; frame?: string; labelRight?: string };

/** Drag-to-compare slider. Pointer events cover mouse, touch and pen; the range input keeps it keyboard-usable. */
export function BeforeAfter({ before, after, beforeLabel, afterLabel, accent = "#1a6b3d", aspect = "aspect-[1600/686]", frame = "rounded-3xl border border-white/15", labelRight = "right-4" }: Props) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);

  const fromPointer = (clientX: number) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={box}
      className={`relative ${aspect} w-full touch-pan-y select-none overflow-hidden ${frame}`}
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        fromPointer(e.clientX);
      }}
      onPointerMove={(e) => e.buttons && fromPointer(e.clientX)}
    >
      <Image src={after} alt={afterLabel} fill sizes="(min-width:1024px) 1100px, 100vw" className="object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={beforeLabel} fill sizes="(min-width:1024px) 1100px, 100vw" className="object-cover" />
      </div>

      <span className="absolute left-4 top-4 rounded-md bg-black/80 px-3 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white">
        {beforeLabel}
      </span>
      <span style={{ backgroundColor: accent }}
        className={`absolute ${labelRight} top-4 rounded-md px-3 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white`}>
        {afterLabel}
      </span>

      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white" style={{ left: `${pos}%` }}>
        <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-xs text-black shadow-lg">
          ◀▶
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare before and after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
