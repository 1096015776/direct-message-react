import { css } from "styled-components"
export const circle = (color, size) => css`
width: ${size};
height: ${size};
${color && `background-color:${color}`};
border-radius:50%;
`

// 伪元素圆形
export const circleVirtual = (color, size) => css`
position:absolute;
display:block;
content:"";
${circle(color, size)}
`

// 高亮阴影
export const activeBar = ({ barWidth = "8px", shadowWidth = "20px" } = {}) => css`
position:relative;
&::before,&::after{
  display:block;
  content:"";
  position:absolute;
  height:100%;
  left:0;
  transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
&::before{
  width: ${barWidth};
  background: linear-gradient(
    180deg,
    rgba(142, 197, 242, 1) 0%,
    rgba(79, 157, 222, 1) 100%
  );
}
&::after {
  width: ${shadowWidth};
  background: linear-gradient(
    270deg,
    rgba(41, 47, 76, 1) 0%,
    rgba(142, 197, 242, 1) 100%
  );
  opacity: 0.6;
}
`

export const Card = (radius = "6px", padding = "20px 30px") => css`
padding:${padding};
border-radius:${radius};
background-color:${({ theme }) => theme.background}
`
