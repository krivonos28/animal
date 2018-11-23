import React, { Component } from 'react';
import { Animals } from '../AnimalsList'
import { Join } from '../JoinList'
import { Link } from 'react-router-dom'
import { AddAnimal} from '../AddAnimalsList'
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import ModalWindowOnDelete from '../Components/ModalWindowOnDelete/ModalWindowOnDelete'

class HomePageComponent extends Component {
    constructor(props) {
        super()

    }
    componentWillMount() {
        console.log(this.props);
        const { getAllAnimals } = this.props;
        getAllAnimals();
    }

    render() {
        const { getAllAnimals } = this.props.animalStore.animals;
        console.log(this.props.animalStore.join.signIn)
        if (!this.props.animalStore.join.signIn) {
            console.log('false')
            return (<div>
                <Join></Join>
            </div>)
        }
        debugger
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

                    <Animals allAnimals={this.allAnimals} deleteAnimal={this.deleteAnimal}></Animals>

                </div>
                {/* <div className="container" id="container">
                            <ModalWindowOnDelete  animalstore={this.props}></ModalWindowOnDelete></div> */}
            </div>

        );
    }
}

export const HomePage = HomePageComponent;