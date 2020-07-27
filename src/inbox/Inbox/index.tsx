import React, { useEffect } from 'react';
import Sidebar from '../../app/Sidebar';
import Cardlist from '../Cardlist';
import { Styled } from './styled';
import Content from '../../content/Content';
import Nav from '../../app/Nav';
import { useDispatch } from 'react-redux';
import { handleInitialData } from '../../app/actions';

const Inbox: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Styled.Inbox>
      <Sidebar />
      <Cardlist />
      <Content />
      <Nav />
    </Styled.Inbox>
  );
};

export default Inbox;
