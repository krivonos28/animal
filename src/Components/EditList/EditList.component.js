import { EditAnimalComponent } from '../Components/EditList'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditAnimalList extends Component {
    componentWillMount(){
        console.log(this.props);
        const { getOneAnimal } = this.props;
        const id = this.props.animalStore.editAnimal.idAnimalForEdit;
        console.log('----------------', id)
        getOneAnimal(id);
        
    }
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <EditAnimalComponent></EditAnimalComponent>
            </div>
        )
    }
}
export const EditAnimalCard = EditAnimalList;