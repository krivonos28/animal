import { ApiService } from '../serviceAPI/ServiceAPI';
import { AnimalsActions }from './animals.actions'

class Actions {
    DELETE_ANIMAL_SUCCESS ="DELETE_ANIMAL_SUCCESS";
    SHOW_MODAL_DELETE_REQUEST = "SHOW_MODAL_DELETE_REQUEST";
    SHOW_MODAL_DELETE_SUCCESS = "SHOW_MODAL_DELETE_SUCCESS";
    ADD_ANIMAL_FOR_DELETE_IN_STORE_REQUEST = "ADD_ANIMAL_FOR_DELETE_IN_STORE_REQUEST";
    ADD_ANIMAL_FOR_DELETE_IN_STORE_SUCCESS = "ADD_ANIMAL_FOR_DELETE_IN_STORE_SUCCESS";
    HIDE_MODAL_DELETE_REQUEST = "HIDE_MODAL_DELETE_REQUEST";
    HIDE_MODAL_DELETE_SUCCESS = "HIDE_MODAL_DELETE_SUCCESS";

    deleteAnimalSuccess = () =>({
        type: this.DELETE_ANIMAL_SUCCESS
    })

    showModalDeleteRequest = () =>({
        type: this.SHOW_MODAL_DELETE_REQUEST
    })

    showModalDeleteSuccess = () => ({
        type: this.SHOW_MODAL_DELETE_SUCCESS
    })

    showModalDelete = (id) => (dispatch) =>{
        dispatch(this.showModalDeleteRequest());
        dispatch(this.showModalDeleteSuccess());
       
    }
    addAnimalForDeleteInStoreRequest = () =>({
        type:  this.ADD_ANIMAL_FOR_DELETE_IN_STORE_REQUEST
    })
    addAnimalForDeleteInStoreSuccess = (animal) =>({
        type:  this.ADD_ANIMAL_FOR_DELETE_IN_STORE_SUCCESS,
        payload: animal
    });

    addAnimalForDeleteInStore = (id) => async (dispatch)=>{
        dispatch(this.addAnimalForDeleteInStoreRequest());
        const response = await this.getAnimal(id);
        dispatch(this.addAnimalForDeleteInStoreSuccess(response));
        dispatch(this.showModalDelete(id));
    }

    getAnimal =  async (id) => {
        const response = await ApiService.getAnimal(id);
        return response
    }

    hideModalDeleteRequest = () =>({
        type: this.HIDE_MODAL_DELETE_REQUEST
    })
    
    hideModalDelete = () => (dispatch) => {
        dispatch(this.hideModalDeleteRequest());
     
    }

    deleteAnimal = (id) => async (dispatch) => {
        await ApiService.deleteAnimal(id);
        dispatch(this.hideModalDelete());
        dispatch(this.deleteAnimalSuccess());
        dispatch(AnimalsActions.loadAnimals())
        }   
    }
           
export const deleteAnimal = new Actions();