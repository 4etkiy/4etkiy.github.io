import React from "react";
import { connect } from "react-redux";
import { getMovie } from "../../redux/movie/movie-actions";
import { getRecommendations } from "../../redux/recommendation/recommendation-actions";
import { getGenres } from "../../redux/genres/genres-actions";
import s from "./MoviePage.module.css"
import Image from "../../components/Image/Image"
import MovieCard from "../../components/MovieCard/MovieCard";

const mapStateToProps = (state) => ({
    movie: state.movie,
    recommendation: state.recommendation,
    genres: state.genres
});

const mapDispatchToProps = {
    getMovie,
    getRecommendations,
    getGenres,
};

class MoviePage extends React.Component {

    componentDidMount() {
        this.props.getGenres();
    }

    componentDidUpdate(prevProps) {
        const oldData = this.props.movie;
        const newId = this.props.match.params.movieId;
        const oldId = prevProps.match.params.movieId;

        if (newId !== oldId || (!oldData && this.props.genres)) {
            this.props.getMovie(newId);
            this.props.getRecommendations(newId);
            window.scrollTo(0, 0);
        }

    }

    render() {
        const genres = this.props.movie && this.props.movie.genres.map(genre => genre.name);

        if (this.props.movie) {
            return (
                <div className={s.containerMoviePage}>
                    <div className={s.movie}>
                        <Image url={this.props.movie.poster_path} className={s.image} />
                        <div className={s.info}>
                            <h1 className={s.title}>{this.props.movie.title}</h1>
                            <div className={s.release}>Год Выпуска {this.props.movie.release_date}</div>
                            <div className={s.popularity}>Популярность {this.props.movie.popularity}</div>

                            <div className={s.original_title}>Оригинальное название {this.props.movie.original_title}</div>
                            <div className={s.original_language}>Оригинальный язык {this.props.movie.original_language}</div>
                            <p>
                                {genres.join(', ')}
                            </p>
                        </div>
                        <Image url={this.props.movie.backdrop_path} className={s.image} />
                        <p className={s.overview}>{this.props.movie.overview}</p>
                        {/* <div className={s.video}>Видео {this.props.movie.video}</div> */}
                    </div >
                    <div className={s.list}>
                        {this.props.recommendation.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>

                </div>
            )
        } else {
            return <div>Loading...</div>
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);

