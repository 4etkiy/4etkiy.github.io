import { SET_GENRES } from "./genres-actions";

const initialState = [];

const genresReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_GENRES:
            return action.payload;
        default:
            return state
    }
}

export default genresReducer;