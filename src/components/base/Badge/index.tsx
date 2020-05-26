import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Color } from '../../../helpers/dictionary';
import { ColorType } from '../../../types/ColorType';
import { SizeType } from '../../../types/SizeType';


export const Wrapper = styled.span<{ size: string }>`
    font-style: normal;
    font-weight: 600;
    font-size: ${props => props.size === 'sm' ? '0.625rem' : '0.75rem'};
    line-height: ${props => props.size === 'sm' ? '0.8125rem' : '1.25rem'};
    border-radius: 0.125rem;
    padding: 0.062rem 0.25rem;
    color: var(--text-color-2);
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
