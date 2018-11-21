import axios from 'axios';

class ServiceAPI {

    getAllAnimals = () => {
        return axios.get('http://localhost:3012/animals', {
            mode: 'cors',  //tried both with and without
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache'
        })
            .then((response) => {
                return response.data;
            })
    }

    deleteAnimal = (id) => {
        return axios.delete(`http://localhost:3012/animals/${id}`)
            .then((response) => {
                console.log(response)
                return response
            })
            .then((response) => {
                debugger;
                console.log(response.data);
                
                //window.location.reload('http://localhost:3000/#/')
            }); 
    }
    getAnimal =(id) =>{
        return axios.get(`http://localhost:3012/animals/${id}`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache'
        })
    }
}
export const ApiService = new ServiceAPI();