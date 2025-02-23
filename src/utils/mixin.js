import { css } from "styled-components"
export const circle = (color, size) => css`
width: ${size};
height: ${size};
background-color:${color};
border-radius:50%;
`

// 伪元素圆形
export const circleVirtual = (color, size) => css`
position:absolute;
display:block;
content:"";
${circle(color, size)}
`
