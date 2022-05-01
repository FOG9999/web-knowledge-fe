const initialState = {
    winHeight: window.innerHeight,
    winWidth: window.innerWidth
}

export const windowReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return {
                winHeight: window.innerHeight,
                winWidth: window.innerWidth
            }
        }
    }
}