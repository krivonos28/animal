import axios from 'axios'
import ApiService from "../serviceAPI/ServiceAPI"
    

class Actions {
    postAnimalOnServer(e) {
                const nickname = (document.querySelector('#nickname').value).toString();
                const price = (document.querySelector('#price').value).toString();
                const age = (document.querySelector('#age').value).toString();
                const type = (document.querySelector('#input-type').value).toString();
            
            ApiService.postAnimal(nickname, price, age, type)
              .then((response) => {
                setTimeout(() =>{
                   window.location.href = 'http://localhost:3000/#/'
                }, 1000)
                })
            
            document.querySelector('#nickname').value = '';
            document.querySelector('#price').value = '';
            document.querySelector('#age').value = '';
            document.querySelector('#input-type').value = '';
    }
   
}
export const AddAnimalActions = new Actions();