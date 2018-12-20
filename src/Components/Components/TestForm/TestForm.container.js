import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ContactForm } from './TestForm.component';

import { reduxForm, propTypes } from 'redux-form'


const mapStateToProps = (state) => ({
    animalTestForm: state,
    // initialValues: {nickName:"super",
    //                 age: 24}
})
console.log('wraper___________________', propTypes);
export const ContactFormComponent = withRouter(connect(mapStateToProps)(ContactForm))