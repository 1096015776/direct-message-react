import React from 'react';
import { StyledMessageList } from './style';
import PropTypes from 'prop-types';
import Input from '../Input';
import Filter from '../Filter';
import Select from '../Select';
import Button from '../Button';
import Icon from '../Icon';
import { ReactComponent as plusIcon } from '@/assets/icons/plus.svg';
import MessageCard from '../MessageCard';
import faceIcon from '@/assets/images/face-male-2.jpg'
import FilterList from '../FilterList';
import useStaggeredList from '@/hooks/useStaggeredList';
import { animated } from 'react-spring';

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

function ChatFilter({ ...rest }) {
  return (<Filter style={{ padding: "20px" }}>
    <Filter.Filters label={"列表排序"}>
      <Select>
        <option>最新消息优先</option>
        <option>在线好友优先</option>
      </Select>
    </Filter.Filters>
    <Filter.Action label={"创建会话"}>
      <Button>
        <Icon icon={plusIcon} width={12} height={12}></Icon>
      </Button>
    </Filter.Action>
  </Filter>)
}

function ChatList({ ...rest }) {
  const trailAnimes = useStaggeredList(6);

  return (
    trailAnimes.map((style, index) => (<animated.div style={style}>
      <MessageCard
        style={{ marginBottom: "16px" }}
        active={index === 3}
        avatarSrc={faceIcon}
        statusText={"在线"}
        time={"1 小时前"}
        replied={index % 3 === 0}
        name={"李明浩"}
        unreadCount={8}
        message="今天玩得很开心，明天去动物园吧"
      ></MessageCard>
    </animated.div>))

  )
}


MessageList.propTypes = {
  children: PropTypes.any
};

export default MessageList;
