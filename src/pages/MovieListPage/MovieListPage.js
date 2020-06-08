import React from "react";
import { connect } from "react-redux";
import { getMovies } from "../../redux/movies/movies-actions";
import { getGenres } from "../../redux/genres/genres-actions";
import MovieCard from "../../components/MovieCard/MovieCard";
import s from "./MovieListPage.module.css";

const mapStateToProps = (state) => ({
    movies: state.movies.results,
    page: state.movies.page,
    genres: state.genres,
});

const mapDispatchToProps = {
    getMovies,
    getGenres,
};

class MoviesPage extends React.Component {
    state = {
        query: "",
    };

    componentDidMount() {
        this.props.getGenres();
    }

    onChange = (e) => {
        this.setState({
            query: e.target.value,
        });
    };

    onSearch = () => {
        this.props.getMovies(this.state.query);
    };
    onShowMore = () => {
        this.props.getMovies(this.state.query, this.props.page + 1);
    };
    onUp = () => {
        this.props.getMovies(this.state.query);
    };

    render = () => {
        return (
            <div className={s.pageContainer}>
                <div className={s.search}>
                    <div className={s.searchContainer}>
                        <input className={s.searchInput}
                            placeholder={"Search"}
                            onChange={this.onChange}
                            value={this.state.query}
                        ></input>
                        <button className={s.onSearch} onClick={this.onSearch}>Search</button>
                    </div>
                    <button className={s.onShowMore} onClick={this.onShowMore}>Show more</button>
                    <button className={s.onUp} onClick={this.onUp}>Up</button>
                </div>

                <div className={s.list}>
                    {this.props.movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>

            </div>


        );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
