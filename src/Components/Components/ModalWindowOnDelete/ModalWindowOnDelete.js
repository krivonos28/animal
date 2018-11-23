import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import './modal.css';

class ModalWindowOnDelete extends React.Component {
    

    render() {
        console.log(this.props)
        debugger
        return (
            <div className="container">
            <div className="modal-container" style={{ height: 200 }}>
                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={this.props.animalstore.onShowModalDelete}>
                    Launch contained modal
                </Button>

                <Modal
                    show={this.props.animalstore.animalStore.modalDel}
                    onHide={this.props.animalstore.onHideModalDelete}
                    container={this}
                    aria-labelledby="contained-modal-title">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Contained Modal
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
                        ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.animalstore.onHideModalDelete}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </div>
            </div>
        );
    }
}






















// import Modal from 'react-bootstrap-modal'

// className ModalWindowOnDelete extends React.Component {

// render(){
//     console.log(this.props)
//         let closeModal = () => {
//             console.log('close modal')
//         //this.setState({ open: false })
//     }

//         let saveAndClose = () => {
//             console.log('save')
//         }

//         return (
//             <div>
//                 <button type='button'>Launch modal</button>

//                 <Modal
//                     show={this.props.animalstore.animalStore.madalDel}
//                     onHide={(closeModal)}
//                     aria-labelledby="ModalHeader"
//                 >
//                     <Modal.Header closeButton>
//                         <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <p>Some Content here</p>
//                     </Modal.Body>
//                     <Modal.Footer>
//                         If you don't have anything fancy to do you can use
//                         the convenient `Dismiss` component, it will
//                         trigger `onHide` when clicked
//                         <Modal.Dismiss classNameName='btn btn-default'>Cancel</Modal.Dismiss>

//                          Or you can create your own dismiss buttons
//                         <button classNameName='btn btn-primary' onClick={saveAndClose}>
//                             Save
//                 </button>
//                     </Modal.Footer>
//                 </Modal>
//             </div>
//         )
//     }}
//     //ReactDOM.render(<ModalExample />, document.body);



export default ModalWindowOnDelete;