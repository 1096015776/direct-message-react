import React from 'react';
import { StyledChatBubble, Time, Bubble, BubbleTip } from './style';
import { ReactComponent as bubbleTipIcon } from "@/assets/icons/bubbleTip.svg"
import PropTypes from 'prop-types';
import Text from '../Text';

function ChatBubble({ type, time, children, ...rest }) {
  return (
    <StyledChatBubble type={type} {...rest}>

      <Bubble>
        <Text>{children}

          {/* <BubbleTip icon={bubbleTipIcon} width={40} height={28} color={'white'}></BubbleTip> */}
        </Text>
        <BubbleTip icon={bubbleTipIcon} width={40} height={28} color={'white'}></BubbleTip>
      </Bubble>

      <Time>{time}</Time>

    </StyledChatBubble>
  );
};

ChatBubble.propTypes = {
  children: PropTypes.any
};

export default ChatBubble;
