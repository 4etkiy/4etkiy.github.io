import * as axios from "axios";

const API_KEY = "6642a4dd205dd56e6d10c72356a854de";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
})

export const moviesAPI = {
    getMovies(query, page) {
        const params = {
            api_key: API_KEY,
            query: query,
            page: page,
        };

        return instance.get('search/movie', { params })
    },
    getMovie(id) {
        const params = {
            api_key: API_KEY,
        };

        return instance.get(`movie/${id}`, { params })
    },
    getRecommendations(id) {
        const params = {
            api_key: API_KEY,
        };
        return instance.get(`movie/${id}/recommendations`, { params })
    },
    getGenres() {
        const params = {
            api_key: API_KEY,
        };

        return instance.get(`genre/movie/list`, { params })
    }
}