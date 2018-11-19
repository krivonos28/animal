import { combineReducers } from 'redux';
import animals from './animals.reducer'
import join from './join.reducer'

export default combineReducers({
   animals,
   join
  })