import { createGlobalStyle } from 'styled-components';
import colors from './tokens/colors';
import fontSizes from './tokens/fontSizes';
import fontFamilies from './tokens/fontFamilies';

export const GlobalStyle = createGlobalStyle`
:root {
  --theme-text: ${colors["$color-grey-600"]};
  --theme-text-secondary: ${colors["$color-grey-800"]};
  --theme-color-purple: ${colors["$color-purple-100"]};
  --theme-color-yellow: ${colors["$color-yellow-100"]};
  --theme-color-blue: ${colors["$color-blue-100"]};
  --theme-color-green: ${colors["$color-green-100"]};
  --theme-color-red: ${colors["$color-red-400"]};
  --theme-bg-color: ${colors["$color-bg-000"]};
  --theme-bg-color-secondary: ${colors["$color-grey-200"]};
  --theme-bg-color-red: ${colors["$color-bg-400"]};
  --theme-bg-color-tooltip: ${colors["$color-bg-300"]};
}
[data-theme="dark"] {
  --theme-text: ${colors["$color-grey-100"]};
  --theme-text-secondary: ${colors["$color-grey-100"]};
  --theme-color-purple: ${colors["$color-purple-200"]};
  --theme-color-yellow: ${colors["$color-yellow-200"]};
  --theme-color-blue: ${colors["$color-blue-200"]};
  --theme-color-green: ${colors["$color-green-200"]};
  --theme-color-red: ${colors["$color-red-300"]};
  --theme-bg-color: ${colors["$color-bg-100"]};
  --theme-bg-color-secondary: ${colors["$color-bg-000"]};
  --theme-bg-color-red: ${colors["$color-bg-200"]};
  --theme-bg-color-tooltip: ${colors["$color-bg-300"]};
}


body {
  font-size: ${fontSizes["$font-size-xxxs"]};
  margin: 0;
  font-family: ${fontFamilies["$font-family"]};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--theme-bg-color);
  color: var(--theme-text);
}
`;