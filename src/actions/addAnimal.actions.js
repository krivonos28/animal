
import { ApiService } from "../serviceAPI/ServiceAPI"


class Actions {
    

    postAnimalOnServer(nickname, price, age, type, e) {
        e.preventDefault();
        console.log('Add animal action add anumal', nickname, price, age, type, e);

        ApiService.postAnimal(nickname, price, age, type)
            .then((response) => {
                console.log('added animal')
                window.location.href = `#/`
            })
    }
}
export const AddAnimalActions = new Actions();