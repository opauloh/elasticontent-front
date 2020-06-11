import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Color } from '../../../helpers/dictionary';
import { ColorType } from '../../../types/ColorType';
import { SizeType } from '../../../types/SizeType';
import fontSizes from '../../../tokens/fontSizes';
import radii from '../../../tokens/radii';
import spacing from '../../../tokens/spacing';
import lineHeights from '../../../tokens/lineHeights';
import fontWeights from '../../../tokens/fontWeights';

export const Wrapper = styled.span<{ size: string }>`
    font-weight: ${fontWeights["$font-weight-medium"]};
    font-size: ${fontSizes["$font-size-xxxs"]};
    line-height: ${lineHeights["$line-height-sm"]};
    border-radius: ${radii["$border-radius-xs"]};
    padding-left: ${spacing["$spacing-xs"]};
    padding-right: ${spacing["$spacing-xs"]};
    color: var(--theme-text-secondary);
    background-color: ${props => (Color(props.color))};
`;

type BadgeProps = {
    color: ColorType
    size?: SizeType
}

export const Badge: FunctionComponent<BadgeProps> = ({ color, size = 'sm', children }) => <Wrapper size={size} color={color}>
    {children}
</Wrapper>;

export default Badge;
