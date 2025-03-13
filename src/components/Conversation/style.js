import styled from "styled-components";
import ChatBubble from "../ChatBubble";
import { animated } from 'react-spring';
export const StyledConversation = styled.div`
height:100vh;
display:flex;
flex-direction:column;
border: 1px solid ${({ theme }) => theme.gray4};
& > *:last-child {
  align-self: end;
}
`;

export const Conversations = styled(animated.div)`
padding:10px 15px;
display:flex;
flex-direction:column;
overflow-y:auto;
flex:1;

& > *{
  margin:10px 0;
}
`;

export const MyChatBubble = styled(ChatBubble).attrs({ type: 'mine' })`
align-items:flex-end;
`
