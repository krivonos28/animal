import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import AnimalCard from './Components/AnimalCard'
import AddAnimalForm from "./Components/AddAnimalForm"
//import axios from 'axios'
//import { runInThisContext } from 'vm';
import Home from './Components/Home'
import {HashRouter,
        Route
      } from "react-router-dom"


class App extends Component {
  
  render() {
    return(
      <HashRouter>
      <div className="main">
        <Route exact path='/' component={Home}></Route>
        <Route path='/add' component={AddAnimalForm}></Route>
      </div>
      </HashRouter>
    )
   
  }
}

export default App;
