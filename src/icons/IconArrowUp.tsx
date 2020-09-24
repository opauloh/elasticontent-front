import * as React from 'react';

function SvgIconArrowUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 19 19" fill="none" {...props}>
      <g clipPath="url(#iconArrowUp_svg__clip0)">
        <path
          d="M15.125 12.313L9.5 6.686l-5.625 5.625"
          stroke="currentColor"
          strokeWidth={1.875}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="iconArrowUp_svg__clip0">
          <path
            fill="#fff"
            transform="rotate(-180 8.5 8.5)"
            d="M0 0h15v15H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgIconArrowUp;
