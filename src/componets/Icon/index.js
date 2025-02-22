import React from 'react';
import { StyledIcon } from './style';
import PropTypes from 'prop-types';

function Icon({ icon: IconComponet, width, height, color, opacity, ...rest }) {
  return (
    <StyledIcon color={color} opacity={opacity} {...rest}>
      {IconComponet && (<IconComponet width={width} height={height}></IconComponet>)}
    </StyledIcon>
  );
};

Icon.propTypes = {
  icon: PropTypes.element.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  opacity: PropTypes.number
};

export default Icon;
