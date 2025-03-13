import React from 'react';
import { AppContent, AppDrawer, AppNav, AppSide, StyledChatApp } from './style';
import PropTypes from 'prop-types';
import NavBar from '../NavBar';
import MessageList from '../MessageList';
import Conversation from '../Conversation';
import Profile from '../Profile';

function ChatApp({ children, ...rest }) {
  return (
    <StyledChatApp {...rest}>
      <AppNav>
        <NavBar></NavBar>
      </AppNav>
      <AppSide>
        <MessageList></MessageList>
      </AppSide>
      <AppContent>
        <Conversation></Conversation>
      </AppContent>
      <AppDrawer>
        <Profile></Profile>
      </AppDrawer>
      {children}
    </StyledChatApp>
  );
};

ChatApp.propTypes = {
  children: PropTypes.any
};

export default ChatApp;
