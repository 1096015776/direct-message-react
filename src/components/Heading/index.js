import React from 'react';
import { StyledHeading } from './style';
import PropTypes from 'prop-types';

function Heading({ level, children, ...rest }) {
  return (
    <StyledHeading as={`h${level}`} {...rest}>
      {children}
    </StyledHeading>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.any
};

export default Heading;
