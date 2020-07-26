import styled from 'styled-components';
import spacingInline from '../../../tokens/spacingInline';
import fontSizes from '../../../tokens/fontSizes';
import colors from '../../../tokens/colors';
import fontWeights from '../../../tokens/fontWeights';
import lineHeights from '../../../tokens/lineHeights';

const Card = styled.div`
    padding: ${spacingInline['$spacing-inline-xxxs']};
    display: grid;
    align-items: center;
    grid-template-columns: ${spacingInline['$spacing-inline-nano']} 1fr max-content ${spacingInline['$spacing-inline-xs']};
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
        "top-left top-line top-line top-right "
        "middle-left middle-line middle-line top-favorite"
        "bottom-left bottom-line bottom-line bottom-line";
    grid-row-gap: ${spacingInline['$spacing-inline-nano']};
    grid-column-gap: ${spacingInline['$spacing-inline-xxxs']};
    border-bottom: 1px solid ${colors['$color-gray-10']};
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
const Company = styled.div`
  display: flex;
  -webkit-box-align: start;
  align-items: start;
  min-width: 0px;
  grid-area: top-line / top-line / top-line / top-line;
  font-size: ${fontSizes['$font-size-xxxs']};
  font-weight: ${fontWeights['$font-weight-regular']};
  color: ${colors['$color-gray-70']};
  opacity: 0.75;
  align-self: start;
`;

const DateTime = styled.div`
  grid-area: top-right / top-right / top-right / top-right;
  font-size: ${fontSizes['$font-size-xxxxs']};
  color: ${colors['$color-gray-70']};
  font-weight: ${fontWeights['$font-weight-regular']};
  opacity: 0.75;
`;

const Title = styled.div`
  grid-area: middle-line / middle-line / middle-line / middle-line;
  color: ${colors['$color-black']};
  font-weight: ${fontWeights['$font-weight-semibold']};
  opacity: 0.75;
  line-height: ${lineHeights['$line-height-sm']};
  font-size: ${fontSizes['$font-size-xxs']};
`;

const Status = styled.div`
  grid-area: top-left / top-left / top-left / top-left;
`;

const Favorite = styled.div`
  grid-area: top-favorite / top-favorite / top-favorite / top-favorite;
  color: ${colors['$color-yellow-30']};
  text-align: center;
  opacity: 0.95;
`;

const Description = styled.div`
  grid-area: bottom-line / bottom-line / bottom-line / bottom-line;
  color: ${colors['$color-gray-50']};
  font-size: ${fontSizes['$font-size-xxxs']};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.75;
  mix-blend-mode: normal;
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
