---
to: src/components/<%= name %>/index.js
---

import React from 'react';
import { Styled<%= name %> } from './style';
import PropTypes from 'prop-types';

function <%= name %>({ chidren, ...rest }) {
  return (
    <Styled<%= name %> {...rest}>
      {chidren}
    </Styled<%= name %>>
  );
};

<%= name %>.propTypes = {
  chidren: PropTypes.any
};

export default <%= name %>;
