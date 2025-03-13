import styled from "styled-components";

export const StyledChatApp = styled.div`
height:100vh;
width:100vw;
overflow:hidden;
display:flex;
& > * {
  height:100%;
}
`;

export const AppNav = styled.nav`

`;

export const AppSide = styled.aside`
overflow-y:auto;
background: linear-gradient(119.19deg, rgb(255, 255, 255) 0%, rgb(248, 248, 248) 65.34%, rgb(255, 255, 255) 100%);
padding:30px;
max-width: 448px;
min-width: 344px;
`;

export const AppContent = styled.div`
flex-grow:1;
`

export const AppDrawer = styled.div``

