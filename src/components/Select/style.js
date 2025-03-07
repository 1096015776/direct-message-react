import styled, { css } from "styled-components";
import CaretDown from '../../assets/icons/caret_down.svg'
import CaretDown2 from '../../assets/icons/caretDown2.svg'

// 下拉选择变体
const typeVariant = {
  form: css`
    background-image:url(${CaretDown2});
  `
}

//下拉选择容器
export const StyledSelect = styled.select`
  appearance: none;
  ::-ms-expand {
    display: none;
  }
  border:none;
  background-image:url(${CaretDown});
  background-repeat:no-repeat;
  background-position:right center;
  background-color: transparent;
  padding-right:14px;
  font-size: ${({ theme }) => theme.normal};
  color: ${({ theme }) => theme.grayDark};
  ${({ type }) => type && typeVariant[type]}
`;

//下拉选择标签
export const StyledLabel = styled.label`
margin-right:4px;
`
