
import React from 'react';

import {ReactComponent as IconCalendarComponent} from '../svg/IconCalendar.svg';

import Icon from './Icon';

export const IconCalendar = (props) => (
  <Icon {...props}>
    <IconCalendarComponent/>
  </Icon>
);

IconCalendar.propTypes = Icon.propTypes;
