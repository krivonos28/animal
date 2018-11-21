import axios from 'axios'
    

class Actions {
    postAnimalOnServer(e) {

            e.preventDefault();
            console.log(document.querySelector('#nickname').value);
            console.log(document.querySelector('#price').value);
            console.log(document.querySelector('#age').value);
            console.log(document.querySelector('#input-type').value);
            axios.post('http://localhost:3012/animals', {
                nickname: (document.querySelector('#nickname').value).toString(),
                price: (document.querySelector('#price').value).toString(),
                age: (document.querySelector('#age').value).toString(),
                type: (document.querySelector('#input-type').value).toString(),
            })
              .then((response) => {
                setTimeout(() =>{
                   window.location.href = 'http://localhost:3000/#/'
                }, 2000)
                })
            
            document.querySelector('#nickname').value = '';
            document.querySelector('#price').value = '';
            document.querySelector('#age').value = '';
            document.querySelector('#input-type').value = '';
    }
   
}
export const AddAnimalActions = new Actions();