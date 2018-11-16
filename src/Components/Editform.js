import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'



class EditForm extends Component {
    constructor(props) {
        super()
    }
    componentWillMount() {
        console.log(this.props.animalState.idAnimalForEdit)
        axios.get(`http://localhost:3012/animals/${this.props.animalState.idAnimalForEdit}`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache'
        })
            .then((response) => {
                console.log(response)

                this.props.onEditAnimalForEdit(response.data);
                console.log(this.props.animalState.animalForEdit[0])
                document.querySelector('#nickname').value = this.props.animalState.animalForEdit[0].nickname;
                document.querySelector('#age').value = this.props.animalState.animalForEdit[0].age;
                document.querySelector('#price').value = this.props.animalState.animalForEdit[0].price;
                document.querySelector('#input-type').value = this.props.animalState.animalForEdit[0].typesName[0].typeId;
                return response;
            })
            .catch((error) => console.log(error));
    }
    editAnimalOnServer(e) {
        e.preventDefault();
        axios.put('http://localhost:3012/animals/', {
            id: this.props.animalState.idAnimalForEdit,
            nickname: (document.querySelector('#nickname').value),
            price: (document.querySelector('#price').value),
            age: (document.querySelector('#age').value),
            type: (document.querySelector('#input-type').value)
        })
            .then((response) => {
                setTimeout(() => {
                    this.props.history.push('/')
                }, 2000)
            })

    }
    render() {

        return (
            <div>
                <Link to='/'>Home</Link>

                <div className="container">
                    <form onSubmit={this.editAnimalOnServer.bind(this)}>
                        <div className="form-row">
                            <div className="form-group col-3">
                                <label htmlFor="nickname">Nickname</label>
                                <input type="text" className="form-control" id="nickname" placeholder="Nickname" ></input>
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="age">Age</label>
                                <input type="number" className="form-control" id="age" placeholder="Age" ></input>
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="price">Price</label>
                                <input type="number" className="form-control" id="price" placeholder="Price" ></input>
                            </div>
                            <div className="form-group col-m3">
                                <label htmlFor="input-type">Breed</label>
                                <select id="input-type" className="form-control">
                                    <option value="5bed209ecb2acfe0ac5bc720">Tiger</option>
                                    <option value="5bed209ecb2acfe0ac5bc722">Panda</option>
                                    <option value="5bed1fbecb2acfe0ac5bc6cc">Lion</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div></div>

        )
    }
}
export default withRouter(connect(
    state => ({ animalState: state }),
    dispatch => ({
        onEditAnimalForEdit: (animalForEdit => {
            dispatch({ type: "ADD_ANIMAL_FOR_EDIT", animal: animalForEdit })
        })
    })


)(EditForm))