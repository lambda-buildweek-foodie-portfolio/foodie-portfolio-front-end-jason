import React from 'react';
import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
 import thunk from 'redux-thunk';
 import logger from "redux-logger";
 import {createStore, applyMiddleware} from 'redux'

import { App } from './App';
//import { configureFakeBackend } from './helpers/fake-backend';
    import {rootReducer} from '../src/reducers/index' 



 const  store = createStore(rootReducer, applyMiddleware(logger, thunk));

//configureFakeBackend();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);