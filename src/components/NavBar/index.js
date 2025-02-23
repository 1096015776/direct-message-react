import React from 'react';
import { StyledNavBar } from './style';
import PropTypes from 'prop-types';
function MenuItem({ icon, active, showBadge, ...rest }) {
  <StyledNavBar {...rest}>
  </StyledNavBar>

}
function NavBar({ children, ...rest }) {
  return (
    <StyledNavBar {...rest}>
      {children}
    </StyledNavBar>
  );
};

NavBar.propTypes = {
  children: PropTypes.any
};

export default NavBar;
