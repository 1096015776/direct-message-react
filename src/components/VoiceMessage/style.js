import styled from "styled-components";
import { css } from "styled-components"
import { StyledIcon } from "../Icon/style";
import { StyledButton } from "../Button/style";
import { StyledText } from "../Text/style";
const typeVariant = {
  mine: css`
  ${StyledButton}{
    background-color:white
  }
  ${StyledIcon} path{
      fill:${({ theme }) => theme.primaryColor}
  }
  & > ${StyledIcon} path{
    fill:white;
  }
  & > ${StyledText}{
    color:white;
  }

  `
}
export const StyledVoiceMessage = styled.div`
display:flex;
align-items:center;
& > *:first-child{
  flex-shrink:0;
}
& > *:not(:first-child){
  margin-left:16px;
}
${({ type }) => type && typeVariant[type]}
`;
