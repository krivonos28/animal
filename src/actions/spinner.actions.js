class Action {
    
    SHOW_SPINNER = "SHOW_SPINNER";
    HIDE_SPINNER = "HIDE_SPINNER"
    
    showSpinnerRequest = () =>({
        type: this.SHOW_SPINNER
    })
    showSpinner = () => (dispatch) =>{
        dispatch(this.showSpinnerRequest())
    } 

    hideSpinnerRequest = () => ({
        type: this.HIDE_SPINNER
    })
    hideSpinner = () => (dispatch) =>{
        dispatch(this.hideSpinnerRequest())
    }
}

export const  SpinnerAction = new Action();