import styled from "styled-components";
export const StyledIcon = styled.div`
display:inline-flex;
justify-content:center;
align-items:center;
svg,
svg *{
  ${({ color }) => (color ? `fill:${color}` : '')};
  ${({ opacity }) => (opacity ? `opacity:${opacity}` : '')};
}
`;
