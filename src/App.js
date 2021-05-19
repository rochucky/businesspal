import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import styled from 'styled-components';
import Colors from './Components/Colors';
import Login from './Login/Login';
import Main from './Main/Main';


function App() {
  return (
    <div className="App">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;
