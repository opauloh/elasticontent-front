import styled from 'styled-components';
import colors from '../../tokens/colors';

const Cardlist = styled.div`
  width: 304px;
  height: 100vh;
  background-color: var(--theme-bg-color);
  border-right: 1px solid ${colors['$color-gray-10']};
  border-left: 1px solid ${colors['$color-gray-10']};
  min-width: 0px;
  min-height: 0px;
  display: flex;
  -webkit-box-align: stretch;
  flex-direction: column;
`;

export const Styled = {
  Cardlist
};
