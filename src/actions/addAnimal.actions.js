
import { ApiService } from "../serviceAPI/ServiceAPI"


class Actions {
    

    postAnimalOnServer(e, nickname, price, age, type) {
        e.preventDefault();
        console.log('Add animal action add anumal', e, nickname, price, age, type);

        ApiService.postAnimal(nickname, price, age, type)
            .then((response) => {
                window.location.href = `#/`
            })

    }











    // postAnimalOnServer(e) {
    //             e.preventDefault();
    //             const nickname = (document.querySelector('#nickname').value).toString();
    //             const price = (document.querySelector('#price').value).toString();
    //             const age = (document.querySelector('#age').value).toString();
    //             const type = (document.querySelector('#input-type').value).toString();

    //         ApiService.postAnimal(nickname, price, age, type)
    //           .then((response) => {
    //             window.location.href = `#/`
    //             })
    //         document.querySelector('#nickname').value = '';
    //         document.querySelector('#price').value = '';
    //         document.querySelector('#age').value = '';
    //         document.querySelector('#input-type').value = '';
    // }

}
export const AddAnimalActions = new Actions();