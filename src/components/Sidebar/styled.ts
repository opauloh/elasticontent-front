import styled from 'styled-components';
import spacing from '../../tokens/spacing';

const Sidebar = styled.div`
    width: 254px;
    height: 100vh;
    background-color: var(--theme-bg-color-tertiary);
`;
const AvatarWrapper = styled.div`
    padding-top: ${spacing["$spacing-sm"]};
    padding-left: ${spacing["$spacing-md"]};
    padding-bottom: ${spacing["$spacing-sm"]};
`;

export const Styled = {
    Sidebar,
    AvatarWrapper
}