import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import Signup from './components/Signup';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#6b2a5f",
    },
    secondary: {
      main: "#f7d9c4",
    },
    
  },
});

function App() {
  const [username, setCC] = useState("");
  const [password, setPW] = useState("");
  return (
    <MuiThemeProvider theme={theme}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/home">
            <Home username={username} password={password} />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          
        </Switch>
      </div>
    </Router>
    </MuiThemeProvider>
  );
}

export default App;
