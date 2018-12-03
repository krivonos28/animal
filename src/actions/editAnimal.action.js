import { ApiService } from '../serviceAPI/ServiceAPI'
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
    CHANGE_STATE_ANIMAL_FOREDIT_TRUE = "CHANGE_STATE_ANIMAL_FOREDIT_TRUE";
    CHANGE_STATE_ANIMAL_FOREDIT_FALSE = "CHANGE_STATE_ANIMAL_FOREDIT_FALSE";


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




    changeStateAnimalEditTrue = () => ({
        type: this.CHANGE_STATE_ANIMAL_FOREDIT_TRUE
    })
    changeStateTrue = () => (dispatch) =>{
        dispatch(this.changeStateAnimalEditTrue());
    }

    addCorrectedAnimal =(e, name, age, price, type, _id) => async (dispatch)=> {
        console.log(e, name, age, price, type, _id);
        e.preventDefault();
        dispatch(this.addCorrectedAnimalRequest());
        await ApiService.editAnimal(name, age, price, type, _id);
        dispatch(this.addCorrectedAnimalSuccess());
        //window.location.href = `#/`;
}

editAnimal = (id) => (dispatch) => {
        dispatch(this.editAnimalRedirectRequest());
        window.location.href = `#/edit/${id}`
        dispatch(this.editAnimalRedirectSuccess());
        dispatch(this.addIdAnimalForEdit(id));
    }
 
    addAnimalForEditInStore = (response) => (dispatch) =>{
    }
 
    getAnimal = (id) => async (dispatch) => {
        dispatch(this.getAnimalRequest());//lounch spinner
        const response = await ApiService.getAnimal(id);
        dispatch(this.addAnimalForEdit(response[0]));
        dispatch(this.getAnimalSuccess());//stop spinner
    }

}
export const editAnimalAction = new Actions();
