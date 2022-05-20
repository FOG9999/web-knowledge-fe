import { combineReducers, createStore } from 'redux';
import { loadingReducer } from './reducers/LoadingReducer';
import { windowReducer } from './reducers/WindowReducer';

export const store = createStore(
    combineReducers({
        window: windowReducer,
        loading: loadingReducer
    }),
)