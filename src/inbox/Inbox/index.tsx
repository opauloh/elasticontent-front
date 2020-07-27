import React from 'react';
import Sidebar from '../../app/Sidebar';
import Cardlist from '../Cardlist';
import { Styled } from './styled';
import Content from '../../content/Content';
import Nav from '../../app/Nav';

const Inbox: React.FC = () => {
  return (
    <Styled.Inbox>
      <Sidebar />
      <Cardlist
        cards={[
          {
            id: '0001',
            company: 'Elasticontent',
            new: true,
            active: false,
            starred: false,
            title: 'Briefing mês de julho 01',
            datetime: new Date(),
            responsible: {
              name: 'Drieli Lopes',
              image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvL8VK49O_3-UUwrUQhbfs_pnXTBGBYjm40g&usqp=CAU'
            },
            status: 'new',
            description:
              'Esse é o conteúdo que será abordado durante o mês de julho'
          },
          {
            id: '0002',
            company: 'Elasticontent',
            new: true,
            active: false,
            starred: false,
            title: 'Briefing mês de julho 01',
            datetime: new Date(),
            responsible: {
              name: 'Drieli Lopes',
              image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvL8VK49O_3-UUwrUQhbfs_pnXTBGBYjm40g&usqp=CAU'
            },
            status: 'new',
            description:
              'Esse é o conteúdo que será abordado durante o mês de julho'
          },
          {
            id: '0003',
            company: 'Elasticontent',
            new: false,
            active: false,
            starred: true,
            title: 'Briefing mês de julho 01',
            datetime: new Date(),
            responsible: {
              name: 'Drieli Lopes',
              image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvL8VK49O_3-UUwrUQhbfs_pnXTBGBYjm40g&usqp=CAU'
            },
            status: 'pending',
            description:
              'Esse é o conteúdo que será abordado durante o mês de julho'
          },
          {
            id: '0004',
            company: 'Elasticontent',
            new: false,
            active: true,
            starred: false,
            title: 'Briefing mês de julho 01',
            datetime: new Date(),
            responsible: {
              name: 'Drieli Lopes',
              image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvL8VK49O_3-UUwrUQhbfs_pnXTBGBYjm40g&usqp=CAU'
            },
            status: 'pending',
            description:
              'Esse é o conteúdo que será abordado durante o mês de julho'
          },
          {
            id: '0005',
            company: 'Elasticontent',
            new: false,
            active: false,
            starred: true,
            title: 'Briefing mês de julho 01',
            datetime: new Date(),
            responsible: {
              name: 'Drieli Lopes',
              image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvL8VK49O_3-UUwrUQhbfs_pnXTBGBYjm40g&usqp=CAU'
            },
            status: 'pending',
            description:
              'Esse é o conteúdo que será abordado durante o mês de julho'
          },
          {
            id: '0006',
            company: 'Elasticontent',
            new: false,
            active: false,
            starred: true,
            title: 'Briefing mês de julho 01',
            datetime: new Date(),
            responsible: {
              name: 'Drieli Lopes',
              image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvL8VK49O_3-UUwrUQhbfs_pnXTBGBYjm40g&usqp=CAU'
            },
            status: 'pending',
            description:
              'Esse é o conteúdo que será abordado durante o mês de julho'
          }
        ]}
      />
      <Content />
      <Nav />
    </Styled.Inbox>
  );
};

export default Inbox;
