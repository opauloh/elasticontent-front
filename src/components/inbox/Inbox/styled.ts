import styled from 'styled-components';

const Inbox = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto auto auto auto minmax(540px, max) auto;
  grid-template-rows: 100%;
  min-height: 250px;
  height: 100%;
`;

export const Styled = {
  Inbox
}