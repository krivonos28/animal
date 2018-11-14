import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
    animals: [],
    idAnimalFroEdit: [],
    addConfimMessage: '',
    animalForEdit: ''
}
function animals(state = initialState, action) {
    switch (action.type) {
        case "ADD_ANIMALS":
            return {
                ...state,
                animals: [...action.animals]
            }
        case "ADD_ONE_ANIMAL":
            return {
                ...state,
                animals: [...state.animals, action.animal]
            }

        case 'ADD_ID_ANIMALFOREDIT':
            return {
                ...state,
                idAnimalForEdit: action.idForEdit
            }
        case 'ADD_ANIMAL_FOR_EDIT':
            return {
                ...state,
                animalForEdit: action.animal
            }
        case "ADD_ANIMAL_GOOD":
            return {
                ...state,
                addConfimMessage: action.confirmMessage
            }
        case "PRESS_ADD":
            return {
                ...state,
                addConfimMessage: action.confirmMessage
            }
        default: console.log('no action')
    }
    return initialState;
}



const store = createStore(animals, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();