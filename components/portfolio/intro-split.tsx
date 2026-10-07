import Image from "next/image";

type Props = {
  eyebrow?: string;
  heading: string;
  /** A string is split on blank lines; an array is used as-is. */
  body: string | string[];
  image: string;
  /** Puts the image on the left. Alternate it down a page so the rhythm varies. */
  reverse?: boolean;
  bg?: string;
  /** Anything extra under the copy — a button, a note, a stat row. */
  children?: React.ReactNode;
};

/**
 * Intro band: copy on one side, a bordered image on the other, each taking half
 * the row. Replaces the centred text-only block that left long paragraphs
 * stranded across the full width with nothing to anchor them.
 */
export function IntroSplit({
  eyebrow,
  heading,
  body,
  image,
  reverse = false,
  bg = "",
  children,
}: Props) {
  const paragraphs = Array.isArray(body) ? body : body.split("\n\n");

  return (
    <section className={`px-6 py-20 text-foreground lg:px-10 lg:py-24 ${bg}`}>
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className={reverse ? "lg:order-2" : undefined}>
          {eyebrow && (
            <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1a6b3d] dark:text-[#86e0a3]">
              <span className="h-2 w-2 rounded-full bg-[#1a6b3d] dark:bg-[#86e0a3]" />
              {eyebrow}
            </p>
          )}
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {heading}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {children}
        </div>

        <div
          className={`rounded-3xl border border-[#1a6b3d]/35 bg-card p-2 ${
            reverse ? "lg:order-1" : ""
          }`}
        >
          <Image
            src={image}
            alt=""
            width={1536}
            height={1024}
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
