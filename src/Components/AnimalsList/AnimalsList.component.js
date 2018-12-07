import React, { Component } from 'react';


class AnimalCardComponent extends Component {
    constructor(props) {
        super()
    }
    render() {
        var animalCard = this.props.animalStore.animals.map((item, i, ) => {
            return (
                <tr key={item._id}>
                    <th key={item._id + "row"} scope="row">{i + 1}</th>
                    <td key={item._id + "nickName"} className="nickName">{item.nickname ? item.nickname : "No name"}</td>
                    <td key={item._id + "breed"} className="breed">{item.typesName.typeName}</td>
                    <td key={item._id + "age"} className="age">{item.age}</td>
                    <td key={item._id + "price"} className="price">{item.price}</td>
                    <td key={item._id + "buttons"}>
                        <button key={item._id + "button__delite"} data-id={item._id} onClick={this.props.onAddAnimalForDeleteInStore}>X</button>
                        <button key={item._id + "button__edit"} data-id={item._id} onClick={this.props.onEditAnimal} >Edit</button>
                    </td>
                </tr>
            )
        })
        return (
            <div className="container">
                <table className="table table-white">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nickname</th>
                            <th scope="col">Breed</th>
                            <th scope="col">Age</th>
                            <th scope="col">Price</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {animalCard}
                    </tbody>
                </table>
            </div>
        )
    }
}
export const AnimalCard = AnimalCardComponent;