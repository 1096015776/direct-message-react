import './App.css';
import theme from './theme.js'
import { ThemeProvider } from 'styled-components'
import ChatApp from './components/ChatApp';
import { HashRouter as Router } from 'react-router-dom';

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
