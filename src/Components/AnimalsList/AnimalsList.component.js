import React, { Component } from 'react';


class AnimalCardComponent extends Component {
    constructor(props) {
        super()
    }
    render() {
        var animalCard = this.props.animalStore.animals.map((item, i, ) => {
            return (
                <tr key={i + 1 * Math.random()}>
                    <th key={i + 1 * Math.random()} scope="row">{i + 1}</th>
                    <td key={i + 1 * Math.random()} className="nickName">{item.nickname ? item.nickname : "No name"}</td>
                    <td key={i + 1 * Math.random()} className="breed">{item.typesName[0].typeName}</td>
                    <td key={i + 1 * Math.random()} className="age">{item.age}</td>
                    <td key={i + 1 * Math.random()} className="price">{item.price}</td>
                    <td key={i + 1 * Math.random()}>
                        
                        <button key={i + 1 * Math.random()} data-id={item._id} onClick={this.props.onAddAnimalForDeleteInStore}>X</button>
                        <button key={i + 1 * Math.random()} data-id={item._id} onClick={this.props.onEditAnimal} >Edit</button>
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