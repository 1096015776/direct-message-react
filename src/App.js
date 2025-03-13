import './App.css';
import theme from './theme.js'
import { ThemeProvider } from 'styled-components'
import ChatApp from './components/ChatApp';
import { BrowserRouter as Router } from 'react-router-dom';
import MessageList from './components/MessageList';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ChatApp></ChatApp>
      </ThemeProvider>
    </Router>
  );
}

export default App;
