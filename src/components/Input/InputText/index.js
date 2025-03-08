import React from 'react';
import { InputUnderline, StyledInputText, StyledLabel } from './style';
import PropTypes from 'prop-types';
import Text from '@/components/Text';

function InputText({ placeholder = '请输入内容', label, ...rest }) {
  return (
    <StyledInputText {...rest}>
      {label && <StyledLabel><Text>{label}:</Text></StyledLabel>}
      <InputUnderline placeholder={placeholder}></InputUnderline>
    </StyledInputText>
  );
};

InputText.propTypes = {
  label: PropTypes.string
  // children: PropTypes.any
};

export default InputText;
