import React from 'react';
import Briefing from '../Briefing';
// import Sidebar from '../../app/Sidebar';
// import Cardlist from '../Cardlist';
import { Styled } from './styled';

const Content: React.FC = () => {
  return (
    <Styled.Container>
      <Briefing />
    </Styled.Container>
    // <Styled.Content>
    // </Styled.Content>
  )
}

export default Content;