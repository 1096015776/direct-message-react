import React from 'react';
import { AppContent, AppDrawer, AppNav, AppSide, StyledChatApp } from './style';
import PropTypes from 'prop-types';
import NavBar from '../NavBar';
import MessageList from '../MessageList';
import Conversation from '../Conversation';
import { Route, Routes } from 'react-router-dom';
import ContactList from '../ContactList';
import FileList from '../FileList';
import NoteList from '../NoteList';
import EditProfile from '../EditProfile';
import Setting from '../Setting';
import BlockedList from '../BlockedList';

function ChatApp({ children, ...rest }) {
  return (
    <StyledChatApp {...rest}>
      <AppNav>
        <NavBar></NavBar>
      </AppNav>
      <AppSide>
        <Routes>
          <Route path="/" element={<MessageList></MessageList>}></Route>
          <Route path="/contacts" element={<ContactList></ContactList>}></Route>
          <Route path="/files" element={<FileList />}></Route>
          <Route path="/notes" element={<NoteList></NoteList>}></Route>
          <Route path="/settings/*" element={<EditProfile></EditProfile>}></Route>
        </Routes>
      </AppSide>
      <AppContent>
        <Routes>
          <Route path="/" element={<Conversation></Conversation>}></Route>
          <Route path="/settings" element={<Setting></Setting>}></Route>
          <Route path="/settings/blocked" element={<BlockedList></BlockedList>}></Route>
        </Routes>
      </AppContent>
      <AppDrawer>
        {/* <Profile></Profile> */}
      </AppDrawer>
      {children}
    </StyledChatApp>
  );
};

ChatApp.propTypes = {
  children: PropTypes.any
};

export default ChatApp;
