import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import AnimalCard from './Components/AnimalCard'
//import AddAnimalForm from "./Components/AddAnimalForm"
import axios from 'axios'
//import { runInThisContext } from 'vm';

class App extends Component {
  constructor(props) {
    super()
    this.allAnimals = [];
    this.state = {
      counter: 1,
      addAnimalForm: false,
    }
  }
  componentWillMount() {
    this.getAllAnimals.bind(this)()
  }
  getAllAnimals() {
    axios.get('http://localhost:3012/animals', {

      mode: 'cors',  //tried both with and without
      method: 'GET',
      credentials: 'include',
      cache: 'no-cache'
    })
      .then((response) => {
        console.log(response);
        this.allAnimals = response.data;
        console.log(this.allAnimals)
      })
      .then(()=>this.setState({counter: this.state.counter + 1}))
      .catch((error) => console.log(error))
      
  }
  showAddAnimalForm() {
    if (this.state.addAnimalForm === false) {
      this.setState({ addAnimalForm: true })
    }
    if (this.state.addAnimalForm === true) {
      this.setState({ addAnimalForm: false })
    }
  }
  deleteAnimal(e) {
    console.log("delete animals")
    console.log(e)
    axios.delete(`http://localhost:3012/animals/${e.currentTarget.dataset.id}`)
      .then((response)=>{
        return response })
      .then(this.getAllAnimals.bind(this))
  }


  postAnimalOnServer(e) {
    console.time( 'srat')
    e.preventDefault()
    console.log(document.querySelector('#nickname').value)
    console.log(document.querySelector('#price').value)
    console.log(document.querySelector('#age').value)
    console.log(document.querySelector('#input-type').value)
    console.timeEnd('end');
    axios.post('http://localhost:3012/animals', {
      nickname: (document.querySelector('#nickname').value).toString(),
      price: (document.querySelector('#price').value).toString(),
      age: (document.querySelector('#age').value).toString(),
      type: (document.querySelector('#input-type').value).toString()
    })
      .then((response) => {
        console.log('hey', response);
        this.allAnimals.push(response.data);
        this.setState({counter: this.state.counter + 1})
        })
     
    document.querySelector('#nickname').value = '';
    document.querySelector('#price').value = '';
    document.querySelector('#age').value = '';
    document.querySelector('#input-type').value = '';
    
  }

  editAnimal(e) {
    console.log(e.currentTarget.dataset.id)
    //var oldNickName 

    var card = document.getElementById(e.currentTarget.dataset.id)
    card.querySelector(".card").innerHTML = `
    <div className="card-body">
    <form>
    <div class="form-group">
      
      <input type="text" class="form-control" id="nickname">
      <small id="nickameHelp" class="form-text text-muted">Input Nickname</small>
    </div>
    <select class="form-control form-control-sm">
                   
                        <option value="tiger">tiger</option>
                        <option value="panda">panda</option>
                        <option value="lion">lion</option>
                    </select>
                </div>
    <div class="form-group">
          <input type="number" class="form-control" id="age"></input>
      <small id="ageHelp" class="form-text text-muted">Input age</small>
    </div>
    <div class="form-group">
        <input type="number" class="form-control" id="price"></input>
        <small id="PriseHelp" class="form-text text-muted">Input age</small>
    </div>
  </div>

  </form>
  <button type="button" class="btn btn-warning">Submit</button>
  </div>`

  }

  render() {
   // var addAnimalForm = this.state.addAnimalForm && <section><AddAnimalForm postAnimal={this.postAnimalOnServer.bind(this)}></AddAnimalForm></section>
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              Animals
          </div>
          </div>

        </div>
        <div className="container">
          <div className="row addAnimal justify-content-between">
            <div className="col-8 col-md-4">
              add animal
             </div>
            <div className="col-2"><button type="button" className="btn btn-outline-success" onClick={this.getAllAnimals.bind(this)}>Show animals</button></div>
            <div className="col-2"><button type="button" className="btn btn-outline-success" onClick={this.showAddAnimalForm.bind(this)}>add</button></div>
          </div>
        </div>
        <div className="container">
        <form onSubmit ={this.postAnimalOnServer.bind(this)}>
            <div className="form-row">
                <div className="form-group col-3">
                    <label htmlFor="nickname">Nickname</label>
                    <input type="text" className="form-control" id="nickname" placeholder="Nickname"></input>
                </div>
                <div className="form-group col-3">
                    <label htmlFor="age">Age</label>
                    <input type="number" className="form-control" id="age" placeholder="Age"></input>
                </div>
                <div className="form-group col-3">
                    <label htmlFor="price">Price</label>
                    <input type="number" className="form-control" id="price" placeholder="Price"></input>
                </div>
                <div className="form-group col-m3">
                    <label htmlFor="input-type">Breed</label>
                    <select id="input-type" className="form-control">
                       
                        <option value="tiger">tiger</option>
                        <option value="panda">panda</option>
                        <option value="lion">lion</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <AnimalCard allAnimals={this.allAnimals} deleteAnimal={this.deleteAnimal.bind(this)} editAnimal={this.editAnimal.bind(this)}></AnimalCard>

    </div>
        </div>
     
    );
  }
}

export default App;
