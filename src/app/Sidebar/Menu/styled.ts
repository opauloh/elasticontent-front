import styled from 'styled-components';
import spacingInline from '../../../tokens/spacingInline';
import colors from '../../../tokens/colors';
import fontWeights from '../../../tokens/fontWeights';
import fontSizes from '../../../tokens/fontSizes';
import lineHeights from '../../../tokens/lineHeights';
import spacingStack from '../../../tokens/spacingStack';
import borderRadius from '../../../tokens/borderRadius';
import { withOpacity } from '../../../helpers/cssHelper';

const Dropdown = styled.div`
  margin-top: ${spacingStack['$spacing-stack-xxs']};
`;
const Menu = styled.div`
  margin: 0 ${spacingStack['$spacing-stack-xxs']};
`;

const Item = styled.div`
  display: flex;
  height: ${spacingStack['$spacing-stack-xxs']};
  font-size: ${fontSizes['$font-size-xxs']};
  color: ${colors['$color-gray-70']};
  opacity: 0.95;
  align-items: center;
  padding: 0 ${spacingInline['$spacing-inline-xxxs']};
  line-height: ${lineHeights['$line-height-sm']};
  cursor: pointer;
  user-select: none;
  border-radius: ${borderRadius['$border-radius-sm']};
  &:hover {
    background-color: ${withOpacity(colors['$color-gray-10'], 0.75)};
  }
  &.active {
    font-weight: ${fontWeights['$font-weight-medium']};
    background-color: ${withOpacity(colors['$color-gray-10'], 0.75)};
  }
  > svg {
    margin-right: ${spacingInline['$spacing-inline-nano']};
    height: 1.4em;
    width: 1.4em;
    color: ${colors['$color-gray-30']};
  }
  > img {
    margin-right: ${spacingInline['$spacing-inline-nano']};
  }
`;

const List = styled.ul`
  padding-left: 0;
`;
const ListItem = styled.li`
    font-size: ${fontSizes['$font-size-xxs']};
    list-style: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${colors['$color-gray-40']};
    ${(props) => (props.color ? `color: ${props.color};` : '')}
    padding-left: ${spacingInline['$spacing-inline-xs']};
    height: ${spacingInline['$spacing-inline-xs']};
    margin-top: ${spacingInline['$spacing-inline-quarck']};
    &.active {
        font-weight: ${fontWeights['$font-weight-medium']};
    }
    > svg {
        color: ${colors['$color-gray-20']};
        opacity: 0.95;
        height: 1.2em;
        width: 1.2em;
        margin-right: ${spacingInline['$spacing-inline-nano']};
        margin-left: ${spacingInline['$spacing-inline-xxxs']};
    }
`;

const BadgeWrapper = styled.span`
  margin-left: ${spacingInline['$spacing-inline-nano']};
`;

export const Styled = {
  Menu,
  Dropdown,
  Item,
  List,
  ListItem,
  BadgeWrapper
};
