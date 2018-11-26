class Actions {
    SIGN_IN_UP = "SIGN_IN";
    TURNON_SIGN_IN_REQUEST = "TURNON_SIGN_IN_REQUEST";
    TURNON_SIGN_IN_SUCCESS = "TURNON_SIGN_IN_SUCCESS";
    TURNON_SIGN_UP_REQUEST = "TURNON_SIGN_UP_REQUEST";
    TURNON_SIGN_UP_SUCCESS = "TURNON_SIGN_UP_SUCCESS";

signIn = () => ({
    type: this.SIGN_IN
})

turnonSignInRequest = () => ({
    type: this.TURNON_SIGN_IN_REQUEST
})
turnonSignInSuccess = () => ({
    type: this.TURNON_SIGN_IN_SUCCESS
})

turnonSignIn =() => (dispatch) => {
    dispatch(this.turnonSignInRequest());
    dispatch(this.turnonSignInSuccess());
}

turnonSignUpRequest = () => ({
    type: this.TURNON_SIGN_UP_REQUEST
})
turnonSignUpSuccess = () => ({
    type: this.TURNON_SIGN_UP_SUCCESS
})

turnonSignUp = () => (dispatch) => {
    dispatch(this.turnonSignUpRequest());
    dispatch(this.turnonSignUpSuccess());
}




}
export const JoinActions = new Actions();