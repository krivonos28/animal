import axios from 'axios'

class Actions {
    GET_ANIMALS_REQUEST = "GET_ANIMALS_REQUEST";
    GET_ANIMALS_SUCCESS = "GET_ANIMALS_SUCCESS";
    UPDATE_ANIMALS_REQUEST = "UPDATE_ANIMALS_REQUEST";
    UPDATE_ANIMALS_SUCCESS = "UPDATE_ANIMALS_SUCCESS";

    getAnimalsRequest = () => ({
        type: this.GET_ANIMALS_REQUEST,
    })

    getAnimalsSuccess = animals => ({
        type: this.GET_ANIMALS_SUCCESS,
        animalsForAdd: animals
    })



    loadAnimals = () =>  async (dispatch) => {
        console.log(11111);
        dispatch(this.getAnimalsRequest());
        const animals = this.loadAminalsApi();
        dispatch(this.getAnimalsSuccess(animals));
    }

    loadAnimalsApi = async () => {
        return axios.get('http://localhost:3012/animals', {
            mode: 'cors',  //tried both with and without
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache'
        })
            .then((response) => {
                //debugger
                let animals = response.data
                this.props.onAddAnimal(animals)
                console.log(this.props.animalStore)
            })
    }

}

export const AnimalsActions = new Actions();