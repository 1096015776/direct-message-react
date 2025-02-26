import React from "react";
import MessageCard from '.';
import faceIcon from '@/assets/images/face-male-1.jpg'
export default {
  title: "UI 组件/MessageCard",
  componet: MessageCard
};
export const Default = () => (
  <>
    <MessageCard
      avatarSrc={faceIcon}
      avatarStatus="online"
      statusText={'在线'}
      name={'jack'}
      time={'1小时前'}
      message={'今天太晚了，明天学吧今天太晚了，明天学吧今天太晚了，明天学吧今天太晚了，明天学吧今天太晚了，明天学吧今天太晚了，明天学吧今天太晚了，明天学吧今天太晚了，明天学吧今天太晚了，明天学吧今天太晚了，明天学吧今天太晚了，明天学吧今天太晚了，明天学吧今天太晚了，明天学吧今天太晚了，明天学吧'}
      unreadCount={8}
    ></ MessageCard>
  </>
);

export const Active = () => (
  <>
    <MessageCard
      active
      avatarSrc={faceIcon}
      avatarStatus="online"
      statusText={'在线'}
      name={'jack'}
      time={'1小时前'}
      message={'今天太晚了，明天学吧'}
      replied
      unreadCount={8}
    ></ MessageCard>
  </>
);
export const Replied = () => (
  <>
    <MessageCard
      avatarSrc={faceIcon}
      avatarStatus="online"
      statusText={'在线'}
      name={'jack'}
      time={'1小时前'}
      message={'今天太晚了，明天学吧'}
      replied
      unreadCount={8}
    ></ MessageCard>
  </>
);
