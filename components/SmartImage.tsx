"use client";

import { useState } from "react";

type SmartImageProps = {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
};

// Renders the real asset (e.g. /headshot.jpg). If it hasn't been added yet,
// it quietly falls back to a placeholder SVG so the layout still renders.
export default function SmartImage({ src, fallback, alt, className }: SmartImageProps) {
  const [current, setCurrent] = useState(src);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={current}
      alt={alt}
      className={className}
      onError={() => {
        if (current !== fallback) setCurrent(fallback);
      }}
    />
  );
}
