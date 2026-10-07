import type { IconType } from "react-icons";
import {
  SiWordpress,
  SiShopify,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiLaravel,
  SiWoocommerce,
  SiElementor,
  SiPhp,
  SiExpress,
} from "react-icons/si";
import "./tech-marquee.css";

type Tech = { name: string; icon: IconType; color: string };

/* Split across two rows that scroll opposite ways, so the section reads as a
   band of motion rather than one long queue. Colours are each brand's own. */
const ROW_ONE: Tech[] = [
  { name: "WordPress", icon: SiWordpress, color: "#21759B" },
  { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
];

const ROW_TWO: Tech[] = [
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "WooCommerce", icon: SiWoocommerce, color: "#96588A" },
  { name: "Elementor", icon: SiElementor, color: "#92003B" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
];

function Row({
  items,
  reverse,
  duration,
}: {
  items: Tech[];
  reverse?: boolean;
  duration: string;
}) {
  // The list is rendered twice; the keyframe shifts exactly one copy, so the
  // hand-off is invisible and the loop never shows a gap.
  const doubled = [...items, ...items];

  return (
    <div className="tm-row">
      <div
        className={`tm-track${reverse ? " tm-track--reverse" : ""}`}
        style={{ "--tm-duration": duration } as React.CSSProperties}
      >
        {doubled.map((t, i) => {
          const Icon = t.icon;
          return (
            <div className="tm-item" key={`${t.name}-${i}`} aria-hidden={i >= items.length}>
              <Icon className="tm-ico" style={{ color: t.color }} />
              <span>{t.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="tm-sec" aria-label="Technologies I work with">
      <div className="tm-head">
        <p className="tm-eyebrow">Technologies I work with</p>
        <h2 className="tm-title">The stack behind every build</h2>
      </div>

      <div className="tm-viewport">
        <Row items={ROW_ONE} duration="42s" />
        <Row items={ROW_TWO} duration="52s" reverse />
      </div>
    </section>
  );
}
