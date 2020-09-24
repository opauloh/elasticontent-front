import * as React from 'react';

function SvgIconArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 9 14" fill="none" {...props}>
      <path
        d="M2 12l5-5-5-5"
        stroke="currentColor"
        strokeWidth={1.667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgIconArrowRight;
