import styled from 'styled-components';
import spacing from '../../../tokens/spacing';

const Card = styled.div`
    width: 100%;
    padding: ${spacing["$spacing-md"]} ${spacing["$spacing-sm"]};
    display: grid;
    align-items: center;
    grid-template-columns: ${spacing["$spacing-md"]} max-content ${spacing["$spacing-lg"]};
    grid-template-rows: repeat(3, 20px);
    grid-template-areas:
        "top-left top-line top-date top-right"
        "middle-left middle-line middle-line middle-line"
        "bottom-left bottom-line bottom-line bottom-right";
    grid-row-gap: 2px;
    grid-column-gap: 6px;
}
`;

const Avatar = styled.div`

`;

export const Styled = {
  Card
}