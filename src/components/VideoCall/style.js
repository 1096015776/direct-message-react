import styled from "styled-components";
import Button from "../Button";
import { StyledAvatar } from "../Avatar/style";
import { StyledText } from "../Text/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//视频通话容器
export const StyledVideoCall = styled.div`
background:url(${({ src }) => src});
background-size:cover;
background-position:center;
height:100%;
padding:20px;
display:grid;
grid-template-areas:
"title title"
"action self"
`;

//窗口最小化按钮
export const Minimize = styled(Button)`
background-color:${({ theme }) => theme.gray3};
border-radius:6px;
width:62px;
height:62px;
font-size:46px;
grid-area:title;
justify-self: end;
`

//视频通话操作按钮容器
export const Actions = styled.div`
display:flex;
grid-area:2/1/3/3;
justify-self:center;
align-self:end;
& > *:not(:first-child){
  margin-left:26px;
}
`

//视频通话操作按钮
export const Action = styled(Button)`
width:64px;
height:64px;
font-size:32px;
background-color:${({ theme, type }) => type === 'hangoff' ? theme.red2 : theme.grayDark2};
`

//视频通话头像
export const Self = styled.div`
grid-area:self;
align-self:end;
justify-self:end;
`

export const StyledFloatVideo = styled.div`
position:absolute;
top:10vh;
right:0;
background-color:${({ theme }) => theme.background};
padding:20px 30px;
width:max-content;
display:grid;
column-gap:10px;
row-gap:5px;
grid-template-areas:
"avatar title title"
"avatar changeFull icon";
${StyledAvatar}{
  grid-area:avatar;
}
${StyledText}{
  &:nth-of-type(1){
    grid-area:title;
  }
  &:nth-of-type(2){
    grid-area:changeFull;
    cursor: pointer;
  }
}
&>*:last-child{
  grid-area:icon;
  opacity:0.3;
  font-size:20px;
  justify-self:end;
}
`
