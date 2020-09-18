import React from 'react';
import Card from './index';

export default {
  title: 'Card'
};

const defaultMockData = {
  id: '1111',
  company: {
    id: '1',
    name: 'Elasticontent',
    logo: 'https://www.iconsdb.com/icons/preview/purple/rocket-xxl.png'
  },
  new: false,
  active: false,
  starred: false,
  title: 'Briefing mês de julho 01',
  datetime: new Date(),
  responsible: {
    id: '1',
    name: 'Drieli Lopes',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvL8VK49O_3-UUwrUQhbfs_pnXTBGBYjm40g&usqp=CAU'
  },
  status: 'APPROVING',
  description: 'Esse é o conteúdo que será abordado durante o mês de julho'
};

export const read = () => (
  <Card
    card={{ ...defaultMockData }}
    toggleStarred={() => ({})}
    setActive={() => ({})}
  />
);
export const unread = () => (
  <Card
    card={{ ...defaultMockData, new: true }}
    toggleStarred={() => ({})}
    setActive={() => ({})}
  />
);
export const starred = () => (
  <Card
    card={{ ...defaultMockData, starred: true }}
    toggleStarred={() => ({})}
    setActive={() => ({})}
  />
);
export const active = () => (
  <Card
    card={{ ...defaultMockData, active: true }}
    toggleStarred={() => ({})}
    setActive={() => ({})}
  />
);
