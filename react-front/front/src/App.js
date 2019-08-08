import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from "./components/Header";
import Main from "./pages/main"
import Login from "./pages/login"


import "./styles.css";
const App = ()=>(
  <Router>
  <div className="App">
    <Header />
    <Route path="/" exact component={Login}/>
    <Route path="/main" exact component={Main}/>


  </div>
  </Router>
);


export default App;
