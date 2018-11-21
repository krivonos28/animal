import React, { Component } from 'react';
import './App.css';
import { AddAnimal } from '../src/Components/AddAnimalsList'
import { Animals } from './Components/AnimalsList'
import { Home } from './Components/HomeList'
import {
  HashRouter,
  Route
} from "react-router-dom"
import { connect } from 'react-redux'
import { EditAnimal} from './Components/EditList'


class App extends Component {
  constructor(props)  {
    super()
  }

  render() {
    return (<div>
      <HashRouter>
        <div className="main">
          <Route exact path='/' component={ Home }></Route>
          <Route path='/add' component={ AddAnimal }></Route>
          <Route path='/edit' component={ EditAnimal }></Route>
          <Route path='/animalcard' component={ Animals }></Route>
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
