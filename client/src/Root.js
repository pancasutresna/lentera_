import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ({children, initialState = {}}) => {

    //composeEnhancers(applyMiddleware(reduxThunk))
    const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)));

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};