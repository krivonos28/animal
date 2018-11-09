import React, {Component} from 'react'
import{Link} from "react-router-dom"
import axios from 'axios'

class AddAnimalForm extends Component{
constructor(props){
    super()

} 
postAnimalOnServer(e) {
    console.time( 'srat')
    e.preventDefault()
    console.log(document.querySelector('#nickname').value)
    console.log(document.querySelector('#price').value)
    console.log(document.querySelector('#age').value)
    console.log(document.querySelector('#input-type').value)
    console.timeEnd('end');
    axios.post('http://localhost:3012/animals', {
      nickname: (document.querySelector('#nickname').value).toString(),
      price: (document.querySelector('#price').value).toString(),
      age: (document.querySelector('#age').value).toString(),
      type: (document.querySelector('#input-type').value).toString()
    })
      .then((response) => {
        console.log('hey', response);
        this.allAnimals.push(response.data);
        this.setState({counter: this.state.counter + 1})
        })
     
    document.querySelector('#nickname').value = '';
    document.querySelector('#price').value = '';
    document.querySelector('#age').value = '';
    document.querySelector('#input-type').value = '';
    
  }
render(){
    return (
        <div>
    <Link to='/'>Home</Link>
    
    <div className="container">
        <form onSubmit ={this.postAnimalOnServer.bind(this)}>
            <div className="form-row">
                <div className="form-group col-3">
                    <label htmlFor="nickname">Nickname</label>
                    <input type="text" className="form-control" id="nickname" placeholder="Nickname"></input>
                </div>
                <div className="form-group col-3">
                    <label htmlFor="age">Age</label>
                    <input type="number" className="form-control" id="age" placeholder="Age"></input>
                </div>
                <div className="form-group col-3">
                    <label htmlFor="price">Price</label>
                    <input type="number" className="form-control" id="price" placeholder="Price"></input>
                </div>
                <div className="form-group col-m3">
                    <label htmlFor="input-type">Breed</label>
                    <select id="input-type" className="form-control">
                       
                        <option value="tiger">tiger</option>
                        <option value="panda">panda</option>
                        <option value="lion">lion</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    </div></div>

    )
}
}
export default AddAnimalForm;