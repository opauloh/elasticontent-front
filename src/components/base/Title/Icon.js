import React from "react";
import styled from 'styled-components';
import spacing from "../../../tokens/spacing";
import fontSizes from "../../../tokens/fontSizes";
import fontWeights from "../../../tokens/fontWeights";
import lineHeights from "../../../tokens/lineHeights";

const Title = styled.h5`
    font-size: ${fontSizes["$font-size-xxxs"]};
    font-weight: ${fontWeights["$font-weight-medium"]};
    line-height: ${lineHeights["$"]};
    color: #9F9F9F;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0 ${spacing["$spacing-xs"]};
    svg {
        margin-right: ${spacing["$spacing-sm"]};
    }
`;

export default function IconTitle({ text, children }) {
    return (<>
        <Title>{children}{text}</Title>
    </>)
}