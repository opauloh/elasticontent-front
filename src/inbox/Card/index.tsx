import React from 'react';
import { Styled } from './styled';
import { CardType } from '../../types/CardType';
import { IconStar } from '../../icons';
import Status from '../../app/Status';
import momentHelper from '../../helpers/momentHelper';

type CardProps = {
  card: CardType;
  toggleStarred: (
    event: React.MouseEvent<HTMLDivElement>,
    card: CardType
  ) => void;
  setActive: (event: React.MouseEvent<HTMLDivElement>, card: CardType) => void;
};

const Card: React.FC<CardProps> = ({ card, toggleStarred, setActive }) => {
  return (
    <Styled.Card
      active={card.active}
      new={card.new}
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        setActive(e, card)
      }
      status={card.status}>
      {card.new && (
        <Styled.Status>
          <Status />
        </Styled.Status>
      )}
      <Styled.Company active={card.active}>{card.company.name}</Styled.Company>
      <Styled.DateTime active={card.active}>
        {momentHelper(card.datetime).time}
      </Styled.DateTime>
      <Styled.Title active={card.active}>{card.title}</Styled.Title>
      {card.starred && (
        <Styled.Favorite
          starred={card.starred}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.stopPropagation();
            toggleStarred(e, card);
          }}>
          <IconStar />
        </Styled.Favorite>
      )}
      <Styled.Description active={card.active}>
        {card.description}
      </Styled.Description>
    </Styled.Card>
  );
};

export default Card;
