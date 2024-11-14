import React from 'react';

const PopularMovieList = ({ popularMovies }) => {  // Terima popularMovies sebagai props
    return popularMovies.map((movie, i) => {
        return (
        <div className="Movie-wrapper" key={i}>
            <div className="Movie-title">{movie.title}</div>
            <img
            className="Movie-image"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            />
            <div className="Movie-date">{movie.release_date}</div>
            <div className="Movie-rate">{movie.vote_average}</div>
        </div>
        );
    });
};

export default PopularMovieList;
