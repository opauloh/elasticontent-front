import styled from 'styled-components';
import spacingInline from '../../tokens/spacingInline';

const Nav = styled.div`
  width: ${spacingInline['$spacing-inline-sm']};
  padding: ${spacingInline['$spacing-inline-sm']}
    ${spacingInline['$spacing-inline-quarck']};
  background-color: var(--theme-bg-color-tertiary);
`;

export const Styled = {
  Nav
};
