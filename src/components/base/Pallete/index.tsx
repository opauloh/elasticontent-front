import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Color } from '../../../helpers/dictionary';

export const Wrapper = styled.div`
    width: 5rem;
    height: 5rem;
    background-color: ${props => (Color(props.color))};
`;

type BadgeProps = {
    color: string
}

export const Pallete: FunctionComponent<BadgeProps> = ({ color }) => <Wrapper color={color} />;

export default Pallete;
