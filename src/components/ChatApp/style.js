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
width:448px;
`;

export const AppContent = styled.div`
flex-grow:1;
`

export const AppDrawer = styled.div`
transform:translateX(100%);
width:0;
transition: transform 0.4s;
${({ show }) => show && `
padding:30px;
width:initial;
transform:translateX(0);
`}
`

