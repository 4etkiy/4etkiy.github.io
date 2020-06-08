import { SET_RECOMMENDATION } from "./recommendation-actions";
const initialState = [];

const recommendationReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_RECOMMENDATION:
            return action.payload;

        default:
            return state
    }
}

export default recommendationReducer;