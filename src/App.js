import './App.css';
import Counter from './components/Counter/Counter';
//import { createStore } from 'redux';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <br />
        <Counter />
      </header>
    </div>
  );
}

export default App;
