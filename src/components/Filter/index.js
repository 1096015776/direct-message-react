import React from 'react';
import { StyledAction, StyledFilter, StyledFilters } from './style';
import PropTypes from 'prop-types';
import Text from '../Text';

function Filter({ children, ...rest }) {
  return (
    <StyledFilter {...rest}>
      {children}
    </StyledFilter>
  );
};

function Filters({ label, children, ...rest }) {
  return (
    <StyledFilters {...rest}>
      <Text type='secondary'>{label}: </Text>
      {children}
    </StyledFilters>
  );

}

function Action({ label, children, ...rest }) {
  return (
    <StyledAction {...rest}>
      <Text type="secondary">{label}</Text>
      {children}
    </StyledAction>
  );

}

Filter.propTypes = {
  children: PropTypes.any
};

Filter.Filters = Filters;
Filter.Action = Action;

export default Filter;
