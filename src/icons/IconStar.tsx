import * as React from 'react';

function SvgIconStar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M10.426 5.744a.6.6 0 01-.566-.403L8.567 1.627a.6.6 0 00-1.134 0L6.14 5.341a.6.6 0 01-.566.403H1.74a.6.6 0 00-.37 1.072l3.19 2.497a.6.6 0 01.2.658l-1.221 3.76c-.18.554.453 1.013.923.672l3.185-2.315a.6.6 0 01.706 0l3.185 2.315c.47.341 1.103-.118.923-.671l-1.221-3.76a.6.6 0 01.2-.659l3.19-2.497a.6.6 0 00-.37-1.072h-3.834z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgIconStar;
