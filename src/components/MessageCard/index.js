import React from 'react';
import { Message, MessageText, Name, Status, StyledMessageCard, Time, UnreadBadge } from './style';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import Icon from '../Icon';
import { ReactComponent as repliedIcon } from '@/assets/icons/replied.svg'
import { useTheme } from 'styled-components';

function MessageCard({
  avatarSrc,
  avatarStatus,
  statusText,
  name,
  time,
  message,
  unreadCount,
  active,
  replied,
  children,
  ...rest }) {
  const theme = useTheme();
  return (
    <StyledMessageCard active={active} {...rest}>
      <Avatar src={avatarSrc} status={avatarStatus}></Avatar>
      <Name>{name}</Name>
      <Status>{statusText}</Status>
      <Time>{time}</Time>
      <Message replied={replied}>
        {replied && <Icon style={{ justifyContent: "start" }} icon={repliedIcon} width={16} height={14} color={active ? theme.inactiveColorDark : theme.inactiveColor} opacity={active ? 0.4 : 1}></Icon>}
        <MessageText ellipsis>{message}</MessageText>
        <UnreadBadge count={unreadCount}></UnreadBadge>
      </Message>
      {children}
    </StyledMessageCard>
  );
};

MessageCard.propTypes = {
  avatarSrc: PropTypes.string,
  avatarStatus: PropTypes.oneOf(['online', 'offline']),
  statusText: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
  message: PropTypes.string,
  unreadCount: PropTypes.number,
  active: PropTypes.bool,
  replied: PropTypes.bool,
  children: PropTypes.any
};

export default MessageCard;
