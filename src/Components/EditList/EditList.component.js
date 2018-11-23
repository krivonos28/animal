import { EditAnimalComponent } from '../Components/EditList'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Components/spinner';

class EditAnimalList extends Component {
    componentWillMount(){
        console.log(this.props);
        const { getOneAnimal } = this.props;
        const id = this.props.animalStore.editAnimal.idAnimalForEdit;
        console.log('----------------', id)
        getOneAnimal(id);
        
    }
    render() {
        const spinnerLounch = this.props.animalStore.editAnimal.spinner
        const element = <div><Link to='/'>Home</Link>
                            <EditAnimalComponent animalForEdit = {this.props}></EditAnimalComponent>
                            </div>
        const spinner = <div><Spinner></Spinner></div>
        const content = (spinnerLounch ? spinner : element)
        return (
            <div>
                
                {content}
            </div>
        )
    }
}
export const EditAnimalCard = EditAnimalList;