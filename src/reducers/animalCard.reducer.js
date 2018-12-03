const initialState = {
    editState: false,
   }

export default function animalCard(state = initialState, action) {
    switch (action.type) {
            case "CHANGE_STATE_ANIMAL_FOREDIT_TRUE":
            return{
                ...state,
                editState: true
            }
        case "SHOW":
            return{
                ...state,
                editState: false
            }
        default: return state;
    }
}