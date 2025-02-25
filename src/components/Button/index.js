import React from 'react';
import { StyledButton } from './style';
import PropTypes from 'prop-types';

function Button({
  type = "primary",
  size = "30px",
  shape = "circle",
  bgColor,
  children,
  ...rest }) {
  return (
    <StyledButton type={type} size={size} shape={shape} bgColor={bgColor} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.any
};

export default Button;
