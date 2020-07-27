import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Color } from '../../helpers/dictionary';
import { ColorType } from '../../types/ColorType';
import { SizeType } from '../../types/SizeType';
import fontSizes from '../../tokens/fontSizes';
import borderRadius from '../../tokens/borderRadius';
import spacingInline from '../../tokens/spacingInline';
import lineHeights from '../../tokens/lineHeights';
import fontWeights from '../../tokens/fontWeights';

export const Wrapper = styled.span<{ size: string }>`
  font-weight: ${fontWeights['$font-weight-medium']};
  font-size: ${fontSizes['$font-size-xxxs']};
  line-height: ${lineHeights['$line-height-sm']};
  border-radius: ${borderRadius['$border-radius-sm']};
  padding-left: ${spacingInline['$spacing-inline-nano']};
  padding-right: ${spacingInline['$spacing-inline-nano']};
  color: var(--theme-text-secondary);
  background-color: ${(props) => Color(props.color)};
`;

type BadgeProps = {
  color: ColorType;
  size?: SizeType;
};

export const Badge: FunctionComponent<BadgeProps> = ({
  color,
  size = 'sm',
  children
}) => (
  <Wrapper size={size} color={color}>
    {children}
  </Wrapper>
);

export default Badge;
