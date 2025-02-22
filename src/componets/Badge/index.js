import React from 'react';
import { StyledBadge, Count } from './style';
import PropTypes from 'prop-types';

function Badge({ chidren, show = false, count = 0, showZero = false, ...rest }) {
  return (
    <StyledBadge
      variant={chidren ? 'dot' : 'default'}
      show={show}
      count={count}
      showZero={showZero}
      {...rest}>
      {chidren || <Count>{count}</Count>}
    </StyledBadge>
  );
};

Badge.propTypes = {
  chidren: PropTypes.any
};

export default Badge;
