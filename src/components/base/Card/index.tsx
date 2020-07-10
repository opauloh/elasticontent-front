import React from 'react';
import { Styled } from './styled';
import { CardType } from '../../../types/CardType';
import AvatarImg from '../Avatar/AvatarImg';
import { IconStar } from '../../icons';
import Status from '../Status';

type CardProps = {
  card: CardType
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <Styled.Card>
      <Styled.Avatar>
        <AvatarImg src={card.responsible.image} size="md" />
      </Styled.Avatar>
      <Styled.Company>{card.company}</Styled.Company>
      <Styled.DateTime>09:45</Styled.DateTime>
      <Styled.Title>Briefing mês de abril</Styled.Title>
      <Styled.Status>
        <Status />
      </Styled.Status>
      <Styled.Favorite>
        <IconStar />
      </Styled.Favorite>
      <Styled.Description>{card.description}</Styled.Description>
    </Styled.Card>
  )
}

export default Card;