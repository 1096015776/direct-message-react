import styled from "styled-components";
export const StyledPopover = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
export const Content = styled.div`
background-color:${({ theme }) => theme.background};
border-radius:21px;
padding: 12px 30px;
box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.12);
position:absolute;
bottom: calc(100% + 12px);
${({ offset }) => offset && `transform:translate(${offset.x || 0},${offset.y || 0})`};
display:${({ visible }) => visible ? 'block' : 'none'};
`;

export const Triangle = styled.div`
border:6px ${({ theme }) => theme.background} solid;
border-left-color:transparent;
border-right-color:transparent;
border-bottom-color:transparent;
position:absolute;
bottom:100%;
left:calc(50% - 6px);
${({ offset }) => offset && `transform:translate(${offset.x || 0},${offset.y || 0})`};
display:${({ visible }) => visible ? 'block' : 'none'};
`;
export const Target = styled.div``;
