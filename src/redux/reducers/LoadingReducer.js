import { LOADING_TYPES } from "../actions/ActionTypes"

const initialState = {
    loading: false
}

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_TYPES.LOADING: {
            return {
                loading: true
            }
        }
        default: {
            return initialState;
        }
    }
}