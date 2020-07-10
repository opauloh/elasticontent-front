import React from 'react';
import Sidebar from '../../components/Sidebar';
import Cardlist from '../../components/Cardlist';
import { Styled } from './styled';

const Inbox: React.FC = () => {
    return (
        <Styled.Inbox>
            <Sidebar />
            <Cardlist cards={[
                {
                    id: '111',
                    company: 'Electrolux',
                    responsible: {
                        name: 'Drieli Lopes',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvL8VK49O_3-UUwrUQhbfs_pnXTBGBYjm40g&usqp=CAU',
                    },
                    status: 'pending',
                    description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum '
                },
                {
                    id: '2',
                    company: 'Electrolux',
                    responsible: {
                        name: 'Drieli Lopes',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvL8VK49O_3-UUwrUQhbfs_pnXTBGBYjm40g&usqp=CAU',
                    },
                    status: 'pending',
                    description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum '
                }
            ]} />
        </Styled.Inbox>
    )
}

export default Inbox;