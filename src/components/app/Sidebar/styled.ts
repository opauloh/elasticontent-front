import styled from 'styled-components';
import spacingInline from '../../../tokens/spacingInline';
import spacingStack from '../../../tokens/spacingStack';

const Sidebar = styled.div`
  width: 254px;
  height: 100vh;
  background-color: var(--theme-bg-color);
`;
const AvatarWrapper = styled.div`
  padding-top: ${spacingStack['$spacing-stack-md']};
  padding-left: ${spacingInline['$spacing-inline-nano']};
  padding-right: ${spacingInline['$spacing-inline-nano']};
  padding-bottom: 0;
`;

export const Styled = {
  Sidebar,
  AvatarWrapper
};
