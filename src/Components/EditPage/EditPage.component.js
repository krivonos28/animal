import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Components/spinner/spinner';
import { AddEditAnimalCardComponent} from '../Components/AddEditComponent';



class EditAnimalList extends Component {
    constructor(props){
        super()
       this.id =  window.location.pathname.replace('/animals/','').replace('/edit','');
        
    }
    componentWillMount = () =>{

      
    }
    
    componentDidMount = async() => {
       
        //id =  id.replace('/edit', '');
        console.log("edit page", window.location.pathname);
        console.log("edit pagge", this.id)
        await this.props.onGetTypes();
        this.props.getOneAnimal(this.id);

    }
    render() {
        console.log(window.location.hash)
        console.log('edit list component props', this.props)
        const spinnerLounch = this.props.animalStore.launchSpinner.spinner
        console.log('spinner', this.props.animalStore.launchSpinner)
        const element = <div><Link to='/animals/'>Home</Link>
                            <AddEditAnimalCardComponent animal={this.props.animalStore.editAnimal.animalForEdit}
                                                        types = {this.props.animalStore.animals.types}
                                                        id = {this.id}
                                                        onAddAnimal = {(e, name, age, price, type, id)=>this.props.onAddCorrectrAnimal(e, name, age, price, type, id)}></AddEditAnimalCardComponent>
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