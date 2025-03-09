import React from 'react';
import { StyledBlockedList, BlockHeader, BlockedUsers, BlockUser } from './style';
import PropTypes from 'prop-types';
import { ReactComponent as leftIcon } from "@/assets/icons/arrowMenuLeft.svg";
import { ReactComponent as closeCircle } from "@/assets/icons/closeCircle.svg";
import Icon from '../Icon';
import Text from '../Text';
import blockedData from "@/data/blocked.js"
import Avatar from '../Avatar';

function BlockedList({ onBack, children, ...rest }) {
  return (
    <StyledBlockedList {...rest}>
      <BlockHeader>
        <Icon icon={leftIcon} width={24} height={24} onClick={onBack}></Icon>
        <Text size='xxlarge'>已屏蔽的好友</Text>
      </BlockHeader>
      <BlockedUsers>
        {blockedData.map((user, i) => {
          return (
            <BlockUser key={user.id}>
              <Avatar src={user.avatar} size={'105px'}>
                <Icon width={51} height={51} icon={closeCircle}></Icon>
              </Avatar>
              <Text size={'xlarge'}>{user.name}</Text>
            </BlockUser>
          )
        })}
      </BlockedUsers>
      {children}
    </StyledBlockedList>
  );
};

BlockedList.propTypes = {
  children: PropTypes.any
};

export default BlockedList;
