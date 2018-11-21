import React, { Component } from 'react';


class EditAnimal extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.props.onAddAnimal}>
                        <div className="form-row">
                            <div className="form-group col-3">
                                <label htmlFor="nickname">Nickname</label>
                                <input type="text" className="form-control" id="nickname" placeholder="Nickname"></input>
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="age">Age</label>
                                <input type="number" className="form-control" id="age" placeholder="Age"></input>
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="price">Price</label>
                                <input type="number" className="form-control" id="price" placeholder="Price"></input>
                            </div>
                            <div className="form-group col-m3">
                                <label htmlFor="input-type">Breed</label>
                                <select id="input-type" className="form-control">
                                    <option value="5bed209ecb2acfe0ac5bc720">tiger</option>
                                    <option value="5bed209ecb2acfe0ac5bc722">panda</option>
                                    <option value="5bed1fbecb2acfe0ac5bc6cc">lion</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>{}
                    </form>
                </div>
            </div>
        )
    }
}
export const EditAnimalComponent = EditAnimal;