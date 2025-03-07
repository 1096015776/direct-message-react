import React from 'react';
import { InputUnderline, StyledInputText, StyledLabel } from './style';
import PropTypes from 'prop-types';
import Text from '@/components/Text';

function InputText({ label, ...rest }) {
  return (
    <StyledInputText {...rest}>
      {label && <StyledLabel><Text>{label}:</Text></StyledLabel>}
      <InputUnderline></InputUnderline>
    </StyledInputText>
  );
};

InputText.propTypes = {
  label: PropTypes.string
  // children: PropTypes.any
};

export default InputText;
