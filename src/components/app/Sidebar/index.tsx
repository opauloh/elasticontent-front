import React from 'react';
import { Styled } from "./styled";
import AvatarName from '../Avatar/AvatarName';
import Menu from './Menu';

const Sidebar: React.FC = () => {
    return (
        <Styled.Sidebar>
            <Styled.AvatarWrapper>
                <AvatarName
                    size="lg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvL8VK49O_3-UUwrUQhbfs_pnXTBGBYjm40g&usqp=CAU"
                >Drieli Lopes</AvatarName>
            </Styled.AvatarWrapper>
            <Menu />
        </Styled.Sidebar>
    )
}

export default Sidebar;