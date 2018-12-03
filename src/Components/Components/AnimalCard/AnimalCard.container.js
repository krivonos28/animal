import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AnimalCard } from './AnimalCard.component';
import { editAnimalAction } from '../../../actions/editAnimal.action';
import { deleteAnimal } from '../../../actions/deleteAnimal'


const mapStateToProps = (state) => ({
    animalStore: state,
});
const mapDispatchToProps = (dispatch) =>({
    onEditAnimal: () => {
        dispatch(editAnimalAction.addAnimalForEditInStore());
    },
    deleteAnimal: (id) => {
        dispatch(deleteAnimal.deleteAnimal(id));
    },
    onAddAnimalForDeleteInStore: (e) => {
        dispatch(deleteAnimal.addAnimalForDeleteInStore(e.currentTarget.dataset.id))
    },
    onChangeStateTrue: () => {
        dispatch(editAnimalAction.changeStateTrue());
    },
    onChangeStateFolse: () => {
        dispatch(editAnimalAction.changeStateFalse());
    },
    onAddCorrectedAnimal: (e, name, age, price, type, id) => {dispatch(editAnimalAction.addCorrectedAnimal(e, name, age, price, type,id))
},
  
});

export const AnimalCardRow = withRouter(
    connect(mapStateToProps, mapDispatchToProps) (AnimalCard)
);