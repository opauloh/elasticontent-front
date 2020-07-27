import * as React from "react";

function SvgIconSheet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M11.333 3.333H6a1.333 1.333 0 00-1.333 1.334v10.666A1.333 1.333 0 006 16.667h8a1.334 1.334 0 001.333-1.334v-8l-4-4z"
        stroke="currentColor"
        strokeWidth={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.333 3.333v4h4M13.429 11.143H6.57M13.429 13.429H6.57"
        stroke="currentColor"
        strokeWidth={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgIconSheet;
