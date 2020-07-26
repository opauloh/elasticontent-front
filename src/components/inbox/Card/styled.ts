import styled from 'styled-components';
import spacingInline from '../../../tokens/spacingInline';
import fontSizes from '../../../tokens/fontSizes';
import colors from '../../../tokens/colors';
import fontWeights from '../../../tokens/fontWeights';

const Card = styled.div`
    padding: ${spacingInline['$spacing-inline-xxs']} ${spacingInline['$spacing-inline-xxxs']};
    display: grid;
    align-items: center;
    grid-template-columns: ${spacingInline['$spacing-inline-xxs']} 1fr max-content ${spacingInline['$spacing-inline-xs']};
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
        "top-left top-line top-line top-right"
        "middle-left middle-line middle-status middle-right"
        "bottom-left bottom-line bottom-line bottom-line";
    grid-row-gap: ${spacingInline['$spacing-inline-nano']};
    grid-column-gap: ${spacingInline['$spacing-inline-xxxs']};
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
  align-self: start;
`;

const DateTime = styled.div`
  grid-area: top-right / top-right / top-right / top-right;
  font-size: ${fontSizes['$font-size-xxxxs']};
`;

const Title = styled.div`
  grid-area: middle-line / middle-line / middle-line / middle-line;
  color: ${colors['$color-gray-40']};
  font-weight: ${fontWeights['$font-weight-bold']};
`;

const Status = styled.div`
  grid-area: middle-status / middle-status / middle-status / middle-status;
`;

const Favorite = styled.div`
  grid-area: bottom-left / bottom-left / bottom-left / bottom-left;
  color: ${colors['$color-yellow-20']};
  text-align: center;
`;

const Description = styled.div`
  grid-area: bottom-line / bottom-line / bottom-line / bottom-line;
  color: ${colors['$color-gray-40']};
  font-size: ${fontSizes['$font-size-xxs']};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
