import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent.js';

/**
 * 2 components: class component / function component (function, arrow function)
 * 
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World with React JS
        </p>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
