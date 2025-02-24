import React from 'react';
import { StyledText } from './style';
import PropTypes from 'prop-types';

function Text({ type = 'primary', bold = false, size = "normal", children, ...rest }) {
  return (
    <StyledText type={type} bold={bold} size={size} {...rest}>
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger"
  ]),
  bold: PropTypes.bool,
  size: PropTypes.oneOf([
    "normal",
    "medium",
    "large",
    "xlarge",
    "xxlarge",
    "small",
    "xsmall",
    "xxsmall",
  ]),
  children: PropTypes.any
};

export default Text;
