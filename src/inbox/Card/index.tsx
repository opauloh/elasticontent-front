import React from 'react';
import { Styled } from './styled';
import { CardType } from '../../types/CardType';
import { IconStar } from '../../icons';
import Status from '../../app/Status';

type CardProps = {
  card: CardType;
};

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <Styled.Card active={card.active} new={card.new} status={card.status}>
      <Styled.Status>
        <Status />
      </Styled.Status>
      <Styled.Company active={card.active}>{card.company}</Styled.Company>
      <Styled.DateTime active={card.active}>19h40</Styled.DateTime>
      <Styled.Title active={card.active}>Mês de julho/Folclore</Styled.Title>
      <Styled.Favorite>
        <IconStar />
      </Styled.Favorite>
      <Styled.Description active={card.active}>
        {card.description}
      </Styled.Description>
    </Styled.Card>
  );
};

export default Card;
