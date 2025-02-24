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
  children: PropTypes.any
};

export default Heading;
