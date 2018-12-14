import { AddAnimalCard } from './AddAnimals.component';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { AddAnimalActions } from '../../actions/addAnimal.actions';
import { AnimalsActions } from '../../actions/animals.actions'



const mapStateToProps = (state) => ({
    animalStore: state
});
const mapDispatchToProps = (dispatch) => ({
    onAddAnimal: (name, price, age, type, event)=> {
        AddAnimalActions.postAnimalOnServer(name, price, age, type, event)
    },
    onAddTypes: () => {
        dispatch(AnimalsActions.getTypes())
    }
    });
export const AddAnimal = withRouter(connect(mapStateToProps, mapDispatchToProps)(AddAnimalCard));