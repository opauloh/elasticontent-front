import styled from 'styled-components';
import fontWeights from '../../../tokens/fontWeights';
import fontSizes from '../../../tokens/fontSizes';
import spacingInline from '../../../tokens/spacingInline';
import colors from '../../../tokens/colors';

const Name = styled.span`
  font-weight: ${fontWeights['$font-weight-semibold']};
  font-size: ${fontSizes['$font-size-xxs']};
  color: ${colors['$color-black']};
  margin-left: ${spacingInline['$spacing-inline-xxxs']};
  opacity: 0.75;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Styled = {
  Name,
  Wrapper
};
