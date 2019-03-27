import { combineReducers } from 'redux';
import authReducer from './core/auth/authReducer';


export default combineReducers({
    auth: authReducer
});