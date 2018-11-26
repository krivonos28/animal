import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { JoinPage } from './JoinPage.component';
import { JoinActions } from '../../actions/join.actions'

const mapStateToProps = (state) => ({
    animalStore: state
})
const mapDispatchToProps = (dispatch) => ({
    onJoin: () => {
        console.log("action onJoin")
        dispatch (JoinActions.signIn())
    },
    onTurnonSignIn: () =>{
        dispatch(JoinActions.turnonSignIn())
    },
    onTurnonSignUp: () =>{
        dispatch(JoinActions.turnonSignUp())
    }
    
})

export const Join = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(JoinPage)
);