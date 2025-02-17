import styled from 'styled-components';
import spacingInline from '../../tokens/spacingInline';
import fontSizes from '../../tokens/fontSizes';
import colors from '../../tokens/colors';
import fontWeights from '../../tokens/fontWeights';
import lineHeights from '../../tokens/lineHeights';

const Card = styled.div<{ active: boolean; new: boolean; status: string }>`
    padding: ${spacingInline['$spacing-inline-xxxs']};
    display: grid;
    align-items: center;
    grid-template-columns: ${
      spacingInline['$spacing-inline-nano']
    } 1fr max-content ${spacingInline['$spacing-inline-xs']};
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
        "top-left top-line top-line top-right "
        "middle-left middle-line middle-line top-favorite"
        "bottom-left bottom-line bottom-line bottom-line";
    grid-row-gap: 0.3rem;
    grid-column-gap: ${spacingInline['$spacing-inline-xxxs']};
    border-bottom: 1px solid ${colors['$color-gray-10']};
    ${(props) =>
      props.new
        ? `background: ${colors['$color-brand-10'].replace(', 1)', ', 0.3)')}`
        : ''};
    ${(props) =>
      props.active ? `background: ${colors['$color-brand-50']}` : ''};
    cursor: pointer;
    cursor: pointer;
    transition: all 0.2s ease;
}
`;

const Avatar = styled.div`
  grid-column: top-left;
  grid-row: top-left / middle-left;
  vertical-align: top;
  float: left;
  align-self: self-start;
}
`;
const Company = styled.div<{ active: boolean }>`
  display: flex;
  -webkit-box-align: start;
  align-items: start;
  min-width: 0px;
  grid-area: top-line / top-line / top-line / top-line;
  font-size: ${fontSizes['$font-size-xxxs']};
  font-weight: ${fontWeights['$font-weight-regular']};
  color: ${(props) =>
    props.active ? colors['$color-white'] : colors['$color-gray-70']};
  opacity: ${(props) => (props.active ? 0.95 : 0.75)};
  align-self: start;
`;

const DateTime = styled.div<{ active: boolean }>`
  grid-area: top-right / top-right / top-right / top-right;
  font-size: ${fontSizes['$font-size-xxxxs']};
  color: ${(props) =>
    props.active ? colors['$color-white'] : colors['$color-gray-70']};
  opacity: ${(props) => (props.active ? 0.95 : 0.75)};
  font-weight: ${fontWeights['$font-weight-regular']};
`;

const Title = styled.div<{ active: boolean }>`
  grid-area: middle-line / middle-line / middle-line / middle-line;
  color: ${colors['$color-black']};
  font-weight: ${fontWeights['$font-weight-semibold']};
  color: ${(props) =>
    props.active ? colors['$color-white'] : colors['$color-black']};
  opacity: ${(props) => (props.active ? 1 : 0.75)};
  line-height: ${lineHeights['$line-height-sm']};
  font-size: ${fontSizes['$font-size-xxs']};
`;

const Status = styled.div`
  grid-area: middle-left / middle-left / middle-left / middle-left;
`;

const Favorite = styled.div<{ starred: boolean }>`
  grid-area: top-favorite / top-favorite / top-favorite / top-favorite;
  color: ${(props) =>
    props.starred ? colors['$color-yellow-30'] : colors['$color-gray-20']};
  text-align: center;
  opacity: ${(props) => (props.starred ? 0.95 : 0)};
  transition: all 0.4s ease;
  ${Card}:hover & {
    opacity: 0.95;
  }
`;

const Description = styled.div<{ active: boolean }>`
  grid-area: bottom-line / bottom-line / bottom-line / bottom-line;
  font-size: ${fontSizes['$font-size-xxxs']};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) =>
    props.active ? colors['$color-white'] : colors['$color-gray-50']};
  opacity: ${(props) => (props.active ? 0.9 : 0.75)};
  mix-blend-mode: normal;
  line-height: ${lineHeights['$line-height-sm']};
`;

export const Styled = {
  Card,
  Avatar,
  Company,
  Description,
  DateTime,
  Title,
  Status,
  Favorite
};
