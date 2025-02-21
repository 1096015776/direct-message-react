import styled from "styled-components";
import { css } from 'styled-components'
import { circle } from "@/utils/mixin"

// 伪元素圆形
const circleVirtual = (color, size) => css`
position:absolute;
display:block;
content:"";
${circle(color, size)}
`

//头像容器
export const StyledAvatar = styled.div`
position:relative;
`;

//在线状态
export const StatusIcon = styled.div`
position:absolute;
top:4px;
left:2px;
&::before{
  ${circleVirtual("white", "8px")};
  transform:scale(2);
}
&::after{
  ${({ theme, status, size }) => {
    if (status === "online") {
      return circleVirtual(theme.green, size)
    } else if (status === "offline") {
      return circleVirtual(theme.gray, size)
    }
  }}
}
`

// 图片容器
export const AvatarClip = styled.div`
${({ size }) => {
    return circle('unset', size)
  }};
overflow:hidden
`
export const AvatarImg = styled.img`
width: 100%;
width: 100%;
object-fit:cover;
object-position:center;
`
