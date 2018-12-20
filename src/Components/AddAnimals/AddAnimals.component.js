import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AddEditAnimalCardComponent} from '../Components/AddEditComponent';

class AddAnimalList extends Component {
    constructor(props){
        super()
    }
   
    render() {
            return (
            <div>
                <Link to='/animals'>Home</Link>
                <AddEditAnimalCardComponent props={this.props}></AddEditAnimalCardComponent>
            </div>
        )
    }
}
export const AddAnimalCard = AddAnimalList;