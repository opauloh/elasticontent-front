import React, { FunctionComponent, useState } from 'react';
import Dropdown from './Dropdown';
import Badge from '../../components/base/Badge/index';
import { IconSheet, IconStarOutline, IconPencil, IconRefresh, IconPause, IconCheck, IconUserAssigned } from '../icons';
import colors from '../../tokens/colors';
import AvatarImg from '../base/Avatar/AvatarImg';

enum MenuStatus {
    Default,
    Active
}
enum ExpandStatus {
    Default,
    Active
}

const dropdownList = [{
    id: 1,
    name: 'Minha Pauta',
    status: MenuStatus.Default,
    expand: ExpandStatus.Default,
    unread: <Badge color="gray">02</Badge>,
    icon: <IconSheet />,
    sublist: [
        {
            id: 2,
            name: 'Starred',
            status: MenuStatus.Default,
            icon: <IconStarOutline />
        }
    ]
}, {
    id: 'client-01',
    name: 'Client 01',
    status: MenuStatus.Default,
    expand: ExpandStatus.Default,
    icon: <AvatarImg
        size="md"
        src="https://www.pathstone.com/app/uploads/2020/02/avatar-placeholder.png"
    />,
    sublist: [
        {
            id: 'client-02-2',
            name: 'Produção',
            color: colors["$blue-50"],
            status: MenuStatus.Default,
            icon: <IconPencil />,
            unread: <Badge color="blue">01</Badge>
        },
        {
            id: 'client-02-3',
            name: 'Alteração',
            color: colors["$yellow-50"],
            status: MenuStatus.Default,
            icon: <IconRefresh />,
            unread: <Badge color="yellow">03</Badge>
        },
        {
            id: 'client-02-4',
            name: 'Em aprovação',
            color: colors["$green-50"],
            status: MenuStatus.Default,
            icon: <IconPause />
        },
        {
            id: 'client-02-5',
            name: 'Aprovado',
            color: colors["$orange-50"],
            status: MenuStatus.Default,
            icon: <IconCheck />
        },
        {
            id: 'client-02-6',
            name: 'Assigned to me',
            color: colors["$gray-50"],
            status: MenuStatus.Default,
            icon: <IconUserAssigned />
        }
    ]
}]

export const Menu: FunctionComponent = () => {
    // const [active, setActive] = useState(0);
    const [activeItem, setActiveItem] = useState(0);

    return (
        <>
            {
                dropdownList.map(item => <Dropdown
                    activeItem={activeItem}
                    callback={(id: any) => setActiveItem(id)}
                    key={item.id} content={item} />)
            }
        </>)
};

export default Menu;
