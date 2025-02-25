import React from 'react';
import { StyledOption } from './style';
import PropTypes from 'prop-types';

function Option({ children, ...rest }) {
  return (
    <StyledOption {...rest}>
      {children}
    </StyledOption>
  );
};

Option.propTypes = {
  children: PropTypes.any
};

export default Option;
