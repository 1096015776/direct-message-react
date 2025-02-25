import styled from "styled-components";
import { css } from "styled-components";
import { circle } from "@/utils/mixin";

const typeVariant = {
  primary: css`
  background-color:${({ theme }) => theme.primaryColor};
  color:white;
  `
}

const shapeVariant = {
  circle: css`
    ${({ size }) => circle("", size)};
    display:inline-flex;
    align-items:center;
    justify-content:center;
  `,
  rect: css`
   padding:12px 18px;
   border-radius:6px;
  `
}

export const StyledButton = styled.button`
border:none;
cursor: pointer;
transform: scale(1);
transition: all .4s;
box-shadow:0px 6px 12px rgba(0,0,0,0.3);
&:hover{
  transform: scale(1.1);
  box-shadow:0px 6px 16px rgba(0,0,0,0.3);

}
${({ type }) => typeVariant[type]};
${({ shape }) => shapeVariant[shape]};
${({ bgColor }) => bgColor && `background-color:${bgColor}`};
`;
