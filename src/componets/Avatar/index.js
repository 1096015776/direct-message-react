import React from 'react';
import { StyledAvatar, StatusIcon, AvatarClip, AvatarImg } from './style';
import PropTypes from 'prop-types';

function Avatar({ src, size = '48px', status, statusIconSize = '8px', ...rest }) {
  return (
    <StyledAvatar {...rest}>
      {status && (<StatusIcon status={status} size={statusIconSize}></StatusIcon>)}
      <AvatarClip size={size}>
        <AvatarImg src={src}></AvatarImg>
      </AvatarClip>
    </StyledAvatar>
  );
};

Avatar.propTypes = {
  // chidren: PropTypes.any
};

export default Avatar;
