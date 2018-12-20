import { combineReducers } from 'redux';
import animals from './animals.reducer';
import join from './join.reducer';
import editAnimal from './editAnimal.reducer';
import deleteAnimal from './deleteanimal.reducer'
import launchSpinner from './spiner.reducer'

import { reducer as formReducer } from 'redux-form'

export default combineReducers({
   animals,
   join,
   editAnimal,
   deleteAnimal,
   launchSpinner,
   form: formReducer
  })