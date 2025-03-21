import styled from "styled-components";
export const StyledInputText = styled.div`
display:flex;
flex-direction:column;
`;
export const StyledLabel = styled.label`
margin-bottom:8px;
`;

export const InputUnderline = styled.input`
width:100%;
border:none;
border-bottom: 1px solid ${({ theme }) => theme.gray4};
background:none;
&::placeholder {
  color: ${({ theme }) => theme.gray5};
}

&:focus,
&:hover {
  border-bottom-color: ${({ theme }) => theme.primaryColor};
}
`
