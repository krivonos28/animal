import { combineReducers } from 'redux';
import animals from './animals.reducer';
import join from './join.reducer';
import editAnimal from './editAnimal.reducer';
import deleteAnimal from './deleteanimal.reducer'

export default combineReducers({
   animals,
   join,
   editAnimal,
   deleteAnimal
  })