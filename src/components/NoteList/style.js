import styled from "styled-components";
import { StyledText } from "../Text/style";

export const StyledNoteList = styled.div`
padding:30px;
height:100vh;
overflow-y:auto;
`;

export const Notes = styled.div`
display:grid;
grid-row-gap:8px;
`

export const Note = styled.div`
background-color:${({ theme }) => theme.background};
padding:20px 30px;
border-radius: 6px;
box-shadow: 0px 18px 40px 0px rgba(0, 0, 0, 0.04);
& > img {
  width:60px;
  height:60px;
  object-fit:cover;
}
display:grid;
justify-items:start;
align-items:center;
grid-template-columns:72px 2fr 1fr;
grid-template-areas:
  "icon title time"
  "icon desc desc";
& > img{
  grid-area:icon
}
${StyledText}{
  &:nth-of-type(1){
    grid-area:title;
  }
  &:nth-of-type(2){
    grid-area:desc;
  }
  &:nth-of-type(3){
    grid-area:time;
    justify-self:end;
  }
}
`
