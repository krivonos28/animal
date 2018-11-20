const initialState = {
    signIn: false
}
export default function join (state = initialState, action) {
    switch (action.type){
        case "SIGN_IN":
            return {
                ...state,
                signIn: true
            }    
        default: {
        console.log("default state")
        return state
        }
    }
}