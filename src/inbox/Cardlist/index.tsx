import React from 'react';
import { Styled } from './styled';
import Card from '../Card';
import { CardType } from '../../types/CardType';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleToggleStarredInboxCard,
  handleSetActiveInboxCard
} from '../inboxActions';

const Cardlist: React.FC = () => {
  const dispatch = useDispatch();
  const inbox = useSelector<{ inbox: CardType[] }, CardType[]>(
    (state) => state.inbox
  );

  const setActive = (event: React.MouseEvent<HTMLDivElement>, card: CardType) =>
    dispatch(handleSetActiveInboxCard(card));

  const toggleStarred = (
    event: React.MouseEvent<HTMLDivElement>,
    card: CardType
  ) => dispatch(handleToggleStarredInboxCard(card));

  return (
    <Styled.Cardlist>
      {inbox.map((card: CardType) => (
        <Card
          key={card.id}
          card={card}
          toggleStarred={toggleStarred}
          setActive={setActive}
        />
      ))}
    </Styled.Cardlist>
  );
};

export default Cardlist;
