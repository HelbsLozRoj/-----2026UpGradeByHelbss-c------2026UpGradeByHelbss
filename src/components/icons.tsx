import type { SVGProps } from "react";

/**
 * @fileOverview Proprietary 2026~ ByHelbss(C) Icon Library
 */

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Proprietary Core Emblem - Hybrid.OS 2026 */}
      <rect width="100" height="100" rx="24" fill="currentColor" fillOpacity="0.1" />
      <path d="M25 25L75 75" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
      <path d="M75 25L25 75" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
      <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="6" />
      <path d="M50 5V20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M50 80V95" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M5 50H20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M80 50H95" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
