import { moviesAPI } from "../../api/api";
export const SET_RECOMMENDATION = "SET_RECOMMENDATION";

export const setRecommendation = (movies) => ({ type: SET_RECOMMENDATION, payload: movies });

export const getRecommendations = (id) => (dispatch, getState) => {
    moviesAPI.getRecommendations(id)
        .then(response => {
            const genres = getState().genres;
            const moviesWithGenres = response.data.results.map(movie => {
                return {
                    ...movie,
                    genres: movie.genre_ids.map(genreId => genres[genreId]),
                }
            });
            dispatch(setRecommendation(moviesWithGenres));
        });
}
