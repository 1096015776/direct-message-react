import React from 'react';
import { StyledParagraph } from './style';
import PropTypes from 'prop-types';

function Paragraph({ children, ellipsis, ...rest }) {
  return (
    <StyledParagraph as="p" ellipsis={ellipsis} {...rest}>
      {children}
    </StyledParagraph>
  );
};

Paragraph.propTypes = {
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

export default Paragraph;
