import styled from "styled-components";
import { StyledText } from '@/components/Text/style.js';
import { animated } from 'react-spring';

export const StyledSetting = styled(animated.div)`
padding:80px 72px;
display:grid;
grid-row-gap:26px;
max-height:100vh;
overflow-y:auto;
`;

export const StyledSettingItem = styled.div`
display:flex;
flex-direction:column;
border-bottom:1px solid ${({ theme }) => theme.gray4};
padding-bottom:8px;
`;

export const StyledDescription = styled(StyledText).attrs({ type: "secondary" })`
margin-top:16px;
`

export const LabelGroup = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`
