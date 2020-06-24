import * as React from "react";

function SvgIconFilter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M15 1H1l5.6 7.358v5.086L9.4 15V8.358L15 1z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgIconFilter;
