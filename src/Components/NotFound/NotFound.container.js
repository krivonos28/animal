import { NotFound } from './NotFound.component';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    animalStore: state
});
const mapDispatchToProps = (dispatch) =>({

});


export const NotFoundPage = withRouter (connect (mapStateToProps, mapDispatchToProps) )(NotFound)
