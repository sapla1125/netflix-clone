import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title,fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        } fetchData();
    }, [fetchUrl]);
    
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="rows__posters">
                {/* Several Row Posters */}

                {movies.map(movie => (
                    <img 
                    key = {movie.id}
                    className={`row__poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} />
                ))}
            </div>
        </div>
    )
}
