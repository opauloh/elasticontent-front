import styled from 'styled-components';
import spacing from '../../../tokens/spacing';

const Nav = styled.div`
    width: ${spacing["$spacing-xl"]};
    padding: ${spacing["$spacing-xl"]} ${spacing["$spacing-xxs"]};
    background-color: var(--theme-bg-color-tertiary);
`;

export const Styled = {
  Nav
}