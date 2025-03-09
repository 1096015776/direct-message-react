import styled from "styled-components";
import { StyledText } from "../Text/style";
import { StyledAvatar } from "../Avatar/style";
import { StyledIcon } from "../Icon/style";

export const StyledBlockedList = styled.div`
padding:80px 72px;
max-height:100vh;
overflow-y:auto;
`;

export const BlockHeader = styled.div`
display:flex;
align-items:center;
margin-bottom:62px;
${StyledIcon}{
  cursor: pointer;
}
${StyledText}{
  flex:1;
  text-align:center;
}
`

export const BlockedUsers = styled.div`
padding:0 66px;
display:grid;
grid-template-columns:repeat(5,1fr);
row-gap:24px;
justify-items:center;
text-align:center;
`

export const BlockUser = styled.div`
display:flex;
flex-direction:column;
${StyledText}{
  margin-top:20px;
}
${StyledAvatar}{
  position:relative;
}
${StyledIcon}{
  position:absolute;
  top:calc(100% - 30px);
  left:calc(100% - 51px);
}
`
