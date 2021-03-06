import React, { Component } from 'react';
import { Animals } from '../AnimalsList';
import { LoginPage } from '../Joinpage';
import { Link } from 'react-router-dom';
import { ModalWindowOnDelete } from '../Components/ModalWindowOnDelete/ModalWindowOnDelete';
import Spinner from '../Components/spinner/spinner';
import { MainMenu } from '../Components/MainMenu'

class HomePageComponent extends Component {
    constructor(props) {
        super()

    }
    componentWillMount() {
        const { getAllAnimals, getTypes, } = this.props;
        getAllAnimals();
        getTypes();
    }

    render() {
        //const { getAllAnimals } = this.props.animalStore.animals;
        if (!this.props.animalStore.join.signIn) {
            return (<div>
                <LoginPage></LoginPage>
            </div>)
        }
        const { modalDel } = this.props.animalStore.animals;
        const modalDelete = modalDel ? <ModalWindowOnDelete store = {this.props} /> : null
        return (
            <div>
                <MainMenu></MainMenu>
                <Spinner></Spinner>
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
                        
                      
                        <Link to='/animals/add'>
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