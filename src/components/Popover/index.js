import React, { useState } from 'react';
import { Content, StyledPopover, Target, Triangle } from './style';
import PropTypes from 'prop-types';

function Popover({ children, offset = {}, content, ...rest }) {
  const [visible, setVisible] = useState(false)
  const handleClick = function () {
    if (visible) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }
  return (
    <StyledPopover {...rest} onClick={handleClick}>
      <Content offset={offset} visible={visible}>{content}</Content>
      <Triangle offset={offset} visible={visible}></Triangle>
      <Target>{children}</Target>
    </StyledPopover>
  );
};

Popover.propTypes = {
  children: PropTypes.any
};

export default Popover;
