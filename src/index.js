import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers/store';
import { App } from './App';
import { configureFakeBackend } from './helpers/fake-backend';

// setup fake backend
configureFakeBackend();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
