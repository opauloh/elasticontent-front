import * as React from "react";

function SvgIconMaximize(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M10 2h4v4M6 14H2v-4M14 2l-4 4M2 14l4-4"
        stroke="currentColor"
        strokeWidth={1.167}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgIconMaximize;
