import styled from "styled-components";
import { StyledIcon } from "../Icon/style";
export const StyledTitleBar = styled.div`
display:grid;
grid-template-columns: 62px 1fr 112px;
padding:30px;
max-height:110px;
border-bottom:1px solid ${({ theme }) => theme.gray4}
`;
export const Title = styled.div``;
export const Actions = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
${StyledIcon}{
  cursor: pointer;
}
`;
