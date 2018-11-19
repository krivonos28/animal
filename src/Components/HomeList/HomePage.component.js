import React, { Component } from 'react';
import { Animals } from '../AnimalsList'
import axios from 'axios'
import { Join } from '../JoinList'
import { Link } from 'react-router-dom'

class HomePageComponent extends Component {
    constructor(props) {
        super()
        this.allAnimals = [];
        this.state = {
            counter: 1,
            addAnimalForm: false,
        }
    }
    componentWillMount() {
        console.log(this.props);
      //  this.props.getAnimalsApiRequest();
        const { getAllAnimals } = this.props;
        getAllAnimals();
    }
   

    deleteAnimal = (e) => {
        console.log("delete animals")
        console.log(e)
        axios.delete(`http://localhost:3012/animals/${e.currentTarget.dataset.id}`)
            .then((response) => {
                return response
            })
            .then(this.getAllAnimals.bind(this))
    }

    editAnimal(e) {
        console.log(e.currentTarget.dataset.id)
        //var oldNickName 
    }

    render() {
        // console.log(this.props)
         const { getAllAnimals, animalStore } = this.props.animalStore.animals;
        // console.log(animalStore)
        // console.log(this.props.animalStore.join.signIn)
        // if (!this.props.animalStore.animals.initialized || this.props.animalStore.animals.updating ) {
        //     return (<div> 
        //         <Join></Join> 
        //         </div>)
        // } 
        console.log(this.props.animalStore.join.signIn)
        if (!this.props.animalStore.join.signIn){
            console.log('false')
            return (<div> 
                        <Join></Join> 
                    </div>)
        }
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
                        <div className="col-2"><button type="button" className="btn btn-outline-success" onClick={getAllAnimals}>Show animals</button></div>
                        <Link to="add"><div className="col-2"><button type="button" className="btn btn-outline-success" >Add</button></div></Link>
                    </div>
                </div>
                <div className="container">

                    <Animals allAnimals={this.allAnimals} deleteAnimal={this.deleteAnimal} editAnimal={this.editAnimal.bind(this)}></Animals>

                </div>
            </div>

        );
    }
}

export const HomePage = HomePageComponent;