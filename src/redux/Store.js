import { combineReducers, createStore } from 'redux';
import { windowReducer } from './reducers/WindowReducer';

export const store = createStore(
    combineReducers({
        window: windowReducer
    }),
)