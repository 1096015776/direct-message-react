import styled from "styled-components";
import Paragraph from "../Paragraph";
import Icon from "../Icon";
import { css } from "styled-components"
export const Time = styled(Paragraph).attrs({ type: "secondary", size: "small" })`
  margin: 6px;
  margin-left: 24px;
  word-spacing: 1rem;
`

export const BubbleTip = styled(Icon)`
  position: absolute;
  bottom: -15%;
  left: 0;
  z-index: 5;
`;

export const Bubble = styled.div`
background-color:white;
padding:15px 22px;
box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
border-radius: 100px;
position: relative;
z-index: 10;
`

const typeVariant = {
  mime: css`
  ${Bubble}{
    background-color:${({ theme }) => theme.primaryColor}
  }
  ${BubbleTip}{
    left:unset;
    right:0;
    transform:rotateY(180deg);
    path{
      fill:${({ theme }) => theme.primaryColor}
    }
  }
  
  `,
}

export const StyledChatBubble = styled.div`
display:flex;
flex-direction:column;
${({ type }) => typeVariant[type]};
`;


