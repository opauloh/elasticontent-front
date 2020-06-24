import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import fontWeights from '../../../../tokens/fontWeights';
import fontSizes from '../../../../tokens/fontSizes';
import { AvatarImg } from '../AvatarImg';
import spacing from '../../../../tokens/spacing';
import { SizeType } from '../../../../types/SizeType';

const Name = styled.span`
    font-weight: ${fontWeights["$font-weight-medium"]};
    font-size: ${fontSizes["$font-size-xxs"]};
    color: var(--theme-text-secondary);
    margin-left: ${spacing["$spacing-sm"]};
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;


type AvatarProps = {
    src: string,
    size?: SizeType,
    children: string
}

export const AvatarName: FunctionComponent<AvatarProps> = ({ src, size, children }) => (
    <Wrapper>
        <AvatarImg src={src} size={size} />
        <Name>{children}</Name>
    </Wrapper>
);

export default AvatarName;
