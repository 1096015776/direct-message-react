import styled from "styled-components";
import { css } from "styled-components";
const sizeVariant = {
  normal: css`
  font-size:${({ theme }) => theme.normal}
  `,
  medium: css`
  font-size:${({ theme }) => theme.medium}
  `,
  large: css`
  font-size:${({ theme }) => theme.large}
  `,
  xlarge: css`
  font-size:${({ theme }) => theme.xlarge}
  `,
  xxlarge: css`
  font-size:${({ theme }) => theme.xxlarge}
  `,
  small: css`
  font-size:${({ theme }) => theme.small}
  `,
  xsmall: css`
  font-size:${({ theme }) => theme.xsmall}
  `,
  xxsmall: css`
  font-size:${({ theme }) => theme.xxsmall}
  `,
}
const typeVariant = {
  primary: css`
    color:${({ theme }) => theme.grayDark};
  `,
  secondary: css`
    color:${({ theme }) => theme.grayDark};
    opacity:0.3;
  `,
  danger: css`
    color:${({ theme }) => theme.red};
  `
}
export const StyledText = styled.span`
${({ size }) => size ? sizeVariant[size] : sizeVariant["normal"]};
${({ bold }) => bold && `font-weight:500`};
${({ type }) => typeVariant[type]};
`;

