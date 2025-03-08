import React from 'react';
import { Circle, RadioButton, StyledLabel, StyledRadio, StyledRadioGroup } from './style';
import PropTypes from 'prop-types';
import Text from '../Text';

function Radio({ name, children, ...rest }) {
  return (
    <StyledRadio {...rest}>
      <RadioButton name={name}></RadioButton>
      <Circle></Circle>
      {children}
    </StyledRadio>
  );
};

function Group({ label, children, ...rest }) {
  return (
    <StyledLabel>
      <Text style={{ marginBottom: "8px" }}>{label}:</Text>
      <StyledRadioGroup {...rest}>
        {children}
      </StyledRadioGroup>
    </StyledLabel>)
}

Radio.Group = Group

Radio.propTypes = {
  children: PropTypes.any
};

export default Radio;
