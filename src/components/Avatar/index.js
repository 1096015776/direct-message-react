import React from 'react';
import { StyledAvatar, StatusIcon, AvatarClip, AvatarImg } from './style';
import PropTypes from 'prop-types';

function Avatar({ src, size = '48px', status, statusIconSize = '8px', children, ...rest }) {
  return (
    <StyledAvatar {...rest}>
      {status && (<StatusIcon status={status} size={statusIconSize}></StatusIcon>)}
      <AvatarClip size={size}>
        <AvatarImg src={src}></AvatarImg>
      </AvatarClip>
      {children}
    </StyledAvatar>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  status: PropTypes.oneOf(['online', 'offline']),
  statusIconSize: PropTypes.string,
};

export default Avatar;
