import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from "./components/Header";
import Main from "./pages/main"
import Login from "./pages/login"
import Cadastro from "./pages/cadastro"
import EsqSenha from "./pages/esqSenha"
import Notes from "./pages/notes"

import "./styles.css";
const App = ()=>(
  <Router>
  <div className="App">
    <Header />
    <Route path="/login" exact component={Login}/>
    <Route path="/cadastro" exact component={Cadastro}/>
    <Route path="/main" exact component={Main}/>
    <Route path="/EsqSenha" exact component={EsqSenha}/>
    <Route path ="/notes/:id" exact component = {Notes}/>


  </div>
  </Router>
);


export default App;
