import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@modules/store';
import { Global } from '@emotion/react';
import globalStyles from '@styles/global';
import App from '@src/App';

ReactDOM.render(
    <Provider store={store}>
        <App />
        <Global styles={globalStyles} />
    </Provider>,
    document.getElementById('root')
);
