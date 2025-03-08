import styled from "styled-components";

export const StyledRadio = styled.label`
font-size:${({ theme }) => theme.normal};
display:flex;
align-items:center;
cursor: pointer;
`;

export const RadioButton = styled.input.attrs({ type: 'radio' })`
width:0;
height:0;
opacity:0;
&:checked + span::before{
  transform:scale(1);
}
`;

export const Circle = styled.span`
width:16px;
height:16px;
border:1px solid ${({ theme }) => theme.primaryColor};
border-radius:50%;
margin-right:6px;
display:flex;
align-items:center;
justify-content:center;
&::before{
  content:"";
  display:block;
  width:70%;
  height:70%;
  background-color:${({ theme }) => theme.primaryColor};
  border-radius:50%;
  transition:transform ease .2s;
  transform:scale(0)
}
`;

export const StyledRadioGroup = styled.div`
display:flex;
& > *:not(:first-child){
  margin-left:24px;
}

`;

export const StyledLabel = styled.label`
display:flex;
flex-direction:column;
`;
