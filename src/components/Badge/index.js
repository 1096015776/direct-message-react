import React from 'react';
import { StyledBadge, Count } from './style';
import PropTypes from 'prop-types';

function Badge({ children, show = false, count = 0, showZero = false, ...rest }) {
  return (
    <StyledBadge variant={children ? "dot" : "default"} show={show} showZero={showZero} {...rest}>
      {children || <Count>{count}</Count>}
    </StyledBadge>
  );
};

Badge.propTypes = {
  children: PropTypes.any
};

export default Badge;
