import React from 'react';
import { Styled } from "./styled";
import AvatarName from '../base/Avatar/AvatarName';
import Menu from '../Menu';

const Sidebar: React.FC = () => {
    return (
        <Styled.Sidebar>
            <Styled.AvatarWrapper>
                <AvatarName size="lg" src="https://www.pathstone.com/app/uploads/2020/02/avatar-placeholder.png">Drieli Lopes</AvatarName>
            </Styled.AvatarWrapper>
            <Menu />
        </Styled.Sidebar>
    )
}

export default Sidebar;