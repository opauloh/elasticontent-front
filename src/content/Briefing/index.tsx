import React from 'react';
// import Sidebar from '../../app/Sidebar';
// import Cardlist from '../Cardlist';
import { Styled } from './styled';

const Briefing: React.FC = () => {
  return (
    <>
      <Styled.Title>Briefing</Styled.Title>
      <Styled.Item>
        <Styled.ItemTitle>Propósito</Styled.ItemTitle>
        <Styled.ItemText>Abordar as vantagens ao investir em um modelo de armação para óculos, seja de grau ou de sol, confeccionadas com o material acetato.</Styled.ItemText>
      </Styled.Item>
      <Styled.Item>
        <Styled.ItemTitle>Direcionais</Styled.ItemTitle>
        <Styled.ItemText>Começar o texto falando sobre como a escolha do material da armação pode parecer um detalhe, mas que faz muita diferença no uso no dia a dia. Citar rapidamente os materiais mais utilizados para óculos e introduzir o acetato, material muito comum e preferido por muitas pessoas.</Styled.ItemText>
      </Styled.Item>
      <Styled.Item>
        <Styled.ItemTitle>Tópicos</Styled.ItemTitle>
        <Styled.CheckboxWrapper><Styled.Checkbox />O que é o acetato e porque ele é utilizado para armações.</Styled.CheckboxWrapper>
        <Styled.CheckboxWrapper><Styled.Checkbox />Vantagens das armações com acetato.</Styled.CheckboxWrapper>
        <Styled.CheckboxWrapper><Styled.Checkbox />Convidar para conhecer as opções no site da Ponto de Visão.</Styled.CheckboxWrapper>
      </Styled.Item>
    </>
    // <Styled.Briefing>
    // </Styled.Briefing>
  )
}

export default Briefing;