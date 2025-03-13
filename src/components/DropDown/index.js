import React, { useState } from 'react';
import { DropDownContainer, StyledDropDown } from './style';
import PropTypes from 'prop-types';


function DropDown({ conent, align = 'right', children, ...rest }) {
  const [visible, setVisible] = useState(false);
  return (
    <StyledDropDown onClick={() => setVisible(!visible)} {...rest}>
      {children}
      {conent && <DropDownContainer align={align} visible={visible}>{conent}</DropDownContainer>}
    </StyledDropDown>
  );
};

DropDown.propTypes = {
  children: PropTypes.any
};

export default DropDown;
