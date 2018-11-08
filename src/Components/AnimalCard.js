import React, { Component } from 'react'


class AnimalCard extends Component {
    constructor(props) {
        super()
    }

    render() {
        var animalCard = this.props.allAnimals.map((item, i, arr) => {
            
            console.log(item)
            return (
  
                    <tr>
                            <th scope="row">{i+1}</th>
                            <td className="nickName">{item.nickname ? item.nickname : "No name"}</td>
                            <td className ="breed">{item.type}</td>
                            <td className ="age">{item.age}</td>
                            <td className ="price">{item.price}</td>
                            <td>
                                <button data-id={item._id} onClick={this.props.deleteAnimal.bind(this)}>X</button>
                                <button data-id={item._id} onClick={this.props.editAnimal.bind(this)}>Edit</button>
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
export default AnimalCard;
