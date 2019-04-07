import photons from '../apis/core/photons';
import history from '../components/core/history/history';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_PHOTON,
    FETCH_PHOTONS,
    FETCH_PHOTON,
    DELETE_PHOTON,
    EDIT_PHOTON
} from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createPhotons = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await photons.post('/photons', { ...formValues, creatorId: userId });

    dispatch({ type: CREATE_PHOTON, payload: response.data });
    history.push('/');
};

export const fetchPhotons = () => async dispatch => {
    const response = await photons.get('/photons');

    dispatch({ type: FETCH_PHOTONS, payload: response.data });
};

export const fetchPhoton = (id) => async dispatch => {
    const response = await photons.get(`/photons/${id}`);

    dispatch({ type: FETCH_PHOTON, payload: response.data });
};

export const editPhoton = (id, formValues) => async dispatch => {
    const response = await photons.patch(`/photons/${id}`, formValues);

    dispatch({ type: EDIT_PHOTON, payload: response.data });
    history.push('/');
};

export const deletePhoton = (id) => async dispatch => {
    await photons.delete(`/photons/${id}`);

    dispatch({ type: DELETE_PHOTON, payload: id });
    history.push('/');
};