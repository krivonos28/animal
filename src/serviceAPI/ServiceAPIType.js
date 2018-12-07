import axios from 'axios';

class ServiceAPI {

    getTypes = () => {
        console.log("get types service api type")
        return axios.get('http://localhost:3012/types', {
            mode: 'cors',  //tried both with and without
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache'
        })
            .then((response) => {
                return response.data;
            })
    }  
    
//     postAnimal = (nickname, price, age, type) =>{
//         return axios.post('http://localhost:3012/animals', {
//         nickname: nickname,
//         price: price,
//         age: age,
//         type: type,
//         })
//         .then ((response) => {
//             console.log ('service api ================', response);
//             return response;
//         }
//         );
//     }

//     deleteAnimal = (id) => {
//         return axios.delete(`http://localhost:3012/animals/${id}`, {
//             _id: id
//         })
//             .then((response) => {
//                 console.log(response)
//                 return response
//             })
//             .then((response) => {
//                 console.log(response.data);
                
//                 //window.location.reload('http://localhost:3000/#/')
//             }); 
//     }
//     editAnimal = ( name, age, price, type, id) => {
//         return axios.put('http://localhost:3012/animals/', {
//             _id: id,
//             nickname: name,
//             price: price,
//             age: age,
//             type: type
//         })
//     }
//     getAnimal =(id) =>{
//         return axios.get(`http://localhost:3012/animals/${id}`, {
//             mode: 'cors',
//             method: 'GET',
//             credentials: 'include',
//             cache: 'no-cache'
//         })
//         .then((response) => {
//            const animal = response.data
//            return animal
//         })
//         .then((animal) => animal)
        
//     }
}
export const ApiServiceType = new ServiceAPI();