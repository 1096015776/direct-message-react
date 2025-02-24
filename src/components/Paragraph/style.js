import styled from "styled-components";
import { StyledText } from "../Text/style";
import { css } from "styled-components";

export const StyledParagraph = styled(StyledText)`
${({ ellipsis }) => ellipsis && css`
text-overflow:ellipsis;
overflow:hidden;
white-space:nowrap;
`}`;


