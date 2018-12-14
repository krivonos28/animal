const initialState = {
    spinner: true,
}
export default function launchSpinner (state = initialState, action) {
    switch (action.type) {
        case "SHOW_SPINNER": 
            return {
               
                spinner: true
            }
        case "HIDE_SPINNER": 
            return {
               
                spinner: false
            }
        default: return state;
    }
}