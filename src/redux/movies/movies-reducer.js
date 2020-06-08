import { SET_MOVIES, ADD_MOVIES } from "./movies-actions";
const initialState = {
    page: 1,
    results: []
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_MOVIES:
            return action.payload;
        case ADD_MOVIES:
            return {
                page: action.payload.page,
                results: [
                    ...state.results,
                    ...action.payload.results,
                ]
            }

        default:
            return state
    }
}

export default moviesReducer;