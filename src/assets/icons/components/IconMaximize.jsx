
import React from 'react';

import {ReactComponent as IconMaximizeComponent} from '../svg/IconMaximize.svg';

import Icon from './Icon';

export const IconMaximize = (props) => (
  <Icon {...props}>
    <IconMaximizeComponent/>
  </Icon>
);

IconMaximize.propTypes = Icon.propTypes;
