import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Multiple from './components/Multipleinput';
import ClassCompo from './components/ClassCompo';
import Flower from './components/Flower';
import {Para} from './components/Arrowfunctions';
import Inhericc from './components/Inhericc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Welcome />
          <Multiple name="Kavivarshni Muthurathinam" age=" Age = 21"/>
          <ClassCompo name="Kavivarshni" />
          <Flower name="lily"/>
          <Para name="Arrow Functions"/>
          <Inhericc name="RANJEETH " />

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
}

export default App;
