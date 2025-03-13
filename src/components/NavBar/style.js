import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { activeBar } from "@/utils/mixin";
import { StyledAvatar } from "../Avatar/style";
export const StyledNavBar = styled.nav`
display:grid;
grid-template-rows:1fr 4fr;
width:100px;
height:100%;
padding:30px 0;
background-color:${({ theme }) => theme.darkPurple};
${StyledAvatar}{
  justify-self:center;
  background-color:${({ theme }) => theme.darkPurple};
}
`;
export const StyledMenuItem = styled.div`
& > a{
  width:100%;
  height:74px;
  display:flex;
  align-items:center;
  justify-content:center;
  ${activeBar()};
  ${({ active }) => (active ? "" : "&::before,&::after{height:0}")};
  &:hover{
    &::before,&::after{
      height:100%;
    }
    svg {
      transform: scale(1.2);
      opacity: 1;
      transition:all .3s;
    }

  }
}
&:nth-last-child(1){
  align-self:end;
}
`
export const MenuIcon = styled(FontAwesomeIcon)`
color:white;
font-size:24px;
opacity:${({ active }) => active ? 1 : 0.3}
`;

export const MenuItems = styled.div`
display:grid;
grid-template-columns:repeat(5,minmax(auto,88px), 1fr);
`
