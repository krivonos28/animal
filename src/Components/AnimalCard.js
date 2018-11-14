import React, { Component } from 'react'
import {connect} from 'react-redux'

import {withRouter} from 'react-router-dom'


class AnimalCard extends Component {
    constructor(props) {
        super()
       
    }

    editAnimal(e){
        const id = e.currentTarget.dataset.id;
        console.log(id)
        this.props.onEditAnimal(id)
        this.props.history.push('/edit')
    }

    render() {
        console.log(this.props.animalStore)
        var animalCard = this.props.animalStore.map((item, i,) => {    
            //debugger
            return (
  
                <tr key={i+1*Math.random()}>
                    <th key={i+1*Math.random()} scope="row">{i+1}</th>
                    <td key={i+1*Math.random()} className="nickName">{item.nickname ? item.nickname : "No name"}</td>
                    <td key={i+1*Math.random()} className ="breed">{item.type}</td>
                    <td key={i+1*Math.random()} className ="age">{item.age}</td>
                    <td key={i+1*Math.random()} className ="price">{item.price}</td>
                    <td key={i+1*Math.random()}>
                        <button key={i+1*Math.random()} data-id={item._id} onClick={this.props.deleteAnimal.bind(this)}>X</button>
                        <button key={i+1*Math.random()} data-id={item._id} onClick={this.editAnimal.bind(this)} >Edit</button>
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
export default withRouter (connect(
    state => ({animalStore: state.animals}),
    dispatch =>({
        onEditAnimal: (animalId)=>{
        dispatch({type: 'ADD_ID_ANIMALFOREDIT', idForEdit: animalId})
        }
    })
) (AnimalCard));
