import styled from "styled-components";
export const StyledSwitch = styled.label`
display:inline-block;
cursor: pointer;
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
width:0;
height:0;
opacity:0;
&:checked + span{
  background-color:${({ theme }) => theme.primaryColor};
}
&:checked + span::after{
  transform:translateX(20px);
}
`;

export const Slider = styled.span`
width:50px;
height:30px;
display:inline-block;
border-radius:16px;
background-color:${({ theme }) => theme.gray4};
position:relative;
transition:all .2s;
&::after{
  content:"";
  display:block;
  width:30px;
  height:30px;
  border-radius:50%;
  position:absolute;
  background-color:white;
  transition:all .2s;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.05), 0px 2px 2px rgba(0, 0, 0, 0.1),
      0px 3px 1px rgba(0, 0, 0, 0.0510643);
}
`;
