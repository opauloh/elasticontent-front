import * as React from "react";

function SvgIconCalendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M11.778 3.1H3.222C2.547 3.1 2 3.592 2 4.2v7.7c0 .607.547 1.1 1.222 1.1h8.556c.675 0 1.222-.492 1.222-1.1V4.2c0-.608-.547-1.1-1.222-1.1zM9.944 2v2.2M5.056 2v2.2M2 6.4h11"
        stroke="#25282B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgIconCalendar;
