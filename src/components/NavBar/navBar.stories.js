import React from "react";
import NavBar, { MenuItem } from '.';
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const StyledContainer = styled.div`
  background: #292F4C;
  width: 100px;
`

export default {
  title: "页面组件/NavBar",
  componet: NavBar
};
export const Default = () => <NavBar></ NavBar>;
export const Menu = () => (
  <StyledContainer>
    <MenuItem active icon={faCommentDots} showBadge></MenuItem>
  </StyledContainer>
)
