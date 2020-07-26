import React, { FunctionComponent } from 'react';
import { AvatarImg } from '../AvatarImg';
import { SizeType } from '../../../types/SizeType';
import { Styled } from './styled';

type AvatarProps = {
  src: string;
  size?: SizeType;
  children: string;
};

export const AvatarName: FunctionComponent<AvatarProps> = ({
  src,
  size,
  children
}) => (
  <Styled.Wrapper>
    <AvatarImg src={src} size={size} />
    <Styled.Name>{children}</Styled.Name>
  </Styled.Wrapper>
);

export default AvatarName;
