import React from 'react';
import { CheckBox, Slider, StyledSwitch } from './style';
import PropTypes from 'prop-types';

function Switch({ children, ...rest }) {
  return (
    <StyledSwitch {...rest}>
      <CheckBox></CheckBox>
      <Slider></Slider>
      {children}
    </StyledSwitch>
  );
};

Switch.propTypes = {
  children: PropTypes.any
};

export default Switch;
