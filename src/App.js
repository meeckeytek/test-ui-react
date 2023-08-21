import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <marquee behavior="alternate">Welcome to Meeckey's world</marquee>
      </header>
    </div>
  );
}

export default App;
