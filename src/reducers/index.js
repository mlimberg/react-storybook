import ToDos from './toDoReducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  ToDos
});

export default rootReducer