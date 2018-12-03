import React, { Component } from 'react';
import { Animals } from '../AnimalsList'
import { Join } from '../JoinList'
import { Link } from 'react-router-dom'
import { ModalWindowOnDelete } from '../Components/ModalWindowOnDelete/ModalWindowOnDelete'

class HomePageComponent extends Component {
    constructor(props) {
        super()

    }
    componentWillMount() {
        const { getAllAnimals } = this.props;
        getAllAnimals();
    }

    render() {
        //const { getAllAnimals } = this.props.animalStore.animals;
        if (!this.props.animalStore.join.signIn) {
            return (<div>
                <Join></Join>
            </div>)
        }
        const { modalDel } = this.props.animalStore.animals;
        const modalDelete = modalDel ? <ModalWindowOnDelete store = {this.props} /> : null
        return (
            <div>
                {modalDelete}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            Animals
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row addAnimal justify-content-end">
                        
                      
                        <Link to="add">
                            <div className="col-2">
                              <button type="button" className="btn btn-outline-success" >Add</button>
                            </div>
                        </Link>
                    
                    </div>
                </div>
                    <div className="container">
                    <Animals allAnimals={this.allAnimals} deleteAnimal={this.deleteAnimal}></Animals>
                </div>
            </div>

        );
    }
}

export const HomePage = HomePageComponent;