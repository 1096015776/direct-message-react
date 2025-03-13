import styled from "styled-components";
import { StyledSeperator } from "../Seperator/style";

export const StyledDropDown = styled.div`
position:relative;
`;

export const DropDownContainer = styled.div`
position:absolute;
background-color:${({ theme }) => theme.background};
padding:4px 26px;
box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.08);
white-space:nowrap;
display: ${({ visible }) => (visible ? "block" : "none")};
${({ align }) => align}:0;

${StyledSeperator} {
    margin: -3px -26px;
    width: calc(100% + 52px);
}

`;

export const DropDownItem = styled.div`
padding:12px 0;
cursor: pointer;
`
