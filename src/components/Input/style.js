import styled from "styled-components";
export const StyledInput = styled.input`
  width:100%;
  height:48px;
  border:none;
  background:none;
  color:${({ theme }) => theme.grayDark};
  font-size:${({ theme }) => theme.medium};
  display: block;
  &::placeholder {
    color: ${({ theme }) => theme.gray3};
  }
`;

export const InputContainer = styled.div`
display:flex;
align-items:center;
background:${({ theme }) => theme.gray2};
border-radius:24px;
padding:0 30px;
`

export const Prefix = styled.div`
margin-right:16px;
`
export const Suffix = styled.div`
margin-left:16px;
`

