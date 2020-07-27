import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { SizeType } from '../../../types/SizeType';
import borderRadius from '../../../tokens/borderRadius';
import { getSize } from '../../../helpers/sizeHelper';

const Img = styled.img<{ size: SizeType; src: string }>`
  width: ${(props) => getSize(props.size)};
  height: ${(props) => getSize(props.size)};
  border: 1.5px solid var(--bg-color);
  border-radius: ${borderRadius['$border-radius-circular']};
  padding: 2px;
`;

type AvatarProps = {
  src: string;
  size?: SizeType;
};

export const AvatarImg: FunctionComponent<AvatarProps> = ({
  src,
  size = 'md'
}) => <Img src={src} size={size} />;

export default AvatarImg;
