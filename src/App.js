import './App.css';
import theme from './theme.js'
import { ThemeProvider } from 'styled-components'
import ChatApp from './components/ChatApp';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChatApp></ChatApp>
    </ThemeProvider>
  );
}

export default App;
