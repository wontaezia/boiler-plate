import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from '@modules/rootSlice';
import rootWatcher from '@modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, logger],
    devTools: true,
});

sagaMiddleware.run(rootWatcher);

declare global {
    type Store = typeof store;
    type AppDispatch = typeof store.dispatch;
    type GetState = typeof store.getState;
}

export default store;
