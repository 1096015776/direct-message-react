import React from 'react';
import { StyledMessageList } from './style';
import PropTypes from 'prop-types';
import MessageCard from '../MessageCard';
import FilterList from '../FilterList';
import useStaggeredList from '@/hooks/useStaggeredList';
import { animated } from 'react-spring';
import messagesData from "@/data/messages.js";

function MessageList({ children, ...rest }) {
  return (
    <StyledMessageList {...rest}>
      <FilterList
        options={['最新消息优先', '在线好友优先']}
        actionLabel={'创建会话'}
      >
        <ChatList></ChatList>
      </FilterList>
      {children}
    </StyledMessageList>
  );
};


function ChatList({ ...rest }) {
  const trailAnimes = useStaggeredList(messagesData.length);

  return (
    messagesData.map((item, index) => (
      <animated.div style={trailAnimes[index]}>
        <MessageCard
          key={item.id}
          style={{ marginBottom: "16px" }}
          avatarStatus={item.status}
          avatarSrc={item.avatarSrc}
          statusText={item.statusText}
          time={item.time}
          replied={item.replied}
          name={item.name}
          unreadCount={item.unreadCount}
          message={item.message}
          active={item.id === 2}
        ></MessageCard >
      </animated.div>
    ))
  )


}


MessageList.propTypes = {
  children: PropTypes.any
};

export default MessageList;
