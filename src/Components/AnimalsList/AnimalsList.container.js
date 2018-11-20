import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AnimalCard } from './AnimalsList.component';
import { AnimalsActions } from '../../actions/animals.actions';


const mapStateToProps = (state) => ({
    animalStore: state.animals,
});
const mapDispatchToProps = (dispatch) =>({
    onEditAnimal: (animalId) => {
        dispatch({type: 'ADD_ID_ANIMALFOREDIT', idForEdit: animalId});
    },
    deleteAnimals: (e) => AnimalsActions.deleteAnimal(e)
});

export const Animals = withRouter(
    connect(mapStateToProps, mapDispatchToProps) (AnimalCard)
);