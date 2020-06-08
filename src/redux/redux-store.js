import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import moviesReducer from "./movies/movies-reducer";
import movieReducer from "./movie/movie-reducer";
import recommendationReducer from "./recommendation/recommendation-reducer";
import genresReducer from "./genres/genres-reducer";

const reducers = combineReducers({
    movies: moviesReducer,
    movie: movieReducer,
    recommendation: recommendationReducer,
    genres: genresReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// window.store = store;

export default store;