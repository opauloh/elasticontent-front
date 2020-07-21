import styled from 'styled-components';
import spacing from '../../../tokens/spacing';
import fontSizes from '../../../tokens/fontSizes';
import colors from '../../../tokens/colors';
import fontWeights from '../../../tokens/fontWeights';

const Card = styled.div`
    padding: ${spacing["$spacing-md"]} ${spacing["$spacing-sm"]};
    display: grid;
    align-items: center;
    grid-template-columns: ${spacing["$spacing-md"]} 1fr max-content ${spacing["$spacing-lg"]};
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
        "top-left top-line top-line top-right"
        "middle-left middle-line middle-status middle-right"
        "bottom-left bottom-line bottom-line bottom-line";
    grid-row-gap: ${spacing["$spacing-xs"]};
    grid-column-gap: ${spacing["$spacing-sm"]};
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
  font-size: ${fontSizes["$font-size-xxxs"]};
  align-self: start;
`;

const DateTime = styled.div`
  grid-area: top-right / top-right / top-right / top-right;
  font-size: ${fontSizes["$font-size-xxxxs"]};
`;

const Title = styled.div`
  grid-area: middle-line / middle-line / middle-line / middle-line;
  color: ${colors["$gray-80"]};
  font-weight: ${fontWeights["$font-weight-bold"]};
`;

const Status = styled.div`
  grid-area: middle-status / middle-status / middle-status / middle-status;
`;

const Favorite = styled.div`
  grid-area: bottom-left / bottom-left / bottom-left / bottom-left;
  color: ${colors["$yellow-20"]};
  text-align: center;
`;

const Description = styled.div`
  grid-area: bottom-line / bottom-line / bottom-line / bottom-line;
  color: ${colors["$gray-60"]};
  font-size: ${fontSizes["$font-size-xxs"]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Styled = {
  Card,
  Avatar,
  Company,
  Description,
  DateTime,
  Title,
  Status,
  Favorite
}