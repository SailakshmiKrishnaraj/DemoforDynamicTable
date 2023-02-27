import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import UserReducer from './UserReducer';

let middleware = [thunk];

if (process.env.NODE_ENV === "development") {
    const loggerMiddleware = createLogger();
    middleware = [thunk, loggerMiddleware];
} else {
    middleware = [thunk];
}

const store = createStore(UserReducer, applyMiddleware(...middleware));

export default store;