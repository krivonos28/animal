import { ApiService } from '../serviceAPI/ServiceAPI';

class Actions {
    GET_ANIMALS_REQUEST = "GET_ANIMALS_REQUEST";
    CHANGE_ANIMALS_REQUEST = "CHANGE_ANIMALS_REQUEST";
    GET_ANIMALS_SUCCESS = "GET_ANIMALS_SUCCESS";
    UPDATE_ANIMALS_REQUEST = "UPDATE_ANIMALS_REQUEST";
    UPDATE_ANIMALS_SUCCESS = "UPDATE_ANIMALS_SUCCESS";
    ADD_ANIMALS_SUCCESS = "ADD_ANIMALS_SUCCESS";
    DELETE_ANIMAL_SUCCESS ="DELETE_ANIMAL_SUCCESS";
    SHOW_MODAL_DELETE_REQUEST = "SHOW_MODAL_DELETE_REQUEST" 
    SHOW_MODAL_DELETE_SUCCESS = "SHOW_MODAL_DELETE_SUCCESS" 
    HIDE_MODAL_DELETE_REQUEST = "HIDE_MODAL_DELETE_REQUEST"
    HIDE_MODAL_DELETE_SUCCESS = "HIDE_MODAL_DELETE_SUCCESS"

    getAnimalsRequest = () => ({
        type: this.GET_ANIMALS_REQUEST,
    })

    changeAnimalsRequest = () => ({
        type: this.CHANGE_ANIMALS_REQUEST,
    })

    getAnimalsSuccess = animals => ({
        type: this.GET_ANIMALS_SUCCESS,
        animalsForAdd: animals,
    })
    
    addAnimalsSaccess = (animals) =>({
        type: this.ADD_ANIMALS_SUCCESS,
        payload: animals
    })

    loadAnimals = () =>  async (dispatch) => {
        dispatch(this.getAnimalsRequest());
        const animals = await ApiService.getAllAnimals();
        dispatch(this.getAnimalsSuccess(animals));
        dispatch(this.addAnimalsSaccess(animals));
    }
    }
           


export const AnimalsActions = new Actions();