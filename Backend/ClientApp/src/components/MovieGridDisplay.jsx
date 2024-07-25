import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
const MovieGridDisplay = ({ movies }) => {
  return (
    <div>
      <div className="flex justify-center align-middle my-6 ">
       
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4  gap-2 justify-center w-full ml-3 px-5 mt-2">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.title}>
            <MovieCard props={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieGridDisplay;
