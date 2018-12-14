import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { editAnimalAction } from '../../actions/editAnimal.action';
import { AddEditComponent } from './AddEdit.component'

const mapStateToProps  = (state) => ({
    aniamls: state.editAnim
})

const mapDispatchToProps = (dispatch) => ({
    getOneAnimal: (id) => dispatch(editAnimalAction.getAnimal(id)),
    
})
export const AddEditAnimalCardComponent = withRouter (
    connect(mapStateToProps, mapDispatchToProps)(AddEditComponent)
)