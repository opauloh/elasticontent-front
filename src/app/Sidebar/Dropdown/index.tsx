import React, { FunctionComponent, useState } from 'react';
import { Styled } from './styled';
import { IconArrowRight, IconArrowUp } from '../../../icons';

const Icon = ({ active = false, ...props }) => {
  if (active) return <IconArrowUp {...props} />;

  return <IconArrowRight {...props} />;
};

type DropdownProps = {
  content: any;
  activeItem: any;
  callback: any;
};

export const Dropdown: FunctionComponent<DropdownProps> = ({
  content,
  activeItem,
  callback
}) => {
  const [active, setActive] = useState(false);

  // console.log(children[1]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setActive((active) => !active);
    event.stopPropagation();
    // setActive
    // callback(content.id);
  };

  return (
    <Styled.Dropdown className={active ? 'active' : ''}>
      {/* <DropdownItem><IconSheet /> Minha Pauta</DropdownItem> */}
      <Styled.Item
        // onClick={() => setActiveItem(content.id)}
        onClick={() => {
          setActive(true);
          callback(content.id);
        }}
        className={activeItem === content.id ? 'active' : ''}>
        <Icon active={active} onClick={handleClick} />
        {content.icon}
        {content.name}
        <Styled.BadgeWrapper>{content.unread}</Styled.BadgeWrapper>
      </Styled.Item>
      {active && (
        <Styled.List>
          {content.sublist.map((list: any) => (
            <Styled.ListItem
              color={activeItem === list.id ? list.color : false}
              className={activeItem === list.id ? 'active' : ''}
              onClick={() => callback(list.id)}>
              {list.icon}
              {list.name}
              <Styled.BadgeWrapper>{list.unread}</Styled.BadgeWrapper>
            </Styled.ListItem>
          ))}
        </Styled.List>
      )}
      {/* <DropdownListItem><IconStarOutline /> Starred</DropdownListItem> */}
    </Styled.Dropdown>
  );
};

// export const DropdownItem: FunctionComponent = ({ children }) => (<Styled.Item><Icon active={true} />{children}</Styled.Item>)

export default Dropdown;
