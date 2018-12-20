import { ApiService } from '../serviceAPI/ServiceAPI';
import { SpinnerAction } from '../actions/spinner.actions'
class Actions {
    EDIT_ANIMAL_REDIRECT_REQUEST = "EDIT_ANIMAL_REDIRECT_REQUEST";
    EDIT_ANIMAL_REDIRECT_SUCCESS = "EDIT_ANIMAL_REDIRECT_SUCCESS";
    GET_ANIMAL_REQUEST = "GET_ANIMAL_REQUEST";
    GET_ANIMAL_SUCCESS = "GET_ANIMAL_SUCCESS";
    ADD_ID_ANIMAL_FOR_EDIT = "ADD_ID_ANIMAL_FOR_EDIT";
    ADD_ANIMAL_FOR_EDIT_REQUEST = "ADD_ANIMAL_FOR_EDIT_REQUEST";
    ADD_ANIMAL_FOR_EDIT = "ADD_ANIMAL_FOR_EDIT";
    ADD_ANIMAL_FOR_EDIT_SUCCESS = "ADD_ANIMAL_FOR_EDIT_SUCCESS";
    ADD_CORRECTED_ANIMAL_REQUEST = "ADD_CORRECTED_ANIMAL_REQUEST"; 
    ADD_CORRECTED_ANIMAL_SUCCESS = "ADD_CORRECTED_ANIMAL_SUCCESS";


    editAnimalRedirectRequest = () =>({
        type: this.EDIT_ANIMAL_REDIRECT_REQUEST,
    })
    editAnimalRedirectSuccess = () => ({
        type: this.EDIT_ANIMAL_REDIRECT_SUCCESS,
    })
    getAnimalRequest = () =>({
        type: this.GET_ANIMAL_REQUEST,
    })
    getAnimalSuccess = () =>({
        type: this.GET_ANIMAL_SUCCESS,
    })
    addIdAnimalForEdit = (id) => ({
        type: this.ADD_ID_ANIMAL_FOR_EDIT,
        payload: id
    })
    addAnimalForEdit = (animal) =>({
        type: this.ADD_ANIMAL_FOR_EDIT,
        payload: {
            type: animal.type,
            nickName: animal.nickname,
            price: animal.price,
            age: animal.age
        }
    })
    addCorrectedAnimalRequest = () => ({
        type: this.ADD_CORRECTED_ANIMAL_REQUEST
    })
    addCorrectedAnimalSuccess = () => ({
        type: this.ADD_CORRECTED_ANIMAL_SUCCESS
    })


    addCorrectedAnimal =(e, name, age, price, type, _id) => async (dispatch)=> {
        e.preventDefault();
        console.log('add corrected animal edt animal')
        debugger
        dispatch(this.addCorrectedAnimalRequest());
        await ApiService.editAnimal(name, age, price, type, _id);
        dispatch(this.addCorrectedAnimalSuccess());
        
    }
    getAnimal = (id) => async (dispatch) => {
        dispatch(SpinnerAction.showSpinner());
        console.log('get animal', id);
        dispatch(this.getAnimalRequest());//lounch spinner
        const response = await ApiService.getAnimal(id);
        console.log('edit animal action', response[0])
        dispatch(this.addAnimalForEdit(response[0]));
        dispatch(this.getAnimalSuccess());//stop spinner
        dispatch(SpinnerAction.hideSpinner());

    }
    editAnimal = (id) => async (dispatch) => {
        console.log(id);
        dispatch(this.editAnimalRedirectRequest());
        dispatch(this.editAnimalRedirectSuccess());
        await dispatch(this.addIdAnimalForEdit(id));
        console.log('edit animal')
        dispatch(this.getAnimal(id));
        //window.location.href = `#/edit/${id}`
        
    }
    addAnimalForEditInStore = (response) => (dispatch) =>{
        console.log('hey');
    }

}
export const editAnimalAction = new Actions();
