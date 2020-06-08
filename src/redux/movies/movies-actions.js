import { moviesAPI } from "../../api/api";
export const SET_MOVIES = "SET_MOVIES";
export const ADD_MOVIES = "ADD_MOVIES";

export const setMovies = (movies) => ({ type: SET_MOVIES, payload: movies });
export const addMovies = (movies) => ({ type: ADD_MOVIES, payload: movies });

export const getMovies = (query, page) => (dispatch, getState) => {
    moviesAPI.getMovies(query, page)
        .then(response => {
            const genres = getState().genres;
            const moviesWithGenres = response.data.results.map(movie => {
                return {
                    ...movie,
                    genres: movie.genre_ids.map(genreId => genres[genreId]),
                }
            });

            const result = { ...response.data, results: moviesWithGenres };

            if (page) dispatch(addMovies(result));
            else dispatch(setMovies(result));
        })
}
