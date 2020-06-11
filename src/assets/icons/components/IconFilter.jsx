
import React from 'react';

import {ReactComponent as IconFilterComponent} from '../svg/IconFilter.svg';

import Icon from './Icon';

export const IconFilter = (props) => (
  <Icon {...props}>
    <IconFilterComponent/>
  </Icon>
);

IconFilter.propTypes = Icon.propTypes;
