// import React, { Component } from 'react';
// //import logo from './logo.svg';
// //import './App.css';
// // import AnimalCard from './AnimalCard'
// import { Animals } from './AnimalsList'
// //import AddAnimalForm from "./Components/AddAnimalForm"
// import axios from 'axios'
// //import { runInThisContext } from 'vm';
// import { connect } from 'react-redux'
// import {
//   Link,
//   withRouter 
// } from "react-router-dom"




// class Home extends Component {
//   constructor(props) {
//     super()
//     this.allAnimals = [];
//     this.state = {
//       counter: 1,
//       addAnimalForm: false,
//     }
//   }
//   componentWillMount() {  
//     console.log(this.props.animallStore);
//     this.getAllAnimals.bind(this)()
//   }
//   getAllAnimals() {
//     axios.get('http://localhost:3012/animals', {

//       mode: 'cors',  //tried both with and without
//       method: 'GET',
//       credentials: 'include',
//       cache: 'no-cache'
//     })
//       .then((response) => {
//         console.log('----- get response',response.data);
//         this.allAnimals = response.data;
//         console.log(this.allAnimals)
//         return response;
//       })
//       .then((response)=>{
//         console.log(response)
//         this.props.onAddAnimal(response.data)
//         console.log(this.props.animalStore)})
//       //.then(() => this.setState({ counter: this.state.counter + 1 }))
//       .catch((error) => console.log(error))

//   }

//   deleteAnimal = (e) => {
//     console.log("delete animals")
//     console.log(e)
//     axios.delete(`http://localhost:3012/animals/${e.currentTarget.dataset.id}`)
//       .then((response) => {
//         return response
//       })
//       .then(this.getAllAnimals.bind(this))
//   }


//   render() {
//     // var addAnimalForm = this.state.addAnimalForm && <section><AddAnimalForm postAnimal={this.postAnimalOnServer.bind(this)}></AddAnimalForm></section>
//     return (
//       <div>
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">

//               Animals
//           </div>
//           </div>

//         </div>
//         <div className="container">
//           <div className="row addAnimal justify-content-between">
//             <div className="col-8 col-md-4">
//               add animal
//              </div>
//             <div className="col-2"><button type="button" className="btn btn-outline-success" onClick={this.getAllAnimals.bind(this)}>Show animals</button></div>
//             <Link to="add"><div className="col-2"><button type="button" className="btn btn-outline-success" >Add</button></div></Link>
//           </div>
//         </div>
//         <div className="container">

//           <Animals allAnimals={this.allAnimals} deleteAnimal={this.deleteAnimal}></Animals>

//         </div>
//       </div>

//     );
//   }
// }

// export default withRouter(connect(
//   state => ({animalStore: state.animals}),
//   dispatch => ({
//     onAddAnimal:(animals)=>{
//       dispatch({type: "ADD_ANIMALS", animals: animals}) // dispacth available on props on this component
//     }})
// )(Home));