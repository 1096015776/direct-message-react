import React from 'react';
import { MenuIcon, MenuItems, StyledMenuItem, StyledNavBar } from './style';
import PropTypes from 'prop-types';
import Badge from '@/components/Badge';
import Avatar from '../Avatar';
import profileImage from "../../assets/images/face-female-1.jpg";
import { faCog, faCommentDots, faEllipsisH, faFolder, faStickyNote, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, matchPath, useLocation } from 'react-router-dom';

function MenuItem({ to = "#", icon, showBadge, ...rest }) {
  const loc = useLocation();
  const active = !!matchPath(
    {
      path: to,
      end: true,
    },
    loc.pathname
  );

  return (
    <StyledMenuItem active={active} {...rest}>
      <Link to={to}>
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon}></MenuIcon>
        </Badge>
      </Link>
    </StyledMenuItem>
  )
}
function NavBar({ children, ...rest }) {
  return (
    <StyledNavBar {...rest}>
      <Avatar src={profileImage} status={"online"}></Avatar>
      <MenuItems>
        <MenuItem showBadge to="/" icon={faCommentDots}></MenuItem>
        <MenuItem to="/contacts" icon={faUser}></MenuItem>
        <MenuItem to="/files" icon={faFolder}></MenuItem>
        <MenuItem to="/notes" icon={faStickyNote}></MenuItem>
        <MenuItem icon={faEllipsisH}></MenuItem>
        <MenuItem to="/settings" icon={faCog}></MenuItem>
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
