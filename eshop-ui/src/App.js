import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName'
import SayMyNameWithState from "./components/SayMyNameWithState";
import ButtonWithText from "./components/ButtonWithText";
import SayMyNameUncontrolled from "./components/SayMyNameUncontrolled";
import SayMyNameWithStateWithHooks from "./components/SayMyNameWithStateWithHooks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SayMyName name="Tadas" />
        <hr/>
        <SayMyNameWithState/>
        <hr/>
        <ButtonWithText text="aaa"/>
        <hr/>
        <SayMyNameUncontrolled name="Vardenis"/>
        <hr/>
        <SayMyNameWithStateWithHooks/>
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
