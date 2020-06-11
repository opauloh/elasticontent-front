
import React from 'react';

import {ReactComponent as IconStarComponent} from '../svg/IconStar.svg';

import Icon from './Icon';

export const IconStar = (props) => (
  <Icon {...props}>
    <IconStarComponent/>
  </Icon>
);

IconStar.propTypes = Icon.propTypes;
