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
  // chidren: PropTypes.any
};

export default Icon;
