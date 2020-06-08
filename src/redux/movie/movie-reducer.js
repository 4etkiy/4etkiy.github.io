import { SET_MOVIE } from "./movie-actions";

const initialState = null;

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_MOVIE:
            return action.payload;

        default:
            return state
    }
}

export default moviesReducer;