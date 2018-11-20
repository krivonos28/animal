const initialState = {
    animals: [],
    idAnimalFroEdit: [],
    addConfimMessage: '',
    animalForEdit: '',
    initialized: false,
    updating: false,
}

export default function animals(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_ANIMALS": 
        return {
            ...state,   
            updating: true,
        }
        case "ADD_ANIMALS_SUCCESS":
        return {
                ...state,
                animals: [...action.payload]
            }
        case "ADD_ONE_ANIMAL":
            return {
                ...state,
                animals: [...state.animals, action.animal]
            }
        case 'ADD_ID_ANIMALFOREDIT':
            return {
                ...state,
                idAnimalForEdit: action.idForEdit
            }
        case 'ADD_ANIMAL_FOR_EDIT':
            return {
                ...state,
                animalForEdit: action.animal
            }
        case "ADD_ANIMAL_GOOD":
            return {
                ...state,
                addConfimMessage: action.confirmMessage
            }
        case "PRESS_ADD":
            return {
                ...state,
                addConfimMessage: action.confirmMessage
            }
        default: return state;
    }
}