
import React from 'react';

import {ReactComponent as IconTimerComponent} from '../svg/IconTimer.svg';

import Icon from './Icon';

export const IconTimer = (props) => (
  <Icon {...props}>
    <IconTimerComponent/>
  </Icon>
);

IconTimer.propTypes = Icon.propTypes;
