import logo from './logo.svg';
import './App.scss';
//import MyComponent from './example/MyComponent.js';
import ListTodo from './Todos/ListTodo.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          Simple TODO Apps React with Duy &amp; Gau
        </p>
        {/* <MyComponent /> */}
        <ListTodo />
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
