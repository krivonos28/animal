import React, { Component } from 'react';
import { MainMenu } from '../Components/MainMenu';
import { ContactFormComponent } from '../Components/TestForm';
const initValue ={
    nickName: "initname"
}
export class TestPage extends Component{
    handleSubmit = (value) => {
        console.log('===============',value)
    }

    render() {
        console.log('------test page component', this.props)
        console.log('--------------', ContactFormComponent.propTypes)
        return(
            <div>
                <MainMenu></MainMenu>
                <div>This is Test Page</div>
                <ContactFormComponent onSubmit ={this.handleSubmit}  initialValues={{nickName:"jsafhdkljh"}}></ContactFormComponent>
            </div>
        )
    }
}