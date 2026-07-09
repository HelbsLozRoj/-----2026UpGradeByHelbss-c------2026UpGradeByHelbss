import type { SVGProps } from "react";

/**
 * @fileOverview Proprietary 2026~ ByHelbss(C) Icon Library
 * 
 * Purged of all Next/React/Google generic emblems.
 * Original ByHelbss(C) 2026 Core Branding.
 */

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Sovereign Shield Base - Hybrid.OS 2026 */}
      <rect width="100" height="100" rx="28" fill="currentColor" fillOpacity="0.15" />
      
      {/* Proprietary Helbss Vector Path */}
      <path 
        d="M20 20 L80 80 M80 20 L20 80" 
        stroke="currentColor" 
        strokeWidth="12" 
        strokeLinecap="square" 
        strokeOpacity="0.9"
      />
      
      {/* Central Lockdown Node */}
      <circle cx="50" cy="50" r="15" fill="currentColor" />
      <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="4" />
      
      {/* Anti-Injection Pins */}
      <path d="M50 0 V15" stroke="currentColor" strokeWidth="8" strokeLinecap="square" />
      <path d="M50 85 V100" stroke="currentColor" strokeWidth="8" strokeLinecap="square" />
      <path d="M0 50 H15" stroke="currentColor" strokeWidth="8" strokeLinecap="square" />
      <path d="M85 50 H100" stroke="currentColor" strokeWidth="8" strokeLinecap="square" />
    </svg>
  );
}
