import { TestPage } from './TestPage.Component';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    animals: state
}) 
export const TestPageComponent = withRouter(connect(mapStateToProps)(TestPage))