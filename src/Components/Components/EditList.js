import React, { Component } from 'react';


class EditAnimal extends Component {
    componentDidMount(){
        
    }
    render() {
        console.log(this.props);
        //debugger
        const  animalForEdit  = this.props.animalForEdit.animalStore.editAnimal.animalForEdit;
        const id =this.props.animalForEdit.animalStore.editAnimal.idAnimalForEdit
        console.log("-------------", this.props)
        
        
        return (
            <div>
                <div className="container">
                    <form >
                        <div className="form-row">
                            <div className="form-group col-3">
                                <label htmlFor="nickname">Nickname</label>
                                <input type="text" className="form-control" id="nickname" placeholder="Nickname" 
                                    defaultValue={animalForEdit.nickName} 
                                    ref={(el) => this.inputNickName = el}>
                                    </input>
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="age">Age</label>
                                <input type="number" className="form-control" id="age" placeholder="Age" 
                                    defaultValue={animalForEdit.age}
                                    ref = {(el) => this.inputAge = el}>
                                    </input>
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="price">Price</label>
                                <input type="number" className="form-control" id="price" placeholder="Price" 
                                defaultValue={animalForEdit.price}
                                ref = {(el) => this.inputPrice = el}></input>
                            </div>
                            <div className="form-group col-m3">
                                <label htmlFor="input-type">Breed</label>
                                <select id="input-type" className="form-control" defaultValue = {animalForEdit.type}
                                ref = {(el) => this.selectType = el}>
                                    <option value="">Не выбрано</option>
                                    <option value="5bed209ecb2acfe0ac5bc720">tiger</option>
                                    <option value="5bed209ecb2acfe0ac5bc722">panda</option>
                                    <option value="5bed1fbecb2acfe0ac5bc6cc">lion</option>
                                </select>
                            </div>
                        </div>
                        <button className="btn btn-primary"
                            onClick = {(event)=>{
                              
                                this.props.animalForEdit.onAddCorrectedAnimal(
                                event,
                                this.inputNickName.value,
                                this.inputAge.value,
                                this.inputPrice.value,
                                this.selectType.value,
                                id 
                            )
                            
                            
                            }}>Submit</button>{}
                    </form>
                </div>
            </div>
        )
    }
}
export const EditAnimalComponent = EditAnimal;