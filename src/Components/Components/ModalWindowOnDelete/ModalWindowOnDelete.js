import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export class ModalWindowOnDelete extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Modal isOpen={this.props.store.animalStore.animals.modalDel} toggle={this.props.store.onHideModalDelete} className={this.props.className}>
                    <ModalHeader toggle={this.props.store.onHideModalDelete}>Do you really want to remove this animal</ModalHeader>
                    <ModalBody>
                        NickName : {this.props.store.animalStore.deleteAnimal.animalForDelete[0].nickname} <br></br>
                        Type : {this.props.store.animalStore.deleteAnimal.animalForDelete[0].typesName.typeName}<br></br>
                        Price : {this.props.store.animalStore.deleteAnimal.animalForDelete[0].price} $<br></br>
                        Age : {this.props.store.animalStore.deleteAnimal.animalForDelete[0].age}<br></br>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.props.store.deleteAnimal(this.props.store.animalStore.deleteAnimal.animalForDelete[0]._id)}>Yes</Button>{' '}
                        <Button color="secondary" onClick={this.props.store.onHideModalDelete}>No</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}