import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddEditAnimalList extends Component {
    constructor (props){
        super()
        this.state ={
                nickname:   '',
                age:        '',
                price:      '',
                type:       ''
            
        }}
    handelFormChange = (event) =>{
        switch (event.target.name){
            case 'nickName':
                this.setState({nickname: event.target.value});
                break;
            case 'age':
                this.setState({age: event.target.value});
                break;
            case 'price':
                this.setState({price: event.target.value});
                break;
            case 'type':
                this.setState({type: event.target.value});
                break;
            default:;
        }
    }

    render = () => {
        console.log('add animal component',this.props, this.state)
        console.log(window.location.hash)
        const editAnimal = this.props.animal;
        console.log("fasj;dfkjlkk'askf", editAnimal)
        let id = this.props.animal;
        const typeOperation = window.location.hash === '#/add';
        if (!typeOperation){
            id = window.location.hash.replace('#/edit/','');
            console.log(id);
        }
        const types = this.props.types;
        console.log('_________________________________',this.props)
        const mapOption = types.map((type) => {
            return (<option key={type._id} value={type._id}>{type.typeName}</option>)
        });
        let redyToSend = (this.state.nickname && this.state.price && this.state.age && this.state.type)||(!typeOperation);
        return (
            <div>
                <div className="container">
                    <form onSubmit = { (event) => {typeOperation ? this.props.props.onAddAnimal (
                            this.state.nickname,
                            this.state.price,
                            this.state.age,
                            this.state.type,
                            event,                    
                        ) : this.props.props.onAddCorrectedAnimal(
                            event,
                            this.state.nickname,
                            this.state.price,
                            this.state.age,
                            this.state.type,
                            id )}}>
                        <div className="form-row">
                            <div className="form-group col-3">
                                <label htmlFor="nickname">Nickname</label>
                                <input type="text" className="form-control" id="nickname" name="nickName" placeholder="Nickname"
                                    defaultValue={editAnimal.nickName || '' }
                                    //value={this.state.nickname} 
                                    onChange ={this.handelFormChange}>
                                </input>
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="age">Age</label>
                                <input type="number" className="form-control" id="age" name="age" placeholder="Age"
                                    defaultValue={editAnimal.age || ''}
                                    //value={this.state.age}
                                    onChange ={this.handelFormChange}>
                                </input>
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="price">Price</label>
                                <input type="number" className="form-control" id="price" name="price" placeholder="Price"
                                    defaultValue={editAnimal.price || ''}
                                    //value={this.state.price}
                                    onChange ={this.handelFormChange}></input>
                            </div>
                            <div className="form-group col-m3">
                                <label htmlFor="input-type">Breed</label>
                                <select id="input-type" className="form-control" name="type"
                                    defaultValue={editAnimal.type || ''}
                                    //value={this.state.type}
                                    onChange ={this.handelFormChange}>
                                    <option  value={''}>{'not chosen'}</option>
                                    {mapOption}
                                </select>
                            </div>
                        </div>
                        <Link to={{pathname:"/",}}><button type="submit" disabled = {redyToSend === '' ? true : false} onClick = {(event)=>{
                            this.props.onAddAnimal(event,
                                this.state.nickname,
                                this.state.price,
                                this.state.age,
                                this.state.type,
                                id    )    
                        }} className="btn btn-primary">Submit</button></Link>
                    </form> 
                </div >
            </div>
        )
    }
}
export const AddEditComponent = AddEditAnimalList;