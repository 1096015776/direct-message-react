import styled from "styled-components";
import { StyledAvatar } from "../Avatar/style";
import { StyledButton } from "../Button/style";
export const StyledEditProfile = styled.div`
${StyledAvatar}{
  grid-area:1/1/2/2;
  margin-bottom:12px;
  justify-self:center;
}
${StyledButton}{
  grid-area:1/1/3/2;
  align-self:end;
  justify-self:end;
}
display:grid;
padding:30px;
grid-template-columns: 1fr;
max-height: 100vh;
overflow-y: auto;
height:100%;
padding:30px;
row-gap: 20px;
`;

export const GenderAndRegion = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
& > label:last-child{
  display:flex;
  flex-direction:column;
}
`

export const SelectGroup = styled.div`
& > *:not(:last-child) {
  margin-right:12px;
}
`

export const StyledIconInput = styled.div`
display:flex;
& > *:nth-child(2){
  margin-left:8px;
}
`
