import { ApiService } from '../serviceAPI/ServiceAPI'
class Actions {
    EDIT_ANIMAL_REDIRECT_REQUEST = "EDIT_ANIMAL_REDIRECT_REQUEST";
    EDIT_ANIMAL_REDIRECT_SUCCESS = "EDIT_ANIMAL_REDIRECT_SUCCESS";
    GET_ANIMAL_REQUEST = "GER_ANIMAL_REQUEST";
    GET_ANIMAL_SUCCESS = "GER_ANIMAL_SUCCESS";
    ADD_ID_ANIMAL_FOR_EDIT = "ADD_ID_ANIMAL_FOR_EDIT";


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
    editAnimal = (id) => (dispatch) => {
        console.log(id);
        dispatch(this.editAnimalRedirectRequest())
        window.location.href = `http://localhost:3000/#/edit/${id}`
        dispatch(this.editAnimalRedirectSuccess())
        dispatch(this.addIdAnimalForEdit(id))
    }
    getAnimal = (id) => (dispatch) => {
        console.log('get animal',id)
        dispatch(this.getAnimalRequest());
        ApiService.getAnimal(id);
        dispatch(this.getAnimalSuccess())
    }

}
export const editAnimalAction = new Actions();
