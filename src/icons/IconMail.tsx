import * as React from 'react';

function SvgIconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M4 4h8c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1z"
        stroke="#25282B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 5L8 8.5 3 5"
        stroke="#25282B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgIconMail;
