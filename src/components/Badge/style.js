import styled from "styled-components";
import { css } from 'styled-components';
import { circle, circleVirtual } from '@/utils/mixin.js'
const variants = {
  dot: css`
    position:relative;
    padding:5px;
    &::before{
      ${({ theme }) => circleVirtual(theme.red, '6px')}
      display:${({ show }) => show ? 'block' : 'none'};
      position:absolute;
      top:0;
      right:0;
    }
  `,
  default: css`
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow: 0px 18px 40px 0px rgba(0, 0, 0, 0.04),
      0px 6px 12px 0px rgba(0, 0, 0, 0.08);
    ${({ theme }) => circle(theme.red, '26px')}
    ${({ count, showZero }) => count === 0 && !showZero && 'visibility:hidden;'}
  `,
}
export const Count = styled.div`
color:white;
font-size:${({ theme }) => theme.normal}
`
export const StyledBadge = styled.div`
display:inline-block;
${({ variant }) => variants[variant]};
`;
