import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { SizeType } from '../../types/SizeType';


export const AvatarImg = styled.img<{ size: string, src: string }>`
    font-style: normal;
    font-weight: 600;
    width: ${props => props.size === 'sm' ? '22px' : '28px'};
    height: ${props => props.size === 'sm' ? '22px' : '28px'};
    border: 1.5px solid var(--bg-color);
`;


type AvatarProps = {
    src: string
    size?: SizeType
}

export const Avatar: FunctionComponent<AvatarProps> = ({ src, size = 'sm' }) => <AvatarImg src={src} size={size} />;

export default Avatar;
