
import React from 'react';

import {ReactComponent as IconAvatarComponent} from '../svg/IconAvatar.svg';

import Icon from './Icon';

export const IconAvatar = (props) => (
  <Icon {...props}>
    <IconAvatarComponent/>
  </Icon>
);

IconAvatar.propTypes = Icon.propTypes;
