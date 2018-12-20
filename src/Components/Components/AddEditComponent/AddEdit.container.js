import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { editAnimalAction } from '../../../actions/editAnimal.action';
import { AddEditComponent } from './AddEdit.component';
import { AnimalsActions } from '../../../actions/animals.actions'

const mapStateToProps  = (state) => ({
    aniamls: state.editAnimal, 
    types : state.animals.types
})

const mapDispatchToProps = (dispatch) => ({
    getOneAnimal: (id) => dispatch(editAnimalAction.getAnimal(id)),
    //onAddAnimal: () => dispatch (),
    onGetTypes: ()=> dispatch (AnimalsActions.getTypes()),
    
})
export const AddEditAnimalCardComponent = withRouter (
    connect(mapStateToProps, mapDispatchToProps)(AddEditComponent)
)