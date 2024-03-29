import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from 'movie-trailer';


const base_url = "https://image.tmdb.org/t/p/original/";


export default function Row({ title,fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailorUrl] = useState("");

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        } fetchData();
    }, [fetchUrl]);
    
    const opts = {
        height: "390",
        width: "100%",
        playerVars:{
            autoplay:1,
        }
    }

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailorUrl('');
        }else {
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams (new URL(url).search);
                setTrailorUrl(urlParams.get('v')); 
            })
            .catch( (error) => console.log(error));
        }
    }
    
    
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="rows__posters">
                {/* Several Row Posters */}

                {movies.map(movie => (
                    <img 
                    key = {movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} /> }
        </div>
    )
}
