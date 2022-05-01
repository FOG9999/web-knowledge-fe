import { WINDOW_TYPES } from "../actions/ActionTypes"

const initialState = {
    winHeight: window.innerHeight,
    winWidth: window.innerWidth
}

export const windowReducer = (state = initialState, action) => {
    switch (action.type) {
        case WINDOW_TYPES.RESIZE: {
            return {
                winHeight: window.innerHeight,
                winWidth: window.innerWidth
            }
        }
        default: {
            return initialState;
        }
    }
}