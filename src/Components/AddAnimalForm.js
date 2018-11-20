// import React, {Component} from 'react'
// import{Link, withRouter} from "react-router-dom"
// import axios from 'axios'
// import { connect } from 'react-redux'

// class AddAnimalForm extends Component{
// constructor(props){
//     super() 
//    // this.confirm = false;

// } 
// componentWillMount(){
//     this.props.onWiiMount()
// }
// postAnimalOnServer(e) {

//     e.preventDefault();
//     console.log(document.querySelector('#nickname').value);
//     console.log(document.querySelector('#price').value);
//     console.log(document.querySelector('#age').value);
//     console.log(document.querySelector('#input-type').value);
//     axios.post('http://localhost:3012/animals', {
//       nickname: (document.querySelector('#nickname').value).toString(),
//       price: (document.querySelector('#price').value).toString(),
//       age: (document.querySelector('#age').value).toString(),
//       type: (document.querySelector('#input-type').value).toString(),
//     })
//       .then((response) => {
//         if (response.status === 200){
//             this.props.onAddOneAnimal(response.data)
//         }
//         setTimeout(()=>{
//             this.props.history.go(-1)
//         }, 2000)
//         })
    
//     document.querySelector('#nickname').value = '';
//     document.querySelector('#price').value = '';
//     document.querySelector('#age').value = '';
//     document.querySelector('#input-type').value = '';
    
//   }
// render(){
    // return (
    //     <div>
    // <Link to='/'>Home</Link> 
    // <div className="container">
    //     <form onSubmit ={this.postAnimalOnServer.bind(this)}>
    //         <div className="form-row">
    //             <div className="form-group col-3">
    //                 <label htmlFor="nickname">Nickname</label>
    //                 <input type="text" className="form-control" id="nickname" placeholder="Nickname"></input>
    //             </div>
    //             <div className="form-group col-3">
    //                 <label htmlFor="age">Age</label>
    //                 <input type="number" className="form-control" id="age" placeholder="Age"></input>
    //             </div>
    //             <div className="form-group col-3">
    //                 <label htmlFor="price">Price</label>
    //                 <input type="number" className="form-control" id="price" placeholder="Price"></input>
    //             </div>
    //             <div className="form-group col-m3">
    //                 <label htmlFor="input-type">Breed</label>
    //                 <select id="input-type" className="form-control">               
    //                     <option value="5bed209ecb2acfe0ac5bc720">tiger</option>
    //                     <option value="5bed209ecb2acfe0ac5bc722">panda</option>
    //                     <option value="5bed1fbecb2acfe0ac5bc6cc">lion</option>
    //                 </select>
    //             </div>
    //         </div>
    //         <button type="submit" className="btn btn-primary">Submit</button>{this.props.animalStore.addConfimMessage}
            
    //     </form>

    // </div></div>

//     )
// }
// }
// export default withRouter(connect(
//     state => ({animalStore: state}),
//     dispatch =>({
//         onAddOneAnimal: (animals)=>{
//            // dispatch({type: 'ADD_ONE_ANIMAL', animal: animals})
            
//             dispatch({type: 'ADD_ANIMAL_GOOD', confirmMessage: "good" })
//             },
//         onWiiMount:()=>{
//             dispatch({type: 'PRESS_ADD', confirmMessage: "press add"})
//         }
//     })
// )(AddAnimalForm));