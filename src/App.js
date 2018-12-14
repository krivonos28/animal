import React, { Component } from 'react';
import './App.css';
import { LoginPage } from './Components/Joinpage'
import { AddAnimal } from '../src/Components/AddAnimals'
//import { Animals } from './Components/AnimalsList'
import { Home } from './Components/HomeList'

import {
  HashRouter,
  Route,
  BrowserRouter,
  Router,
  Switch
} from "react-router-dom"
import { connect } from 'react-redux'
import { EditAnimal} from './Components/EditPage'


class App extends Component {
  constructor(props)  {
    super()
  }

  render() {
    return (<div>
      <BrowserRouter>
        <div className="main">
          <Route exact path='/' component={LoginPage}></Route>
          <Route exact path='/animals/' component={ Home }></Route>
          <Route path='/animals/add' component={ AddAnimal }></Route>
          <Route path='/animals/:id/edit' component={ EditAnimal }></Route>
          
        </div>
      </BrowserRouter>
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
