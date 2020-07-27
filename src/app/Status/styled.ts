import styled from 'styled-components';
import spacingInline from '../../tokens/spacingInline';
import borderRadius from '../../tokens/borderRadius';
import colors from '../../tokens/colors';

const Status = styled.div`
  width: ${spacingInline['$spacing-inline-nano']};
  height: ${spacingInline['$spacing-inline-nano']};
  border-radius: ${borderRadius['$border-radius-circular']};
  background: ${colors['$color-brand-40']};
`;

export const Styled = {
  Status
};
