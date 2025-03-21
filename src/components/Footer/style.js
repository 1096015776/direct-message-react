import styled from "styled-components";
import { animated } from 'react-spring';

export const StyledFooter = styled(animated.div)`
width:100%;
padding:12px 30px;
`;

export const IconContainer = styled.div`
display:flex;
align-items:center;
margin-right:-30px;
&>*{
  margin-left:16px;
}
`;

export const StyledPopoverContent = styled.div`
display:flex;
& > * {
font-size:${({ theme }) => theme.medium};
margin:0 8px;
}
`
