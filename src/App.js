//import logo from './logo.svg';
//import './App.css';
//import { Contador } from './components/Contador.jsx' //esto es cuando el modulo no se exporta como default
import  Contador  from './components/Contador.jsx'

const App= () => {
  return <Contador />
};

/*function App() {
  return (
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
  );
}*/

export default App;
