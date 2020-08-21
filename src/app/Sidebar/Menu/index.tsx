import React, { FunctionComponent, useState } from 'react';
import { Styled } from './styled';
import Badge from '../../Badge/index';
import {
  IconSheet,
  IconStarOutline,
  IconPencil,
  IconRefresh,
  IconPause,
  IconCheck,
  IconUserAssigned,
  IconArrowRight,
  IconArrowUp,
  IconStar
} from '../../../icons';
import colors from '../../../tokens/colors';
import AvatarImg from '../../Avatar/AvatarImg';
import { useSelector } from 'react-redux';
import { InboxType } from '../../../types/InboxType';
import { cursorTo } from 'readline';
import { CompanyType } from '../../../types/CompanyType';
import IDictionary from '../../../interfaces/IDicionary';

enum MenuStatus {
  Default,
  Active
}
enum ExpandStatus {
  Default,
  Active
}

// const dropdownList = [
//   {
//     id: 1,
//     name: 'Minha Pauta',
//     status: MenuStatus.Default,
//     expand: ExpandStatus.Default,
//     unread: <Badge color="gray">02</Badge>,
//     icon: <IconSheet />,
//     sublist: [
//       {
//         id: 2,
//         name: 'Starred',
//         status: MenuStatus.Default,
//         icon: <IconStarOutline />
//       }
//     ]
//   },
//   {
//     id: 'client-01',
//     name: 'Client 01',
//     status: MenuStatus.Default,
//     expand: ExpandStatus.Default,
//     icon: (
//       <AvatarImg
//         size="xxxs"
//         src="https://www.pathstone.com/app/uploads/2020/02/avatar-placeholder.png"
//       />
//     ),
//     sublist: [
//       {
//         id: 'client-02-2',
//         name: 'Produção',
//         color: colors['$color-blue-30'],
//         status: MenuStatus.Default,
//         icon: <IconPencil />,
//         unread: <Badge color="blue">01</Badge>
//       },
//       {
//         id: 'client-02-3',
//         name: 'Alteração',
//         color: colors['$color-yellow-50'],
//         status: MenuStatus.Default,
//         icon: <IconRefresh />,
//         unread: <Badge color="yellow">03</Badge>
//       },
//       {
//         id: 'client-02-4',
//         name: 'Em aprovação',
//         color: colors['$color-green-50'],
//         status: MenuStatus.Default,
//         icon: <IconPause />
//       },
//       {
//         id: 'client-02-5',
//         name: 'Aprovado',
//         color: colors['$color-orange-50'],
//         status: MenuStatus.Default,
//         icon: <IconCheck />
//       },
//       {
//         id: 'client-02-6',
//         name: 'Assigned to me',
//         color: colors['$color-gray-30'],
//         status: MenuStatus.Default,
//         icon: <IconUserAssigned />
//       }
//     ]
//   }
// ];

const Icon = ({ active = false, ...props }) => {
  if (active) return <IconArrowUp {...props} />;

  return <IconArrowRight {...props} />;
};

type CompanyMenuType = {
  id: string;
  name: string;
  logo: string;
  count: number;
};

const User: React.FC<{ count: number }> = ({ count }) => (
  <Styled.Dropdown>
    {/* <DropdownItem><IconSheet /> Minha Pauta</DropdownItem> */}
    <Styled.Item
      // onClick={() => setActiveItem(content.id)}
      // onClick={() => {
      //   setActive(true);
      //   callback(content.id);
      // }}
      className="active"
      // className={activeItem === content.id ? 'active' : ''}
    >
      {/* <Icon active={active} onClick={handleClick} /> */}
      <Icon active={true} onClick={() => ({})} />
      {/* {content.icon} */}
      {/* {content.name} */}
      <IconUserAssigned />
      Minha pauta
      <Styled.BadgeWrapper>{count}</Styled.BadgeWrapper>
    </Styled.Item>
    {/* {active && ( */}
    <Styled.List>
      <Styled.ListItem
      // color={activeItem === list.id ? list.color : false}
      // className={activeItem === list.id ? 'active' : ''}
      // onClick={() => callback(list.id)}
      >
        {/* {list.icon} */}
        <IconStar />
        Starred
      </Styled.ListItem>
    </Styled.List>
    {/* )} */}
    {/* <DropdownListItem><IconStarOutline /> Starred</DropdownListItem> */}
  </Styled.Dropdown>
);

const Company: React.FC<{ companies: CompanyMenuType[] }> = ({ companies }) => {
  const submenuList = [
    {
      name: 'Produção',
      slug: 'PRODUCTION'
    },
    {
      name: 'Alteração',
      slug: 'EDITING'
    },
    {
      name: 'Aprovação',
      slug: 'APPROVING'
    }
  ];
  return (
    <>
      {companies.map((company) => (
        <Styled.Dropdown key={company.id}>
          {/* <DropdownItem><IconSheet /> Minha Pauta</DropdownItem> */}
          <Styled.Item
          // onClick={() => setActiveItem(content.id)}
          // onClick={() => {
          //   setActive(true);
          //   callback(content.id);
          // }}
          // className={activeItem === content.id ? 'active' : ''}
          >
            {/* <Icon active={active} onClick={handleClick} /> */}
            <Icon active={false} onClick={() => ({})} />
            {/* {content.icon} */}
            {/* {content.name} */}
            {company.name}
            <Styled.BadgeWrapper>{company.count}</Styled.BadgeWrapper>
          </Styled.Item>
          {/* {active && ( */}
          <Styled.List>
            {submenuList.map((submenu: any) => (
              <Styled.ListItem
              // color={activeItem === list.id ? list.color : false}
              // className={activeItem === list.id ? 'active' : ''}
              // onClick={() => callback(list.id)}
              >
                {/* {list.icon} */}
                {submenu.name}
                {/* <Styled.BadgeWrapper>{company}</Styled.BadgeWrapper> */}
              </Styled.ListItem>
            ))}
          </Styled.List>
          {/* <DropdownListItem><IconStarOutline /> Starred</DropdownListItem> */}
        </Styled.Dropdown>
      ))}
    </>
  );
};

export const Menu: FunctionComponent = () => {
  // const [active, setActive] = useState(0);
  // const [activeItem, setActiveItem] = useState(0);
  const inbox = useSelector<{ inbox: InboxType[] }, InboxType[]>(
    (state) => state.inbox
  );

  const parseInboxData = (
    inbox: InboxType[]
  ): { user: number; companies: CompanyMenuType[] } => {
    const companies = Object.values(
      inbox.reduce((prev: IDictionary<CompanyMenuType>, curr) => {
        if (!prev[curr.company.id])
          prev[curr.company.id] = { ...curr.company, count: 0 };

        if (curr.responsible.id === '1') prev[curr.company.id].count++;

        return prev;
      }, {})
    );

    const user = companies.reduce((prev, curr) => (prev += curr.count), 0);

    return {
      user,
      companies
    };
  };

  const inboxData = parseInboxData(inbox);

  return (
    <Styled.Menu>
      {/* {dropdownList.map((item) => (
        <Dropdown
          activeItem={activeItem}
          callback={(id: any) => setActiveItem(id)}
          content={item}
          key={item.id}
        />
      ))} */}
      <User count={inboxData.user} />
      <Company companies={inboxData.companies} />
    </Styled.Menu>
  );
};

export default Menu;
