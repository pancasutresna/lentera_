import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from 'Root';

import './index.css';
import App from './components/App';

ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.getElementById('root')
);
registerServiceWorker();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import reduxThunk from 'redux-thunk';

// import './index.css';
// import App from './App';
// import reducers from './reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     reducers,
//     composeEnhancers(applyMiddleware(reduxThunk))
// );

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );
// registerServiceWorker();
