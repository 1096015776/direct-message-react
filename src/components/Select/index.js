import React from 'react';
import { StyledSelect } from './style';
import PropTypes from 'prop-types';

function Select({ children, ...rest }) {
  return (
    <StyledSelect {...rest}>
      {children}
    </StyledSelect>
  );
};

Select.propTypes = {
  children: PropTypes.any
};

export default Select;
