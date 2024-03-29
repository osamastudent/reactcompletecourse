import inc_dec from './inc_dec';
import {addMinus,addMinus2} from './add_minus';
import { combineReducers } from 'redux';

const rootReducer=combineReducers({
inc_dec,
addMinus,
addMinus2,
});

export default rootReducer