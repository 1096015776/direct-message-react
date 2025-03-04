import React from 'react';
import { Conversations, MyChatBubble, StyledConversation } from './style';
import PropTypes from 'prop-types';
import TitleBar from '../TitleBar';
import ChatBubble from '../ChatBubble';
import Footer from '../Footer';
import VoiceMessage from '../VoiceMessage';

function Conversation({ children, ...rest }) {
  return (
    <StyledConversation {...rest}>
      <TitleBar></TitleBar>
      <Conversations>
        <ChatBubble time={'昨天 下午14：26'}>Hi 小宇，忙什么呢？</ChatBubble>
        <MyChatBubble time={'昨天 下午16：30'}>Hello 啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！</MyChatBubble>
        <ChatBubble time={'昨天 下午18：30'}>
          <VoiceMessage time={'1:24'}></VoiceMessage>
        </ChatBubble>
        <MyChatBubble time={'昨天 下午16：30'}>明天约一把王者荣耀，不连赢5把不罢休 🤘🤘</MyChatBubble>
      </Conversations>
      <Footer></Footer>
      {children}
    </StyledConversation>
  );
};

Conversation.propTypes = {
  children: PropTypes.any
};

export default Conversation;
