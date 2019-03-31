import _ from 'lodash';
import {
    FETCH_PHOTON,
    FETCH_PHOTONS,
    CREATE_PHOTON,
    EDIT_PHOTON,
    DELETE_PHOTON
} from '../../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PHOTONS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_PHOTON:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_PHOTON:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_PHOTON:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_PHOTON:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}