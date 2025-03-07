import React from 'react';
import { StyledLabel, StyledSelect } from './style';
import PropTypes from 'prop-types';
import Text from '../Text';

function Select({ label, type, children, ...rest }) {
  return (
    <>
      {label && <StyledLabel><Text>{label}:</Text></StyledLabel>}
      <StyledSelect type={type} {...rest}>
        {children}
      </StyledSelect>
    </>

  )
};

Select.propTypes = {
  type: PropTypes.oneOf(['form']),
  children: PropTypes.any
};

export default Select;
