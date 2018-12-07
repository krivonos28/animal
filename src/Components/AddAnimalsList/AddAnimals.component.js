import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddAnimalList extends Component {
    constructor (props){
        super()
        this.state ={
                nickname:   '',
                age:        0,
                price:      0,
                type:       ''
            
    }}
    handelNickNameChange = (event) =>{
        this.setState({nickname: event.target.value})
    }
    handleAgeChange = (event) =>{
        this.setState({age: event.target.value})
    }
    handlePriceChange = (event) =>{
        this.setState({price: event.target.value})
    }
    handleAgeChange = (event) =>{
        this.setState({nickname: event.target.value})
    }
    render() {
        console.log('add animal component',this.props, this.state)
        let types = this.props.addAnimalStore.types;
        let mapOption = types.map((type) => {
            return (<option key={type._id} value={type._id}>{type.typeName}</option>)
        });
        return (
            <div>
                <Link to='/'>Home</Link>
                <div className="container">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-3">
                                <label htmlFor="nickname">Nickname</label>
                                <input type="text" className="form-control" id="nickname" placeholder="Nickname"
                                    value={this.state.nickname}
                                    onChange ={this.handelNickNameChange}>
                                </input>
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="age">Age</label>
                                <input type="number" className="form-control" id="age" placeholder="Age"
                                    defaultValue={'safd'}
                                    ref={(el) => this.addInputAge = el}>
                                </input>
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="price">Price</label>
                                <input type="number" className="form-control" id="price" placeholder="Price"
                                    defaultValue={"1"}
                                    ref={(el) => this.addInputPrice = el}></input>
                            </div>
                            <div className="form-group col-m3">
                                <label htmlFor="input-type">Breed</label>
                                <select id="input-type" className="form-control"
                                    defaultValue={"1"}
                                    ref={(el) => this.addSelectType = el}>
                                    {mapOption}
                                </select>
                            </div>
                        </div>
                        <button  className="btn btn-primary" onClick={console.log(
                                this.addInputNickName
                            )
                            // (e) => {this.props.onAddAnimal(
                            // e,
                            // this.inputNickName.value,
                            // this.inputAge.value,
                            // this.inputPrice.value,
                            // this.selectType.value,
                            // )}

                       }
                        >Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
export const AddAnimalCard = AddAnimalList;