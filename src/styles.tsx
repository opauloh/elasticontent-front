import { createGlobalStyle } from 'styled-components';
import colors from './tokens/colors';
import fontSizes from './tokens/fontSizes';
import fontFamilies from './tokens/fontFamilies';

export const GlobalStyle = createGlobalStyle`
:root {
  --theme-text: ${colors['$color-gray-40']};
  --theme-text-secondary: ${colors['$color-gray-40']};
  --theme-text-tertiary: ${colors['$color-gray-40']};
  --theme-color-purple: ${colors['$color-brand-10']};
  --theme-color-yellow: ${colors['$color-yellow-10']};
  --theme-color-blue: ${colors['$color-blue-10']};
  --theme-color-green: ${colors['$color-green-10']};
  --theme-color-red: ${colors['$color-red-40']};
  --theme-color-gray: ${colors['$color-gray-10']};
  --theme-bg-color: ${colors['$color-white']};
  --theme-bg-color-secondary: ${colors['$color-gray-10']};
  --theme-bg-color-tertiary: ${colors['$color-gray-30']};
  --theme-bg-color-red: ${colors['$color-red-40']};
  --theme-bg-color-tooltip: ${colors['$color-gray-40']};
}
[data-theme="dark"] {
  --theme-text: ${colors['$color-gray-10']};
  --theme-text-secondary: ${colors['$color-gray-10']};
  --theme-text-tertiary: ${colors['$color-gray-10']};
  --theme-color-purple: ${colors['$color-brand-20']};
  --theme-color-yellow: ${colors['$color-yellow-20']};
  --theme-color-blue: ${colors['$color-blue-20']};
  --theme-color-green: ${colors['$color-green-20']};
  --theme-color-red: ${colors['$color-red-30']};
  --theme-color-gray: ${colors['$color-gray-70']};
  --theme-bg-color: ${colors['$color-gray-40']};
  --theme-bg-color-secondary: ${colors['$color-black']};
  --theme-bg-color-tertiary: ${colors['$color-gray-40']};
  --theme-bg-color-red: ${colors['$color-red-60']};
  --theme-bg-color-tooltip: ${colors['$color-gray-40']};
}


/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
  font-size: ${fontSizes['$font-size-xxs']};
  margin: 0;
  font-family: ${fontFamilies['$font-family']};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--theme-bg-color);
  color: var(--theme-text);
}
`;
