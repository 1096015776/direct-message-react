import React from 'react';
import { InputUnderline, StyledInputText, StyledLabel } from './style';
import PropTypes from 'prop-types';

function InputText({ label, ...rest }) {
  return (
    <StyledInputText {...rest}>
      {label && <StyledLabel>{label}:</StyledLabel>}
      <InputUnderline></InputUnderline>
    </StyledInputText>
  );
};

InputText.propTypes = {
  label: PropTypes.string
  // children: PropTypes.any
};

export default InputText;
