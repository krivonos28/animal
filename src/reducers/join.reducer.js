const initialState = {
    signIn: false,
    signInUp: 'signIn'
}
export default function join (state = initialState, action) {
    switch (action.type){
        case "SIGN_IN":
            return {
                ...state,
                signIn: true
            }  
        case "TURNON_SIGN_IN_REQUEST":
            return {
                ...state,
                signInUp: 'signIn'
            }  
        case "TURNON_SIGN_UP_REQUEST":
            return {
                ...state,
                signInUp: 'signUp'
        }  
        default:  return state
        
    }
}