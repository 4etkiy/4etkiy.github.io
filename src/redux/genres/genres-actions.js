import { moviesAPI } from "../../api/api";
export const SET_GENRES = "SET_GENRES";

export const setGenres = (movie) => ({ type: SET_GENRES, payload: movie });

export const getGenres = (query) => (dispatch) => {
    moviesAPI.getGenres(query)
        .then(response => {
            const genres = {};

            response.data.genres.forEach(genre => {
                genres[genre.id] = genre.name;
            })

            dispatch(setGenres(genres));
        });
}