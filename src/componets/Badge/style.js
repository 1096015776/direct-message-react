import styled from "styled-components";
import { css } from 'styled-components';
import { circle } from '@/utils/mixin'
const variants = {
  dot: css`
  position:relative;
  padding:5px;
  &::before{
    content:"";
    display:block;
    ${({ theme }) => circle(theme.red, "6px")}
    position:absolute;
    top:0;
    right:0;
  }
  `,
  default: css`
  ${({ theme }) => circle(theme.red, "26px")}
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow:0px 18px 40px 0px rgba(0,0,0,0.4),
  0px 6px 12px 0px rgba(0,0,0,0.8);
  ${({ showZero, count }) => !showZero && count === 0 && `visiblity:none`}
  `
}
export const StyledBadge = styled.div`
display:inline-flex;
${({ variant }) => (variants[variant])}
`;
export const Count = styled.div`
color:white;
font-size:${({ theme }) => theme.normal};
`
