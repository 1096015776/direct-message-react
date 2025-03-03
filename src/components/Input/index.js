import React from 'react';
import { StyledInput, InputContainer, Prefix, Suffix } from './style';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import Icon from '../Icon';
import { ReactComponent as SearcIcon } from "../../assets/icons/search.svg"

function Input({
  placeholder = "请输入内容",
  prefix,
  suffix,
  ...rest }) {
  return (
    <InputContainer {...rest}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <StyledInput placeholder={placeholder}>
      </StyledInput>
      {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  );
};

function Search({ placeholder = '请输入搜索内容', ...rest }) {
  const theme = useTheme();
  return (
    <Input placeholder={placeholder} prefix={
      <Icon icon={SearcIcon} color={theme.gray3} width={18} height={18}></Icon>
    }></Input>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  prefix: PropTypes.any,
  suffix: PropTypes.any
};
Input.Search = Search

export default Input;
