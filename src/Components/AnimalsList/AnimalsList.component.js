import React, { Component } from 'react';
import { AnimalCardRow } from '../Components/AnimalCard'


class AnimalCardComponent extends Component {
    constructor(props) {
        super()
    }
    render() {
        var animalCard = this.props.animalStore.animals.map((item, i, ) => {
            return (
                <AnimalCardRow item = {item} i = {i}></AnimalCardRow>
              
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
export const AnimalList = AnimalCardComponent;