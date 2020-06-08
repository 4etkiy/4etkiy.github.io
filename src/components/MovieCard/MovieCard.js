import React from "react";
import s from "./MovieCard.module.css";
import Image from "../Image/Image";
import { Link } from "react-router-dom";



const MovieCard = (props) => {
    const { movie } = props;


    return (
        <Link className={s.card} to={`/movie/${movie.id}`}>
            <Image url={movie.poster_path} className={s.image} />
            <div className={s.desc}>
                <h1 className={s.title}>
                    {movie.title}
                </h1>
                <p>
                    <span className={s.infoTitle}>Дата выхода: </span>
                    {movie.release_date}
                </p>
                <p>
                    {movie.genres && movie.genres.join(', ')}
                </p>
                <p>
                    {movie.overview}
                </p>
            </div>
        </Link>);
}
export default MovieCard;

