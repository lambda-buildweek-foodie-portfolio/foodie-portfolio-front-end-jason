import React from 'react';
import  render  from 'react-dom';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import logger from "redux-logger";
// import {createStore, applyMiddleware} from 'redux'
import {store} from '../src/helpers/store';
import { App } from './App';
import { configureFakeBackend } from './helpers/fake-backend';
// import rootReducer from './reducers';



// const  store = createStore(rootReducer, applyMiddleware(logger, thunk));

configureFakeBackend();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
