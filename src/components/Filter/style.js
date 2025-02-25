import styled from "styled-components";
import { StyledText } from "../Text/style";
export const StyledFilter = styled.div`
display:grid;
grid-template-columns: 2fr 1fr;
align-items:center;

`;
export const StyledFilters = styled.div``;
export const StyledAction = styled.div`
justify-self: end;
${StyledText}{
  padding-right:1rem;
}
`;
