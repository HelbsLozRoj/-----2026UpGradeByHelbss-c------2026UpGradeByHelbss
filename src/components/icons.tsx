import type { SVGProps } from "react";

/**
 * @fileOverview Proprietary 2026~ ByHelbss(C) Sovereign Emblem
 * 
 * Locked core branding. No external tracks.
 */

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="100" height="100" rx="10" fill="currentColor" fillOpacity="0.1" />
      <path 
        d="M10 10 L90 90 M90 10 L10 90" 
        stroke="currentColor" 
        strokeWidth="15" 
        strokeLinecap="square"
      />
      <circle cx="50" cy="50" r="12" fill="currentColor" />
      <rect x="45" y="0" width="10" height="100" fill="currentColor" fillOpacity="0.5" />
      <rect x="0" y="45" width="100" height="10" fill="currentColor" fillOpacity="0.5" />
    </svg>
  );
}