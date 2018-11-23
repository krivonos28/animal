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
    editAnimal = ( name, age, price, type, id) => {
        return axios.put('http://localhost:3012/animals/', {
            id: id,
            nickname: name,
            price: price,
            age: age,
            type: type
        })
    }
    getAnimal =(id) =>{
        //debugger
        return axios.get(`http://localhost:3012/animals/${id}`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache'
        })
        .then((response) => {
           const animal = response.data
           return animal
        })
        .then((animal) => animal)
        
    }
}
export const ApiService = new ServiceAPI();