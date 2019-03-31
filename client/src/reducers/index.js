import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './core/authReducer';
import photonReducer from './core/photonReducer';


export default combineReducers({
    auth: authReducer,
    form: formReducer,
    photons: photonReducer
});