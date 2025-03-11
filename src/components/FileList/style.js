import styled from "styled-components";
import { StyledIcon } from "../Icon/style";
import { StyledText } from "../Text/style";

export const StyledFileList = styled.div`
padding:30px;
max-height:100vh;
overflow-y:auto;
`;

export const Files = styled.div`
display:grid;
grid-row-gap:8px;
`

export const File = styled.div`
background-color:${({ theme }) => theme.background};
box-shadow: 0px 18px 40px 0px rgba(0, 0, 0, 0.04);
border-radius:6px;
padding:20px 30px;
display:grid;
align-items:center;
grid-template-columns:74px 1fr 1fr;
grid-template-areas:
  "icon name option"
  "icon size time";

${StyledIcon}{
  &:first-of-type{
    grid-area:icon;
    justify-self:start;
  }
  &:nth-of-type(2){
    grid-area:option;
    justify-self:end;
  }
}

${StyledText}{
  &:first-of-type{
    grid-area:name;
    justify-self:start;
  }
  &:nth-of-type(2){
    grid-area:size;
    justify-self:start;
  }
  &:nth-of-type(3){
    grid-area:time;
    justify-self:end;
  }
}
`
