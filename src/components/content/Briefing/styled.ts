import styled from 'styled-components';
import fontSizes from '../../../tokens/fontSizes';
import fontWeights from '../../../tokens/fontWeights';
import colors from '../../../tokens/colors';
import radii from '../../../tokens/radii';
import spacing from '../../../tokens/spacing';
import lineHeights from '../../../tokens/lineHeights';

const Title = styled.h2`
  font-size: ${fontSizes["$font-size-xs"]};
  font-weight: ${fontWeights["$font-weight-bold"]};
  color: ${colors["$gray-80"]};
  margin-bottom: ${spacing["$spacing-md"]};
`;
const Item = styled.div`
  margin-bottom: ${spacing["$spacing-md"]};
`;

const ItemTitle = styled.h3`
  font-size: ${fontSizes["$font-size-xxs"]};
  font-weight: ${fontWeights["$font-weight-medium"]};
  color: ${colors["$gray-60"]};
  margin-bottom: ${spacing["$spacing-sm"]};
`;

const ItemText = styled.p`
  font-size: ${fontSizes["$font-size-xs"]};
  font-weight: ${fontWeights["$font-weight-regular"]};
  color: ${colors["$gray-90"]};
  line-height: ${lineHeights["$line-height-lg"]};
`;

const CheckboxWrapper = styled.label`
  ${ItemText};
  display: flex;
  align-items: center;
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  border: 1px solid ${colors["$gray-40"]};
  border-radius: ${radii["$border-radius-xxxs"]};
  margin-right: ${spacing["$spacing-xs"]};
`;

export const Styled = {
  Title,
  Item,
  ItemTitle,
  ItemText,
  Checkbox,
  CheckboxWrapper
}