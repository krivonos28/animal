import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import AddAnimalForm from "./Components/AddAnimalForm"
import EditForm from './Components/Editform'
import Home from './Components/Home'
import AnimalCard from './Components/AnimalCard'
import {
  HashRouter,
  Route
} from "react-router-dom"
import { connect } from 'react-redux'


class App extends Component {
  constructor(props){
    super()
  }

  render() {
    return (<div>
      <HashRouter>
        <div className="main">
          <Route exact path='/' component={Home}></Route>
          <Route path='/add' component={AddAnimalForm}></Route>
          <Route path='/edit' component={EditForm}></Route>
          <Route  path='/animalcard' component={AnimalCard}></Route>
        </div>
      </HashRouter>
      </div>
    )

  }
}


export default connect(
  state => ({animallStore: state}),
  dispatch => ({
    onAddAnimal:(animal)=>{
      dispatch({type: "ADD_ANIMAL", name: animal}) // dispacth available on props on this component
    }})
)(App);
