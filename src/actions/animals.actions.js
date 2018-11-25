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
        animalsForAdd: animals
    })
    
    addAnimalsSaccess = (animals) =>({
        type: this.ADD_ANIMALS_SUCCESS,
        payload: animals
    })

    deleteAnimalSuccess = () =>({
        type: this.DELETE_ANIMAL_SUCCESS
    })

    showModalDeleteRequest = () =>({
        type: this.SHOW_MODAL_DELETE_REQUEST
    })
    showModalDeleteSuccess = () => ({
        type: this.SHOW_MODAL_DELETE_SUCCESS
    })

    showModalDelete = (e) => (dispatch) =>{
        dispatch(this.showModalDeleteRequest());
        console.log('showmodal', e);
    }

    hideModalDeleteRequest = () =>({
        type: this.HIDE_MODAL_DELETE_REQUEST
    }) 
    hideModalDelete = () => (dispatch) => {
        dispatch(this.hideModalDeleteRequest());
        console.log('hide modal')
        //dispatch(this.showModalDeleteSuccess())
    }


    loadAnimals = () =>  async (dispatch) => {
        dispatch(this.getAnimalsRequest());
        const animals = await ApiService.getAllAnimals();
        dispatch(this.getAnimalsSuccess(animals));
        console.log(animals);
        dispatch(this.addAnimalsSaccess(animals));
    }

  
    deleteAnimal = (id) => async (dispatch) => {
        console.log("delete animal")
        dispatch(this.changeAnimalsRequest());
        const res = await ApiService.deleteAnimal(id);
        dispatch(this.deleteAnimalSuccess(res))
        dispatch(this.loadAnimals());
       
        }   
    }
           


export const AnimalsActions = new Actions();