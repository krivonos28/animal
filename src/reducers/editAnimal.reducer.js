const initialState = {
    idAnimalForEdit: '',
    spinner: false,
    animalForEdit : {
        type: '',
        nickName: '',
        price: '',
        age: ''
    },
    correctedAnimal : {
        type: '',
        nickName: '',
        price: '',
        age: ''
    }
}

export default function EditAnimal(state = initialState, action) {
    switch (action.type) {
        case "ADD_ID_ANIMAL_FOR_EDIT":
            return { ...state,
            idAnimalForEdit: action.payload
            }
        case "ADD_ANIMAL_FOR_EDIT":
            return {
                ...state,
                animalForEdit: action.payload
            }
        case "GET_ANIMAL_REQUEST":
            return {
                ...state,
                spinner: true
            }
        case "GET_ANIMAL_SUCCESS":
            return {
                ...state,
                spinner: false
            }
        default: return state;
    }
}