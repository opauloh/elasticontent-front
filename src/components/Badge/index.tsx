import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Color } from '../../helpers/dictionary';

export const Wrapper = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 0.625rem;
    line-height: 0.937rem;
    border-radius: 2px;
    padding: 1px 4px;
    color: var(--text-color-2);
    background-color: ${props => (Color(props.color))};
`;

type BadgeProps = {
    color: string
}

export const Badge: FunctionComponent<BadgeProps> = ({ color, children }) => <Wrapper color={color}>
    {children}
</Wrapper>;

export default Badge;
