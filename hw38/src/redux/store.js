import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import TodoReducer from './reducers/TodoReducers';

const isDevelopment = true;
const middleware = [thunk];

if (isDevelopment) {
	const { logger } = require('redux-logger');
	middleware.push(logger);
}

const reducer = combineReducers({
    Todo: TodoReducer
});

const initialState = {};

const apply = applyMiddleware(
	...middleware
);

export const configureAppStore = () => {
	const store = configureStore({
		reducer,
        initialState,
		devTools: isDevelopment,
		enhancers: [apply],
	});

	return store;
};

const store = configureAppStore();

export default store;