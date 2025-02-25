import styled, { css } from "styled-components";
import Text from "../Text";
import Badge from "../Badge";
import { StyledAvatar } from "../Avatar/style";
import { activeBar, Card } from "@/utils/mixin";
import Paragraph from "../Paragraph";
export const StyledMessageCard = styled.div`
${Card()};
display:grid;
grid-template-areas:
"avatar name time"
"avatar status status"
"message message message";
grid-template-columns:64px 1fr 1fr;
row-gap: 16px;
${StyledAvatar}{
  grid-area:avatar;
}
background-color:${({ theme }) => theme.background};
transition: all .4s;
cursor: pointer;
&:hover{
  box-shadow:0px 20px 50px rgba(0,0,0,0.1)
}
${({ active }) => active && css`
  background-color:${({ theme }) => theme.darkPurple};
  ${Name},${Status},${Time},${MessageText}{
    color:white
  }
  ${Status},${Time}{
    opacity: .7;
  }
  ${activeBar({ barWidth: "4px", shadowWidth: "14px" })};
  overflow:hidden;
`}
`;

export const Name = styled(Text).attrs({
  size: 'large'
})`
  grid-area:name;
`

export const Status = styled(Text).attrs({
  type: 'secondary'
})`
  grid-area:status;
`

export const Time = styled(Text).attrs({
  size: 'medium',
  type: 'secondary'
})`
  grid-area:time;
  justify-self:end;
`

export const Message = styled.div`
  grid-area:message;
  display:grid;
  grid-template-columns:1fr 30px;
  align-items:center;
  ${({ replied }) => replied && css`
    grid-template-columns:24px 1fr 30px;
  `}
`
export const MessageText = styled(Paragraph)``;

export const UnreadBadge = styled(Badge)`
justify-self:end;
`;
