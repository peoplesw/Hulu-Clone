import React, { useEffect, useState } from 'react';
import './Results.css';
import VideoCard from './VideoCard.js';
import axios from './axios.js';
import FlipMove from 'react-flip-move';


function Results({ selectedOption }) {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        // run this code EVERY time the Results component loads/ mounts
        async function fetchData() {
            const response = await axios.get(selectedOption);
            console.log(response.data.results);
            setMovies(response.data.results);
            return response;
        }
        fetchData();

    }, [selectedOption])
    
    return (
        <div className="results">
            <FlipMove>
                {movies.map((movie) => (
                    <VideoCard key={movie.id} movie={movie}/> // key is to make the re-rendering slicker. does clever caching under the hood
                ))}
            </FlipMove>
            
        </div>
    )
}

export default Results
