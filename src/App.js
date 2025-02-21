import logo from './logo.svg';
import './App.css';
import theme from './theme.js'
import { ThemeProvider } from 'styled-components'
import Avatar from './componets/Avatar';
import face from './assets/images/face-female-1.jpg';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Avatar status={'online'} src={face}></Avatar>
    </ThemeProvider>
  );
}

export default App;
