import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AnimalCard } from './AnimalsList.component'

const mapStateToProps = (state) => ({
    animalStore: state.animals,
});
const mapDispatchToProps = dispatch =>({
    onEditAnimal: (animalId) => {
        dispatch({type: 'ADD_ID_ANIMALFOREDIT', idForEdit: animalId});
    },
});

export const Animals = withRouter(
    connect(mapStateToProps, mapDispatchToProps) (AnimalCard)
);