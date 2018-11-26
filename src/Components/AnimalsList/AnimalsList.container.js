import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AnimalCard } from './AnimalsList.component';
//import { AnimalsActions } from '../../actions/animals.actions';
import { editAnimalAction } from '../../actions/editAnimal.action';
import { deleteAnimal } from '../../actions/deleteAnimal'


const mapStateToProps = (state) => ({
    animalStore: state.animals,
});
const mapDispatchToProps = (dispatch) =>({
    onEditAnimal: (e) => {
        dispatch(editAnimalAction.editAnimal(e.currentTarget.dataset.id));
    },
    // deleteAnimal: (id) => {
    //     dispatch(deleteAnimal.deleteAnimal(id));
    // },
    onAddAnimalForDeleteInStore: (e) => {
        dispatch(deleteAnimal.addAnimalForDeleteInStore(e.currentTarget.dataset.id))
    },
  
});

export const Animals = withRouter(
    connect(mapStateToProps, mapDispatchToProps) (AnimalCard)
);