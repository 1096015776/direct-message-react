import './App.css';
import theme from './theme.js'
import { ThemeProvider } from 'styled-components'
import NavBar from './components/NavBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar></NavBar>
    </ThemeProvider>
  );
}

export default App;
