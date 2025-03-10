import styled from "styled-components";
import { StyledParagraph } from "../Paragraph/style";
import { StyledAvatar } from "../Avatar/style";
export const StyledContactCard = styled.div`
background-color:${({ theme }) => theme.background};
border-radius: 6px;
padding:20px 30px;
display:grid;
grid-template-areas: 
  "avatar name"
  "avatar intro";
grid-template-columns:62px 1fr;
${StyledAvatar} {
  grid-area:avatar;
}
${StyledParagraph} {
  &:first-of-type {
    grid-area:name;
  }
  &:last-of-type {
    grid-area:intro;
  }
}
`;

