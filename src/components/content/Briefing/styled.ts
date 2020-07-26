import styled from 'styled-components';
import fontSizes from '../../../tokens/fontSizes';
import fontWeights from '../../../tokens/fontWeights';
import colors from '../../../tokens/colors';
import borderRadius from '../../../tokens/borderRadius';
import spacingInline from '../../../tokens/spacingInline';
import lineHeights from '../../../tokens/lineHeights';

const Title = styled.h2`
  font-size: ${fontSizes['$font-size-xs']};
  font-weight: ${fontWeights['$font-weight-bold']};
  color: ${colors['$color-gray-40']};
  margin-bottom: ${spacingInline['$spacing-inline-xxs']};
`;
const Item = styled.div`
  margin-bottom: ${spacingInline['$spacing-inline-xxs']};
`;

const ItemTitle = styled.h3`
  font-size: ${fontSizes['$font-size-xxs']};
  font-weight: ${fontWeights['$font-weight-medium']};
  color: ${colors['$color-gray-40']};
  margin-bottom: ${spacingInline['$spacing-inline-xxxs']};
`;

const ItemText = styled.p`
  font-size: ${fontSizes['$font-size-xs']};
  font-weight: ${fontWeights['$font-weight-regular']};
  color: ${colors['$color-gray-70']};
  line-height: ${lineHeights['$line-height-lg']};
`;

const CheckboxWrapper = styled.label`
  ${ItemText};
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  border: 1px solid ${colors['$color-gray-40']};
  border-radius: ${borderRadius['$border-radius-sm']};
  margin-right: ${spacingInline['$spacing-inline-nano']};
`;

export const Styled = {
  Title,
  Item,
  ItemTitle,
  ItemText,
  Checkbox,
  CheckboxWrapper
};
