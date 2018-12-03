import React, { Component } from 'react';

class AnimalCardComponent extends Component {
    constructor(props) {
        super()
        this.state = {
            editState1: false,
        }
    }
    changeStateTrue = () =>{
        this.setState({editState1: true})
    }
    changeStateFalse = (e) =>{
        this.props.onAddCorrectedAnimal(
            e,
            this.inputNickName.value,
            this.inputAge.value,
            this.inputPrice.value,
            this.selectType.value,
            this.props.item._id 
        );
        this.setState({editState1: false})
    }
    render() {
        console.log("New animal card props", this.props);
        console.log("this is animals map", this.state.editState1);
        if (!this.state.editState1) {
            return (
                (<tr key={this.props.item._id} onDoubleClick={this.changeStateTrue}>
                    <th key={this.props.item._id + "row"} scope="row">{this.props.i + 1}</th>
                    <td key={this.props.item._id + "nickName"} className="nickName">{this.props.item.nickname ? this.props.item.nickname : "No name"}</td>
                    <td key={this.props.item._id + "breed"} className="breed">{this.props.item.typesName.typeName}</td>
                    <td key={this.props.item._id + "age"} className="age">{this.props.item.age}</td>
                    <td key={this.props.item._id + "price"} className="price">{this.props.item.price}</td>
                    <td key={this.props.item._id + "buttons"}>
                        <button key={this.props.item._id + "button__delite"} data-id={this.props.item._id} onClick={this.props.onAddAnimalForDeleteInStore}>X</button>
                    </td>
                </tr>))
        };
        return (
            <tr key={this.props.item._id}>
                <th key={this.props.item._id + "row"} scope="row">{this.props.i + 1}</th>
                <td key={this.props.item._id + "nickName"} className="nickName"><input type="text" className="form-control" id="nickname" placeholder="Nickname"
                    defaultValue={this.props.item.nickname ? this.props.item.nickname : "No name"}
                    ref={(el) => this.inputNickName = el}>
                </input></td>
                <td key={this.props.item._id + "breed"} className="breed"><select id="input-type" className="form-control" defaultValue={this.props.item.type}
                    ref={(el) => this.selectType = el}>
                    <option value="">Не выбрано</option>
                    <option value="5bed209ecb2acfe0ac5bc720">tiger</option>
                    <option value="5bed209ecb2acfe0ac5bc722">panda</option>
                    <option value="5bed1fbecb2acfe0ac5bc6cc">lion</option>
                </select></td>
                <td key={this.props.item._id + "age"} className="age"><input type="number" className="form-control" id="age" placeholder="Age"
                    defaultValue={this.props.item.age}
                    ref={(el) => this.inputAge = el}>
                </input></td>
                <td key={this.props.item._id + "price"} className="price"><input type="number" className="form-control" id="price" placeholder="Price"
                    defaultValue={this.props.item.price}
                    ref={(el) => this.inputPrice = el}></input></td>
                <td key={this.props.item._id + "buttons"}>

                    <button key={this.props.item._id + "button__edit"} data-id={this.props.item._id} onClick={(event) => this.changeStateFalse(
                        event
                    )} >Edit</button>
                </td>
            </tr>);
    }
}

export const AnimalCard = AnimalCardComponent;
