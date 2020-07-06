import styled from 'styled-components';
import spacing from '../../../tokens/spacing';
import colors from '../../../tokens/colors';
import fontWeights from '../../../tokens/fontWeights';
import fontSizes from '../../../tokens/fontSizes';
import lineHeights from '../../../tokens/lineHeights';

const Dropdown = styled.div`
    margin-top: ${spacing["$spacing-lg"]};
`;

const Item = styled.div`
    display: flex;
    height: ${spacing["$spacing-lg"]};
    font-size: ${fontSizes["$font-size-xxs"]};
    color: ${colors["$gray-80"]};
    align-items: center;
    padding: 0 ${spacing["$spacing-sm"]};
    line-height: ${lineHeights["$line-height-xs"]};
    cursor: pointer;
    user-select: none;
    &:hover {
        background-color: ${colors["$gray-20"]};
    }
    &.active {
        font-weight: ${fontWeights["$font-weight-medium"]};
        background-color: ${colors["$gray-20"]};
    }
    > svg {
        margin-right: ${spacing["$spacing-xs"]};
        height: 1.4em;
        width: 1.4em;
        color: ${colors["$gray-50"]}
    }
    > img {
        margin-right: ${spacing["$spacing-xs"]};
    }
`;

const List = styled.ul`
    padding-left: 0;
`;
const ListItem = styled.li`
    font-size: ${fontSizes["$font-size-xxs"]};
    list-style: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${colors["$gray-80"]};
    ${(props) => props.color ? `color: ${props.color};` : ''}
    padding-left: ${spacing["$spacing-lg"]};
    height: ${spacing["$spacing-lg"]};
    margin-top: ${spacing["$spacing-xxs"]};
    &.active {
        font-weight: ${fontWeights["$font-weight-medium"]};
        background-color: ${colors["$gray-20"]};
    }
    > svg {
        height: 1.2em;
        width: 1.2em;
        margin-right: ${spacing["$spacing-xs"]};
        margin-left: ${spacing["$spacing-sm"]};
    }
`;

const BadgeWrapper = styled.span`
    margin-left: ${spacing["$spacing-xs"]};
`;

export const Styled = {
    Dropdown,
    Item,
    List,
    ListItem,
    BadgeWrapper
}