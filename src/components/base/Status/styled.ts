import styled from 'styled-components';
import spacing from '../../../tokens/spacing';
import radii from '../../../tokens/radii';
import colors from '../../../tokens/colors';

const Status = styled.div`
  width: ${spacing["$spacing-xs"]};
  height: ${spacing["$spacing-xs"]};
  border-radius: ${radii["$border-radius-full"]};
  background: ${colors["$purple-40"]};
`;

export const Styled = {
  Status
}