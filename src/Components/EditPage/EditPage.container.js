import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { EditAnimalCard } from './EditPage.component'
import { editAnimalAction } from '../../actions/editAnimal.action'
import { AnimalsActions } from '../../actions/animals.actions'
import { SpinnerAction } from '../../actions/spinner.actions'


const mapStateToProps = (state) => ({
    animalStore: state
})

const mapDispatchToProps = (dispatch) => ({
   //getOneAnimal: (id) => dispatch(editAnimalAction.getAnimal(id)),
    onAddCorrectrAnimal: (e, name, age, price, type, id) => dispatch(editAnimalAction.addCorrectedAnimal(e, name, age, price, type,id)),
    onGetTypes:     () => dispatch(AnimalsActions.getTypes()),
    onShowSpinner:  () => dispatch(SpinnerAction.showSpinner()),
    onHideSpinner:  () => dispatch(SpinnerAction.hideSpinner()),
   
})
export const EditAnimal = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(EditAnimalCard)
)