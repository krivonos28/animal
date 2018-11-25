import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { HomePage } from './HomePage.component';
import { AnimalsActions } from '../../actions/animals.actions';

const mapStateToProps = (state) => ({
    animalStore: state,
});
const mapDispatchToProps = dispatch => ({
    onEditAnimal: (animalId) => {
        dispatch({type: 'ADD_ID_ANIMALFOREDIT', idForEdit: animalId});
    },
    getAllAnimals: () => dispatch(AnimalsActions.loadAnimals()),
    getAnimalsApiRequest: () => AnimalsActions.loadAnimalsApi(),
    onHideModalDelete: () => {
        dispatch(AnimalsActions.hideModalDelete())
    },
    deleteAnimal: (e) => {
        dispatch(AnimalsActions.deleteAnimal(e.currentTarget.dataset.id));
    },
   
});

export const Home = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(HomePage)
);