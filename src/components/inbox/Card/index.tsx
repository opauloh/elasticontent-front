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
    <Styled.Card>
      <Styled.Status>
        <Status />
      </Styled.Status>
      <Styled.Company>{card.company}</Styled.Company>
      <Styled.DateTime>19h40</Styled.DateTime>
      <Styled.Title>Mês de julho/Folclore</Styled.Title>
      <Styled.Favorite>
        <IconStar />
      </Styled.Favorite>
      <Styled.Description>{card.description}</Styled.Description>
    </Styled.Card>
  );
};

export default Card;
