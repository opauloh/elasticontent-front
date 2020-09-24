import * as React from 'react';

function SvgIconAvatar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 15A7 7 0 118 1a7 7 0 010 14zm4.709-3.739a5.727 5.727 0 10-9.418 0c.715-.944 2.392-1.35 4.695-1.352-1.418-.007-2.531-1.008-2.531-3.182C5.455 5.3 6.459 4.182 8 4.182c1.536 0 2.546 1.223 2.546 2.673 0 2.08-1.127 3.047-2.532 3.054 2.303.002 3.98.408 4.695 1.352zm-.913 1.028c-.186-.67-1.524-1.107-3.796-1.107-2.271 0-3.61.437-3.796 1.107A5.705 5.705 0 008 13.727a5.705 5.705 0 003.796-1.438zM6.727 6.727c0 1.444.52 1.91 1.273 1.91.75 0 1.273-.447 1.273-1.782 0-.796-.5-1.4-1.273-1.4-.806 0-1.273.519-1.273 1.272z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgIconAvatar;
