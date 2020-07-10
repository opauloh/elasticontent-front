import React from 'react';
import { Styled } from './styled';
import Card from '../base/Card';
import { CardType } from '../../types/CardType';


type CardlistProps = {
  cards: CardType[]
}

const Cardlist: React.FC<CardlistProps> = ({ cards }) => {
  return (
    <Styled.Cardlist>
      {
        cards.map((card: CardType) => <Card key={card.id} card={card} />)
      }
    </Styled.Cardlist>
  )
}

export default Cardlist;