import styled from 'styled-components';
import spacingInline from '../../../tokens/spacingInline';

const Sidebar = styled.div`
  width: 254px;
  height: 100vh;
  background-color: var(--theme-bg-color-tertiary);
`;
const AvatarWrapper = styled.div`
  padding-top: ${spacingInline['$spacing-inline-xxxs']};
  padding-left: ${spacingInline['$spacing-inline-xxs']};
  padding-bottom: ${spacingInline['$spacing-inline-xxxs']};
`;

export const Styled = {
  Sidebar,
  AvatarWrapper
};
