import { AddAnimalCard } from './AddAnimals.component';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { AddAnimalActions } from '../../actions/addAnimal.actions';



const mapStateToProps = (state) => ({
    addAnimalStore: state.animals
});
const mapDispatchToProps = (dispatch) => ({
    onAddAnimal: (e)=> {
        AddAnimalActions.postAnimalOnServer(e)
    }
});
export const AddAnimal = withRouter(connect(mapStateToProps, mapDispatchToProps)(AddAnimalCard));