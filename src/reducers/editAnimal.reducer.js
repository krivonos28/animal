const initialState = {
    idAnimalForEdit: ''
}

export default function EditAnimal(state = initialState, action) {
    switch (action.type) {
        case "ADD_ID_ANIMAL_FOR_EDIT":
            return { ...state,
            idAnimalForEdit: action.payload
            }
        default: return state;
    }
}