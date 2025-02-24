import React from 'react';
import { MenuIcon, MenuItems, StyledMenuItem, StyledNavBar } from './style';
import PropTypes from 'prop-types';
import Badge from '@/components/Badge';
import Avatar from '../Avatar';
import profileImage from "../../assets/images/face-female-1.jpg";
import { faCog, faCommentDots, faEllipsisH, faFolder, faStickyNote, faUser } from '@fortawesome/free-solid-svg-icons';
import { css } from 'styled-components';

function MenuItem({ icon, active, showBadge, ...rest }) {
  return (
    <StyledMenuItem active={active} {...rest}>
      <a href="#">
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon}></MenuIcon>
        </Badge>
      </a>
    </StyledMenuItem>
  )
}
function NavBar({ children, ...rest }) {
  return (
    <StyledNavBar {...rest}>
      <Avatar src={profileImage} status={"online"}></Avatar>
      <MenuItems>
        <MenuItem showBadge active icon={faCommentDots}></MenuItem>
        <MenuItem icon={faUser}></MenuItem>
        <MenuItem icon={faFolder}></MenuItem>
        <MenuItem icon={faStickyNote}></MenuItem>
        <MenuItem icon={faEllipsisH}></MenuItem>
        <MenuItem icon={faCog}></MenuItem>
      </MenuItems>
      {children}
    </StyledNavBar>
  );
};

NavBar.propTypes = {
  children: PropTypes.any
};

export default NavBar;
export { MenuItem }
