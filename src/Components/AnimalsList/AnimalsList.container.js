import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AnimalCard } from './AnimalsList.component';
import { AnimalsActions } from '../../actions/animals.actions';
import { editAnimalAction } from '../../actions/editAnimal.action'


const mapStateToProps = (state) => ({
    animalStore: state.animals,
});
const mapDispatchToProps = (dispatch) =>({
    onEditAnimal: (e) => {
        dispatch(editAnimalAction.editAnimal(e.currentTarget.dataset.id));
    },
    deleteAnimal: (e) => {
        dispatch(AnimalsActions.deleteAnimal(e.currentTarget.dataset.id));
    },
    onShowModalDelete: () => {
        dispatch(AnimalsActions.showModalDelete())
    },
    onHideModalDelete: () => {
        dispatch(AnimalsActions.hideModalDelete())
    }
});

export const Animals = withRouter(
    connect(mapStateToProps, mapDispatchToProps) (AnimalCard)
);