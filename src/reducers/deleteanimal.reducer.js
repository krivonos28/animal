const initialstate = {
    animalForDelete: ''
}
export default function deleteAnimmal (state = initialstate, action){
    switch (action.type){
        case "ADD_ANIMAL_FOR_DELETE_IN_STORE_SUCCESS":
            return{
                ...state,
                animalForDelete: action.payload
            }
        default: return state
    }
}