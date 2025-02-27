import React from 'react';
import { StyledEmoji } from './style';
import PropTypes from 'prop-types';

function Emoji({ label, children, ...rest }) {
  return (
    <StyledEmoji aria-label={label} role="img" {...rest}>
      {children}
    </StyledEmoji>
  );
};

Emoji.propTypes = {
  children: PropTypes.any
};

export default Emoji;
