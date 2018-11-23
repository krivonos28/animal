import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { EditAnimalCard } from './EditList.component'
import { editAnimalAction } from '../../actions/editAnimal.action'


const mapStateToProps = (state) => ({
    animalStore: state
})

const mapDispatchToProps = (dispatch) => ({
    getOneAnimal: (id) => dispatch(editAnimalAction.getAnimal(id)),
    onAddCorrectedAnimal: (e, name, age, price, type, id) => dispatch(editAnimalAction.addCorrectedAnimal(e, name, age, price, type,id))
})
export const EditAnimal = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(EditAnimalCard)
)