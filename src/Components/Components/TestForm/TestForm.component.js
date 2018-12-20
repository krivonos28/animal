import React, { Component } from 'react';
import { Field, reduxForm, propTypes} from 'redux-form';
import { MainMenu } from '../MainMenu'


export class ContactForm extends Component {
  constructor(props){
    super()
  }
  static propTypes = {
    ...propTypes
  }
  conponentWillMount(){
    
   
  }
  render() {
    console.log('contact form', propTypes)
    console.log('contact form propTypes', )
    const { handleSubmit } = this.props;
    return (
      <div>
    
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nickName">Nick Name</label>
          <Field name="nickName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <Field name="age" component="input" type="number"/>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <Field name="price" component="input" type="number"/>
        </div>
        <div>
        <label>Type</label>
        <div>
          <Field name="type" component="select">
            <option></option>
            
          </Field>
        </div>
      </div>
      
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

  ContactForm = reduxForm({
      form: 'test_contact_form',
      // initialValues: {nickName:"super",
      //               age: 24}
      
    })(ContactForm);