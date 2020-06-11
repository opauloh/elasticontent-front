
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const IconWrapper = styled.span`
  background-position: center;
  background-repeat: no-repeat;
  display: inline-block;
  flex-shrink: 0;
  position: relative;
  vertical-align: middle;
  svg {
    ${props => props.size && `width: ${props.size}px; height: ${props.size}px;`}
    path {
      ${props => props.color && `fill: ${props.color};`}    
      ${props => props.border && `stroke: ${props.border};`}    
    }
  }
`;

const Icon = ({ children, size, color, border }) => {
  return (
    <IconWrapper size={size} color={color} border={border}>
      {children}
    </IconWrapper>
  );
};
Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  border: PropTypes.string
};
export default Icon;
