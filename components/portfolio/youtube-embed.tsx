"use client";

import { useState } from "react";
import { Play } from "lucide-react";

type Props = {
  id: string;
  title: string;
  /** Custom poster (e.g. a branded card). Defaults to YouTube's own thumbnail. */
  poster?: React.ReactNode;
  className?: string;
};

/**
 * Click-to-load YouTube player. Nothing from YouTube loads until the visitor
 * presses play, which keeps five videos on one page from hurting page speed.
 */
export function YouTubeEmbed({ id, title, poster, className = "" }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-xl bg-black ${className}`}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 block h-full w-full"
        >
          {poster ?? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          )}
          <span className="absolute left-1/2 top-1/2 grid h-14 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-[#1a6b3d] text-white shadow-lg transition-transform group-hover:scale-110">
            <Play className="h-6 w-6 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}
