const initialState = {
    animals: [],
    idAnimalFroEdit: [],
    addConfimMessage: '',
    animalForEdit: '',
    initialized: false,
    updating: false,
    modalDel: false,
    types : []
}

export default function animals(state = initialState, action) {
    switch (action.type) {
        // case "UPDATE_ANIMALS": 
        // return {
        //     ...state,   
        //     updating: true,
        // }
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
        case "SHOW_MODAL_DELETE_REQUEST":
            return {
                ...state,
                modalDel: true
            }
        case "HIDE_MODAL_DELETE_REQUEST":
        return {
            ...state,
            modalDel: false
        }
        case "GET_TYPES_SUCCESS":
            return {
                ...state,
                types: action.payload
            }
        default: return state;
    }
}