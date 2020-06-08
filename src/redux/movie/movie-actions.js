import { moviesAPI } from "../../api/api";
export const SET_MOVIE = "SET_MOVIE";

export const setMovie = (movie) => ({ type: SET_MOVIE, payload: movie });

export const getMovie = (query) => (dispatch, getState) => {
    moviesAPI.getMovie(query)
        .then(response => {
            dispatch(setMovie(response.data));
        });
}
